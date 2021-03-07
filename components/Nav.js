import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";
import Avatar from "./Avatar";
import { useContext } from "react";
import { UIThemeContext } from "../pages/_app";
import DarkModeButton from "./DarkModeButton";

export default function Nav() {
	const { darkModeDetails } = useContext(UIThemeContext);

	const logoURL = darkModeDetails.isOn
		? "/RhyGuy-whitelogo-v2.png"
		: "/RhyGuy-blacklogo-v2.png";

	const listItemStyles = "flex flex-1 justify-center items-center";
	const listItemBorderStyles =
		"border-r-2 border-black dark:border-white last:border-none";
	const aStyles = `
		relative
		hover:animate-wiggle 
		h-full 
		items-center 
		justify-center 
		flex-1 
		flex
	`;
	const navItems = [
		{
			key: 1,
			name: "work",
			url: "#work",
			locations: ["header"],
		},
		{
			key: 2,
			name: "reviews",
			url: "/testimonials",
			locations: ["header"],
		},
		{
			key: 4,
			name: "blog",
			url: "/blog",
			locations: ["header"],
		},
		{
			key: 5,
			name: "contact",
			url: "/#contact",
			locations: ["header"],
		},
		{
			key: 6,
			name: "styleguide",
			url: "/#styleguide",
			locations: ["header", "footer"],
		},
	];

	return (
		<header className="navbar">
			<nav
				className="flex flex-1 justify-between border-b-4 border-black dark:border-white"
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
							<Avatar imgURL={logoURL} />
						</a>
					</Link>
				</div>
				<ul className="flex flex-1 " role="list">
					{navItems
						.filter((item) => !item.locations.includes("footer"))
						.map((item) => (
							<li
								key={item.key}
								className={`${listItemStyles.concat(
									" ",
									listItemBorderStyles
								)} relative`}
							>
								<Link href={item.url}>
									<a className={aStyles}>{item.name}</a>
								</Link>
							</li>
						))}
				</ul>
				<DarkModeButton />
				{/* <ScrollIndicator /> */}
			</nav>
		</header>
	);
}
