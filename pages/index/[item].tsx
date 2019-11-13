import { NextPage } from "next";
import { useRouter } from "next/router";

import Dashboard from "../../layouts/Dashboard";

const Home: NextPage<{}> = () => {
  const router = useRouter();
  const { item } = router.query;

  return (
    <Dashboard>
      <div>Mailbox: {item}</div>
      <div></div>
    </Dashboard>
  );
};

export default Home;
