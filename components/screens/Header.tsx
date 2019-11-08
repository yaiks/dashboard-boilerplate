import React from "react";
import { ChevronDown, Bell, HelpCircle, Search } from "react-feather";

const HeaderItem: React.FC<{ title: string }> = ({ title }) => (
	<a
		href=''
		className='inline-block ml-2 hover:bg-gray-600 px-3 py-2 rounded-lg leading-none text-sm font-medium text-white'
	>
		{title}
	</a>
);

const items = ["Mailbox", "Customers", "Reporting", "Manage"];

const Header: React.FC<{}> = () => (
	<header className='flex flex-shrink-0'>
		<div className='w-64 flex-shrink-0 px-4 py-3 bg-gray-800'>
			<button className='block w-full flex items-center'>
				<img
					className='h-8 w-8 rounded-full object-cover'
					src='https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80'
					alt=''
				/>
				<span className='ml-4 mr-2 text-sm font-medium text-white'>
					Ricardo Han
				</span>
				<ChevronDown className='ml-auto text-gray-400' />
			</button>
		</div>
		<div className='flex-1 flex items-center justify-between px-6 bg-gray-700'>
			<nav className='flex'>
				{items.map(item => (
					<HeaderItem key={item} title={item} />
				))}
			</nav>
			<div className='flex items-center'>
				<div className='relative'>
					<label className='absolute inset-y-0 left-0 flex items-center pl-2'>
						<Search className='h-5 w-5 text-gray-500' />
					</label>
					<input
						type='text'
						className='block pl-10 pr-4 px-4 py-2 w-full bg-gray-900 rounded-lg text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none'
						placeholder='Search'
					/>
				</div>
				<button className='ml-6 text-gray-400 hover:text-gray-200'>
					<Bell className='h-5 w-5' />
				</button>
				<button className=' ml-6 text-gray-400 hover:text-gray-200'>
					<HelpCircle className='h-5 w-5' />
				</button>
			</div>
		</div>
	</header>
);

export default Header;
