import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
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

export const auth = getAuth(app)
const database = getFirestore(app)

export async function Inscription(firstname: string, lastname: string, email: string, password: string){
    try {
        createUserWithEmailAndPassword(auth, firstname, email)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
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

async function getCollection(col: string) {
    const coll = collection(database, col);
    const snapshot = await getDocs(coll);
    const collList = snapshot.docs.map(doc => doc.data());
    return collList;
}

// onAuthStateChanged(auth, user => {
//     if (user != null) {
//         console.log("logged in");
//     }else{
//         console.log("no user");
//     }
// })



