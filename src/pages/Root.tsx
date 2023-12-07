import { Outlet } from "react-router-dom";
import { test } from "../data/firebase/global";
import Header from "../components/common/Header";
//import { currentUser } from "../data/firebase/global";

export default function Root(){
    return(
        <>
            <Header />
            <Outlet />
        </>
          
    )
}
