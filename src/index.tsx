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



const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
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
