import { Link, Outlet } from "react-router-dom";

export default function Root(){
    return(
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <header>
                <nav>
                   <ul>
                        <li><Link to="#">Temp</Link></li>
                        <li><Link to="#">Temp</Link></li>
                   </ul>
                </nav>
            </header>
            <Outlet />
        </body>
        </html>
    )
}