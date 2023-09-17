import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components";

interface MainLayoutPropsInterface {}

export const MainLayout: FC<MainLayoutPropsInterface> = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
