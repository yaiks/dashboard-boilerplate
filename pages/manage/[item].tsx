import { NextPage } from "next";
import { useRouter } from "next/router";

import Dashboard from "../../layouts/Dashboard";

const Manage: NextPage<{}> = () => {
	const router = useRouter();
	const { item } = router.query;

	return (
		<Dashboard>
			<div>Manage: {item}</div>
			<div></div>
		</Dashboard>
	);
};

export default Manage;
