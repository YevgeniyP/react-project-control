import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MovieDetailComponent } from "../../components";
import { useAppDispatch } from "../../hooks";
import { movieAction } from "../../state";

interface MovieDetailPagePropsInterface {}

export const MovieDetailPage: FC<MovieDetailPagePropsInterface> = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(movieAction.getMovieById(+id));
	}, [dispatch, id]);
	return (
		<div className={["container"].join(", ")}>
			<MovieDetailComponent />
		</div>
	);
};
