import { log } from "console";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNRWrdeQjK9fGRc8-1sTHO5qD7R0JJXkA",
  authDomain: "netflux-c7103.firebaseapp.com",
  projectId: "netflux-c7103",
  storageBucket: "netflux-c7103.appspot.com",
  messagingSenderId: "531428847688",
  appId: "1:531428847688:web:43c9c5cd379913eff4e87d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const database = getFirestore(app)
let currentUser: User;

export async function addSerie(id: any, poster_path: string, title: string, genre_ids: string[] ,overview: string,){
  try {
    const serieDoc = await addDoc(collection(database, "series"), {
      id: id,
      poster_path: poster_path,
      title: title,
      genre_ids: genre_ids,
      overview: overview
    });
    console.log("Serie created");

  } catch (e) {
    console.error("Error adding Serie: ", e);
  }
}

export async function Inscription(firstname: string, lastname: string, email: string, password: string){
    try {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                //const user = userCredential.user;
                console.log("user created");
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


        const UserDoc = await addDoc(collection(database, "users"), {
          first: firstname,
          last: lastname,
          email: email,
          password: password
        });
        console.log("User created with ID: ", UserDoc.id);

      } catch (e) {
        console.error("Error adding User: ", e);
      }
}

export async function Connexion(email:string, password: string){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    //const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}


export function isConnected():any{
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid
      currentUser = user;
      console.log(uid);
      
      return true;
    }else {
      return false
    }
  });
}

export function test(){
  console.log(currentUser.email);
  
}

export async function disconnect(){
  signOut(auth).then(() => {
    // Sign-out successful.
    isConnected()
  }).catch((error) => {
    // An error happened.
    console.log(error);
    
  });
}

export async function getCollection(col: string) {
    const coll = collection(database, col);
    const snapshot = await getDocs(coll);
    const collList = snapshot.docs.map(doc => doc.data());
    return collList;
}



