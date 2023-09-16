import { Chip } from "@mui/material";
import { FC } from "react";

import { GenreInterface } from "../../../types";

import styles from "./GenreBudges.module.css";

interface GenreBudgesPropsInterface {
	genres: GenreInterface[];
}

export const GenreBudges: FC<GenreBudgesPropsInterface> = ({ genres }) => {
	return (
		<div className={styles.GenreBudges}>
			{genres.map((genre) => (
				<Chip key={genre.id} label={genre.name} component='p' />
			))}
		</div>
	);
};
