import { FC } from "react";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import styles from "./GenreComponent.module.css";
import { GenreItem } from "./GenreItem/GenreItem";

interface GenreComponentPropsInterface {}

export const GenreComponent: FC<GenreComponentPropsInterface> = () => {
	const { genreList } = useAppSelector((state) => state.genre);
	return (
		<div>
			<div className={styles.GenreList}>
				{genreList.map((genre) => (
					<GenreItem key={genre.id} genre={genre} />
				))}
			</div>
			<Outlet />
		</div>
	);
};
