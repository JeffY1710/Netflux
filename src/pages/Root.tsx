import { Outlet } from "react-router-dom";
import { test } from "../data/firebase/global";
import Header from "../components/common/Header";
import AfficherCardHome from "../components/liste_series/AfficherCardHome";
import { Commentaires } from "../components/avis/Commentaires";
//import { currentUser } from "../data/firebase/global";

export default function Root(){
    return(
        <>
            <Header />
            <Outlet />
            <AfficherCardHome/>
            <Commentaires/>
        </>
          
    )
}
