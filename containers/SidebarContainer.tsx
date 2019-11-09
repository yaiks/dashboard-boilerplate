import { useRouter } from "next/router";
import { Home, Mail, Map, List, Monitor } from "react-feather";

import Sidebar from "../components/screens/Sidebar";

function getIcons(
	pathname: string
): { title: string; icon: React.ComponentType }[] {
	const icons = {
		"/customers": function() {
			return [
				{ title: "Mail", icon: Mail },
				{ title: "Mail", icon: Mail },
				{ title: "Mail", icon: Mail },
				{ title: "Mail", icon: Mail },
				{ title: "Mail", icon: Mail }
			];
		},
		"/reporting": function() {
			return [
				{ title: "Map", icon: Map },
				{ title: "Map", icon: Map },
				{ title: "Map", icon: Map },
				{ title: "Map", icon: Map },
				{ title: "Map", icon: Map }
			];
		},
		"/manage": function() {
			return [
				{ title: "Monitor", icon: Monitor },
				{ title: "Monitor", icon: Monitor },
				{ title: "Monitor", icon: Monitor },
				{ title: "Monitor", icon: Monitor },
				{ title: "Monitor", icon: Monitor }
			];
		},
		default: function() {
			return [
				{ title: "Home", icon: Home },
				{ title: "Home", icon: Home },
				{ title: "Home", icon: Home },
				{ title: "Home", icon: Home },
				{ title: "Home", icon: Home }
			];
		}
	};
	return (icons[pathname.toString()] || icons["default"])();
}

const SidebarContainer: React.FC<{}> = () => {
	const { pathname } = useRouter();
	const myIcons = getIcons(pathname);

	return <Sidebar icons={myIcons} />;
};

export default SidebarContainer;
