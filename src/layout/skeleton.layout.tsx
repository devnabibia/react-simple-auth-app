import { ReactChild, ReactChildren } from "react";
import Header from "./header.layout";

interface Props {
	children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Skeleton = ({ children }: Props): JSX.Element => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Skeleton;
