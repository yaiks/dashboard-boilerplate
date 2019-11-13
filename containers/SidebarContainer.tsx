import { useRouter } from "next/router";
import { Home, Mail, Map, Monitor } from "react-feather";

import Sidebar from "../components/screens/Sidebar";

function getIcons(
  pathname: string
): { subpath: string; icon: React.ComponentType }[] {
  const icons = {
    "/customers": function() {
      return [
        { subpath: "f", icon: Mail },
        { subpath: "g", icon: Mail },
        { subpath: "h", icon: Mail },
        { subpath: "i", icon: Mail },
        { subpath: "j", icon: Mail }
      ];
    },
    "/reporting": function() {
      return [
        { subpath: "k", icon: Map },
        { subpath: "l", icon: Map },
        { subpath: "m", icon: Map },
        { subpath: "n", icon: Map },
        { subpath: "o", icon: Map }
      ];
    },
    "/manage": function() {
      return [
        { subpath: "p", icon: Monitor },
        { subpath: "q", icon: Monitor },
        { subpath: "r", icon: Monitor },
        { subpath: "s", icon: Monitor },
        { subpath: "t", icon: Monitor }
      ];
    },
    "/": function() {
      return [
        { subpath: "a", icon: Home },
        { subpath: "b", icon: Home },
        { subpath: "c", icon: Home },
        { subpath: "d", icon: Home },
        { subpath: "e", icon: Home }
      ];
    }
  };
  return (icons[pathname.toString()] || icons["/"])();
}

const SidebarContainer: React.FC<{}> = () => {
  const { pathname } = useRouter();
  const myIcons = getIcons(pathname);

  return <Sidebar icons={myIcons} pathname={pathname} />;
};

export default SidebarContainer;
