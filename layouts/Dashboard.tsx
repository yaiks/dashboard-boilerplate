import React from "react";
import Header from "../components/screens/Header";
import Sidebar from "../components/screens/Sidebar";

const Dashboard: React.FC<{}> = ({ children }) => (
	<div className='h-screen flex flex-col'>
		<Header />
		<div className='flex-1 flex'>
			<Sidebar />
			<main className='bg-gray-200'>{children}</main>
		</div>
	</div>
);

export default Dashboard;
