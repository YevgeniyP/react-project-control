import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

import { MovieComponent } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { movieAction } from "../../state";

interface MoviePagePropsInterface {}

export const MoviePage: FC<MoviePagePropsInterface> = () => {
	const dispatch = useAppDispatch();
	const [query, setQuery] = useSearchParams({ page: "1" });
	const { movieList, totalPage } = useAppSelector((state) => state.movie);

	const page = +query.get("page");

	useEffect(() => {
		dispatch(movieAction.getAllMovies(page));
	}, [dispatch, page]);

	return (
		<div className={["container"].join(", ")}>
			<MovieComponent movies={movieList} />
			<div className={["paginationElement"].join(",")}>
				<Pagination
					size='large'
					page={page}
					defaultPage={page}
					count={totalPage}
					onChange={(_, page) => setQuery({ page: page.toString() })}
				/>
			</div>
		</div>
	);
};
