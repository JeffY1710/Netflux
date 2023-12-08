import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/global.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";

import Inscription from "./components/inscription/Inscription";
import Connexion from "./components/connexion/Connexion";
import MotDePasseOublie from "./components/connexion/MotDePasseOublie";
import Profile from "./pages/Profile";
import AfficherCardHome from "./components/liste_series/AfficherCardHome";
import Header from "./components/common/Header";
import SerieDetail from "./components/serie_details/SerieDetails";
import SerieDetails from "./components/serie_details/SerieDetails";
import Calendar from "./components/calendrier/Calendar";
import { Commentaires } from "./components/avis/Commentaires";



const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([

 
	{
		path: "/",
		element: <AfficherCardHome/>,
	},

	{
		path: "/:showName",
		element: <SerieDetails/>
	},
	{
		path:"/profil",
		element: <Profile />
	},
  
 
	{
		path: "/inscription",
		element: <Inscription />,
	},
	{
		path: "/connexion",
		element: <Connexion />,
	},
  {
    path:"/motdepasseoublie",
    element: <MotDePasseOublie/>
  },
  {
		path: "/pages",
		element: <Profile/>,
	},
  {
    path:"/avis",
    element: <Commentaires/>
  },
  {
    path:"/calendar",
    element: <Calendar/>
  }
]);






root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
