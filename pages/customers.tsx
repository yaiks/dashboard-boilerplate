import { NextPage } from "next";
import { useRouter } from "next/router";

import Dashboard from "../layouts/Dashboard";

const Customers: NextPage<{}> = () => {
  const router = useRouter();
  const { item } = router.query;
  console.log("item", item);

  return (
    <Dashboard>
      <div>Customers</div>
      <div></div>
    </Dashboard>
  );
};

export default Customers;
