import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header";
import { Inscription } from "../data/firebase/global";
import AfficherCardHome from "../components/liste_series/AfficherCardHome";

export default function Root() {
	return (
		<>
				<Header />
				<button
					onClick={() => {
						Inscription("chat", "chating", "chat@gmail.com", "chatchat");
					}}
				>
					add user
				</button>
				<Outlet />

                <AfficherCardHome/>
                
		</>
	);
}
