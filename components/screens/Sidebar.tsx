import React from "react";
import { Home, Mail, Map, List, Monitor } from "react-feather";

import Icon from "../bricks/Icon";

const icons = [
	{ title: "Home", icon: Home },
	{ title: "Mail", icon: Mail },
	{ title: "Map", icon: Map },
	{ title: "List", icon: List },
	{ title: "Monitor", icon: Monitor }
];

const items = ["Refunds", "Discounts", "Bugs"];

const SidebarItem: React.FC<{ title: string; icon: React.ComponentType }> = ({
	title,
	icon
}) => (
	<a
		href='#'
		className='mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-xs font-medium hover:bg-gray-200 rounded-lg'
	>
		<div className='inline-flex items-center'>
			<Icon icon={icon} />
			<span className='ml-2 text-xs font-semibold text-gray-900'>{title}</span>
		</div>
		<span className='inline-block w-10 text-center py-1 leading-none text-xs font-semibold bg-gray-300 rounded-full text-gray-700'>
			6
		</span>
	</a>
);

const BottomItem: React.FC<{ title: string; index: number }> = ({
	title,
	index
}) => (
	<a
		href=''
		className={`block text-sm font-medium text-gray-700 hover:text-gray-900 ${
			index !== 0 ? "mt-4" : ""
		}`}
	>
		{title}
	</a>
);

const Sidebar: React.FC<{}> = () => (
	<article className='w-64 p-6 bg-gray-100'>
		<nav className=''>
			<h2 className='text-xs font-semibold text-gray-600 uppercase tracking-wide'>
				Mailboxes
			</h2>
			<div className='mt-3'>
				{icons.map((each, index) => (
					<SidebarItem key={index} title={each.title} icon={each.icon} />
				))}
			</div>
			<h2 className='mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide'>
				Folders
			</h2>
			<div className='mt-4'>
				{items.map((item, index) => (
					<BottomItem key={index} title={item} index={index} />
				))}
			</div>
		</nav>
	</article>
);

export default Sidebar;
