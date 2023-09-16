import { Rating } from "@mui/material";
import { FC } from "react";

import { MovieDetailInterface } from "../../types";

import styles from "./MovieInfo.module.css";

interface MovieInfoPropsInterface {
	movie: MovieDetailInterface;
}

export const MovieInfo: FC<MovieInfoPropsInterface> = ({ movie }) => {
	return (
		<>
			<div className={styles.MovieInfo_overview}>
				<p>{movie.overview}</p>
			</div>
			<table className={styles.MovieInfo_table}>
				<tbody>
					<tr>
						<th>Status:</th>
						<td>{movie.status}</td>
					</tr>
					<tr>
						<th>Runtime:</th>
						<td>{movie.runtime}</td>
					</tr>
					<tr>
						<th>Revenue:</th>
						<td>{movie.revenue}</td>
					</tr>
					<tr>
						<th>Budget:</th>
						<td>{movie.budget}</td>
					</tr>

					<tr>
						<th>Popularity:</th>
						<td>{movie.popularity}</td>
					</tr>
					<tr>
						<th>Rating:</th>
						<td>
							<Rating
								value={movie.vote_average * 0.5}
								precision={0.5}
								readOnly
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
