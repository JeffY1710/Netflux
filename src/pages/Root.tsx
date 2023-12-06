import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";
import { Inscription } from "../data/firebase/global";

export default function Root(){
    return(
        <>
            <Header />
            <button onClick={() => {Inscription("chat","chating","chat@gmail.com", "chatchat")}}>add user</button>
            <Outlet />
        </>
          
    )
}