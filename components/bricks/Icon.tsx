import React, { MouseEventHandler } from "react";
import { Icon } from "react-feather";

export interface IconProps {
	icon: Icon;
}

const IconComponent: React.FC<IconProps> = props => {
	const { icon: IconCmp } = props;
	return <IconCmp className='h-6 w-6 text-gray-700' />;
};

export default IconComponent;
