import React, { useState } from 'react';

type UserProfile = {
  name: string;
  age: number;
  bio: string;
  // ... other relevant fields
};

const Profile: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'John Doe',
    age: 25,
    bio: 'A brief bio about the user...',
    // ... other initial data
  });

  const updateProfile = () => {
    // Logique pour mettre à jour le profil
    // Par exemple, récupérer des données depuis une API et les définir avec setUserProfile
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
        <div className="mb-8">
          <h2 className="text-xl font-bold">{userProfile.name}</h2>
          <p>Age: {userProfile.age}</p>
          <p>Bio: {userProfile.bio}</p>
          {/* Rendu des autres détails de l'utilisateur */}
        </div>

        {/* Formulaire de changement de mot de passe */}
        <div className="mb-8">
          <div className="mb-4">
            <input
              type="password"
              placeholder="Ancien mot de passe"
              className="rounded px-4 py-2 w-full bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              className="rounded px-4 py-2 w-full bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirmer nouveau mot de passe"
              className="rounded px-4 py-2 w-full bg-gray-800 text-white"
            />
          </div>
          <button
            onClick={updateProfile}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Modifier le mot de passe
          </button>
        </div>

        {/* Formulaire de changement d'email */}
        <div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Ancien email"
              className="rounded px-4 py-2 w-full bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Nouvel email"
              className="rounded px-4 py-2 w-full bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Confirmer nouvel email"
              className="rounded px-4 py-2 w-full bg-gray-800 text-white"
            />
          </div>
          <button
            onClick={updateProfile}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Modifier l'email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
