import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
	icon: import("react-icons").IconType;
	label: string;
	active: Boolean;
	href: string;
};

export default function SidebarItem({ active, href, icon:Icon, label }: Props) {
	return (
		<Link
			href={href}
			className={twMerge(`
    flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400
    py-1`,active&&"text-white")}
		>
            <Icon />
			<p className="truncate w-full">{label}</p>

        </Link>
	);
}
