import { NextPage } from "next";
import { useRouter } from "next/router";

import Dashboard from "../../layouts/Dashboard";

const Customers: NextPage<{}> = () => {
	const router = useRouter();
	const { item } = router.query;

	return (
		<Dashboard>
			<div>Customers: {item}</div>
			<div></div>
		</Dashboard>
	);
};

export default Customers;
