import React, { useState } from 'react';
import '/Users/matteobruno/Desktop/NETFLUX React/Netflux/src/assets/css/profil.css';

// Define the types for the user data
type UserProfile = {
  name: string;
  age: number;
  bio: string;
  // ... other relevant fields
};

const Profile: React.FC = () => {
  // State to manage user data
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'John Doe',
    age: 25,
    bio: 'A brief bio about the user...',
    // ... other initial data
  });

  // Function to update user data
  const updateProfile = () => {
    // Logic to update the profile
    // For example, fetching data from an API and setting it using setUserProfile
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="user-details">
        <h2>{userProfile.name}</h2>
        <p>Age: {userProfile.age}</p>
        <p>Bio: {userProfile.bio}</p>
        {/* Render other user details */}
      </div>
   <div>
    <div>
    <div className='old-password'>
      <input type="password"
    placeholder="Ancien mot de passe"/>
    </div>
    
    
    <div className='new-password'>
    <input type="password"
    placeholder="Nouveau mot de passe"/>
    </div>
    
    <div className='confirm-password'>
    <input type="password"
    placeholder="Confirmer nouveau mot de passe"/>
    </div>
    </div>
    
    <button onClick={updateProfile}>Modifier le mot de passe</button>
    </div>   

    <div>
    <div>
    <div className='old-email'>
      <input type="text"
    placeholder="Ancien email"/>
    </div>
    
    
    <div className='new-email'>
    <input type="text"
    placeholder="nouvel email"/>
    </div>
    
    <div className='confirm-email'>
    <input type="text"
    placeholder="Confirmer nouvel email"/>
    </div>
    </div>
    
    <button onClick={updateProfile}>Modifier l'adresse mail</button>
    </div>   
    
      
    </div>
  );
};

export default Profile;
