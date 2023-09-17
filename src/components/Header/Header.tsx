import { FC } from "react";

import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo/Logo";
import { UserInfo } from "./UserInfo/UserInfo";
import { LinearProgress } from "@mui/material";
import { useAppSelector } from "../../hooks";

interface HeaderPropsInterface {}

export const Header: FC<HeaderPropsInterface> = () => {
	const { isLoading } = useAppSelector((state) => state.movie);
	const navigate = useNavigate();
	return (
		<div>
			<header className={styles.Header}>
				<div>
					<Logo />
				</div>
				<nav>
					<menu className={styles.Header_menu}>
						<li onClick={() => navigate("movies")}>Movies</li>
						<li onClick={() => navigate("genres")}>Genres</li>
					</menu>
				</nav>
				<div>
					<UserInfo />
				</div>
			</header>
			{isLoading && <LinearProgress />}
		</div>
	);
};
