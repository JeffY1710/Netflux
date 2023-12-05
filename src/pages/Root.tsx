import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";

export default function Root(){
    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <Header />
            <Outlet />
        </body>
        </html>
    )
}