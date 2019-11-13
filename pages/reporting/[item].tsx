import { NextPage } from "next";
import { useRouter } from "next/router";

import Dashboard from "../../layouts/Dashboard";

const Reporting: NextPage<{}> = () => {
	const router = useRouter();
	const { item } = router.query;

	return (
		<Dashboard>
			<div>Reporting: {item}</div>
			<div></div>
		</Dashboard>
	);
};

export default Reporting;
