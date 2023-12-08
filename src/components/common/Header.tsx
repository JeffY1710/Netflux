// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { disconnect } from '../../data/firebase/global';

const Header: React.FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const closeDropdown = () => {
      setDropdownOpen(false);
    };

  return (
    <><style>
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600&family=DM+Serif+Display&family=Lora:wght@500&family=Montserrat:wght@300&display=swap');

</style>
      <nav className="navbar">
              <div className="navbar-left">
                  <div className='navbar-link'>
                      <Link to={'/'} className='navbar-link'> Calendrier</Link>
                      <Link to={'/'} className='navbar-link'> Séries</Link>
                      <Link to={'/'} className='navbar-link'> Profil</Link>
                  </div>
              </div>
              <div className="navbar-right">
                  {/* Icône d'avatar - vous pouvez remplacer cette partie par votre propre composant ou icône */}
                  <div className="avatar-container" onClick={toggleDropdown}>

                      <FaUserCircle className="avatar-icon" />
                      {isDropdownOpen && (
                          <div className="dropdown-menu">
                              <ul>
                                  <Link to={''} className='li'>Calendrier</Link>
                                  <Link to={''} className='li'>Profil</Link>
                                  <Link to={''} className='li'>Liste des envies</Link>
                                  <Link to={''} className='li'>Se déconnecter</Link>
                                  <button onClick={disconnect}>Se déconnecter</button>
                              </ul>
                          </div>
                      )}


                  </div>
              </div>
          </nav></>
  );
};

export default Header;
