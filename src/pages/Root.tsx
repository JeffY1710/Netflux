import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";
import { test } from "../data/firebase/global";
//import { currentUser } from "../data/firebase/global";

export default function Root(){
    return(
        <>
            <Header />
            <Outlet />
            <button onClick={test}></button>
        </>   
    )
}