import Header from "../components/screens/Header";
import SidebarContainer from "../containers/SidebarContainer";

const Dashboard: React.FC<{}> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <SidebarContainer />
        <main className="flex flex-1 p-3 bg-gray-200">{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
