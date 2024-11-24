import { Navigate, Route, Routes } from "react-router-dom";
import Skeleton from "../layout/skeleton.layout";
import HomePage from "../pages/home/Home.page";

const AppRoutes = (): JSX.Element => {
	return (
		<Skeleton>
			<Routes>
				<Route path="/" element={<HomePage />} />
        {/* Redirect to route */}
				<Route path="*" element={<Navigate replace to="/" />}/>
			</Routes>
		</Skeleton>
	);
};

export default AppRoutes;
