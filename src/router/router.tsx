import { Navigate, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts";
import { GenrePage, MovieDetailPage, MoviePage } from "../pages";

export const router = createBrowserRouter([
	{
		path: "",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Navigate to={"movies"} />,
			},
			{
				path: "movies",
				element: <MoviePage />,
			},
			{
				path: "movies/:id",
				element: <MovieDetailPage />,
			},
			{
				path: "genres",
				element: <GenrePage />,
			},
		],
	},
]);
