import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { GenreInterface } from "../../../types";
import styles from "./GenreItem.module.css";

interface GenreItemPropsInterface {
	genre: GenreInterface;
}

export const GenreItem: FC<GenreItemPropsInterface> = ({
	genre: { id, name },
}) => {
	const navigate = useNavigate();
	return (
		<p className={styles.GenreItem} onClick={() => navigate(`${id}`)}>
			{name}
		</p>
	);
};
