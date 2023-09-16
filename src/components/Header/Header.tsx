import { FC } from "react";

import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo/Logo";
import { UserInfo } from "./UserInfo/UserInfo";

interface HeaderPropsInterface {}

export const Header: FC<HeaderPropsInterface> = () => {
	const navigate = useNavigate();
	return (
		<header className={styles.Header}>
			<div>
				<Logo />
			</div>
			<nav>
				<menu>
					<li onClick={() => navigate("movies")}>Movies</li>
					<li onClick={() => navigate("genres")}>Genres</li>
				</menu>
			</nav>
			<div>
				<UserInfo />
			</div>
		</header>
	);
};
