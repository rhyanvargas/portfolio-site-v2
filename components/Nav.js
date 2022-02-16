import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";
import Avatar from "./Avatar";
import { useContext } from "react";
import { UIThemeContext } from "../pages/_app";
import DarkModeButton from "./DarkModeButton";


export default function Nav({ logoURL, navItems }) {
	const { darkModeDetails } = useContext(UIThemeContext);


	const logo = () => {
		console.log(logoURL(darkModeDetails.isOn));
	}

	const navList = (navItems) => {
		let mainNav = navItems.filter(item => {
			return !item.locations.includes('footer')
		});

		let nav = mainNav.map(item => (
			<li
				key={`${item.toString()} + ${item.key.toString()}`}
				className={`${listItemStyles.concat(
					" ",
					listItemBorderStyles
				)} relative`}
			>
				<Link href={item.url}>
					<a className={aStyles}>{item.name}</a>
				</Link>
			</li>
		))
		return nav;
	}

	const listItemStyles = "flex flex-1 justify-center items-center";
	const listItemBorderStyles =
		"border-r border-gray dark:border-white last:border-none";
	const aStyles = `
		relative
		hover:animate-wiggle 
		h-full 
		items-center 
		justify-center 
		flex-1 
		flex
	`;

	return (
		<header className="navbar">
			<nav
				className="flex flex-1 justify-between border-b border-gray dark:border-white"
				role="navigation"
			>
				<div
					className={`${listItemStyles.concat(
						" ",
						listItemBorderStyles
					)} pl-3 pr-3 flex items-center flex-grow-0 `}
				>
					<Link href="/">
						<a className="items-center relative h-full w-28 tablet:w-40 laptop:w-44">
							<Avatar imgURL='/RhyGuy-blacklogo-v2.png' />
						</a>
					</Link>
				</div>
				<ul className="flex flex-1 " role="list">
					{navList(navItems)}
				</ul>
				<DarkModeButton />
				{/* <ScrollIndicator /> */}
			</nav>
		</header>
	);
}
