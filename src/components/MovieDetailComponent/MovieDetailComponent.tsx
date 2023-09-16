import { FC } from "react";

import { useAppSelector } from "../../hooks";
import { MovieInfo } from "../MovieInfo/MovieInfo";
import { PosterPreview } from "../PosterPreview/PosterPreview";
import { GenreBudges } from "./GenreBudges/GenreBudges";
import styles from "./MovieDetailComponent.module.css";

interface MovieDetailComponentPropsInterface {}

export const MovieDetailComponent: FC<
	MovieDetailComponentPropsInterface
> = () => {
	const { currentMovie } = useAppSelector((state) => state.movie);
	return (
		<>
			{currentMovie && (
				<div className={styles.MovieDetailComponent}>
					<div className={styles.MovieDetailComponent_header}>
						<h2>{currentMovie.title}</h2>
						{currentMovie.title !== currentMovie.original_title ? (
							<h3>{currentMovie.original_title}</h3>
						) : (
							""
						)}
					</div>
					<div className={styles.MovieDetailComponent_poster}>
						<PosterPreview
							title={currentMovie.title}
							posterPath={currentMovie.poster_path}
						/>
					</div>
					<div className={styles.MovieDetailComponent_movieInfo}>
						<MovieInfo movie={currentMovie} />
					</div>
					<div className={styles.MovieDetailComponent_genreBudges}>
						<GenreBudges genres={currentMovie.genres} />
					</div>
					<div>Production company</div>
				</div>
			)}
		</>
	);
};
