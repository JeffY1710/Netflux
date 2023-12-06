import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";

export default function Root(){
    return(
        <>
            <Header />
            <Outlet />
        </>
          
    )
}