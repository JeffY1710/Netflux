import { Outlet } from "react-router-dom";

import { Inscription } from "../data/firebase/global";
import Header from "../components/common/Header";

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
                
		</>
	);
}
