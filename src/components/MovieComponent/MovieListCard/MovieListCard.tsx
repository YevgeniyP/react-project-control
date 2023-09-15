import { Rating } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { baseImageURL } from "../../../constants";
import { MovieInterface } from "../../../types";

import styles from "./MovieListCard.module.css";

interface MovieListCardPropsInterface {
	movie: MovieInterface;
}

export const MovieListCard: FC<MovieListCardPropsInterface> = ({ movie }) => {
	const navigate = useNavigate();
	const { id, title, vote_average, poster_path } = movie;
	return (
		<>
			{movie && (
				<div className={styles.MovieListCard} onClick={() => navigate(`${id}`)}>
					<img
						className={styles.MovieListCardImage}
						src={`${baseImageURL}${poster_path}`}
						alt={title}
						loading='lazy'
					/>
					<div className={styles.MovieListCardInfo}>
						<h4>{title}</h4>
						<div>
							<p>Rating</p>
							<Rating value={vote_average * 0.5} precision={0.5} readOnly />
						</div>
					</div>
				</div>
			)}
		</>
	);
};
