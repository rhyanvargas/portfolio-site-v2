import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";
import Avatar from "./Avatar";
import { useContext } from "react";
import { UIThemeContext } from "../pages/_app";
import DarkModeButton from "./DarkModeButton";
import NavItem from "./NavItem";


export default function Nav() {
	const { darkModeDetails } = useContext(UIThemeContext);

	const logoURL = darkModeDetails.isOn
		? "/RhyGuy-whitelogo-v2.png"
		: "/RhyGuy-blacklogo-v2.png";

	const styles = 'flex flex-1 justify-center items-center'
	const borderStyle = 'border-r-2 border-black dark:border-white last:border-none'


	return (
		<header className="navbar">
			<nav
				className="flex flex-1 justify-between border-b-4 border-black dark:border-white"
				role="navigation"
			>
				<div className={`${styles.concat(' ',borderStyle)} pl-3 pr-3 flex items-center flex-grow-0 desktop:flex-grow`}>
					<Link href="/" passHref>
						<Avatar imgURL={logoURL} />
					</Link>
				</div>
				<ul className="flex flex-1 " role="list">
					<NavItem name='Work' url='/' styles={styles.concat(' ',borderStyle)}/>
					<NavItem name='reviews' url='/#reviews' styles={styles.concat(' ',borderStyle)}/>
					<NavItem name='Blog' url='/blog' styles={styles.concat(' ',borderStyle)}/>
					<NavItem name='Contact' url='/#contact' styles={styles.concat(' ',borderStyle)}/>
				</ul>
				<DarkModeButton />
				{/* <ScrollIndicator /> */}
			</nav>
		</header>
	);
}
