import { FC, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { genreAction } from "../../state";
import { GenreComponent } from "../../components";

interface GenrePagePropsInterface {}

export const GenrePage: FC<GenrePagePropsInterface> = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(genreAction.getAllGenres());
	}, [dispatch]);
	return (
		<div className={["container"].join(", ")}>
			<GenreComponent />
		</div>
	);
};
