import { FC } from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutPropsInterface {}

export const MainLayout: FC<MainLayoutPropsInterface> = () => {
	return (
		<>
			<h1>HEADER</h1>
			<Outlet />
		</>
	);
};
