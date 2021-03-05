import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";
import Avatar from "./Avatar";
import { useContext } from "react";
import { UIThemeContext } from "../pages/_app";

export default function Nav() {
	const { darkModeDetails, darkModeClass, handleThemeToggle } = useContext(
		UIThemeContext
	);

	const handleClick = () => {
		handleThemeToggle();
	};

	const logoURL = darkModeDetails.isOn
		? "/RhyGuy-whitelogo-v2.png"
		: "/RhyGuy-blacklogo-v2.png";

	return (
		<header className="navbar">
			<nav
				className="flex flex-1 items-center justify-between"
				role="navigation"
			>
				<ul className="flex items center justify-between" role="list">
					<li>
						<Link href="/#work">
							<a>Work</a>
						</Link>
					</li>
					<li>
						<Link href="/#testimonials">
							<a>Testimonials</a>
						</Link>
					</li>

					<li>
						<Link href="/" passHref>
							<Avatar imgURL={logoURL} />
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<a>Blog</a>
						</Link>
					</li>
					<li>
						<Link href="/#contact">
							<a>Contact</a>
						</Link>
					</li>
					<li>
						<Link href="/styleguide">
							<a>Styleguide</a>
						</Link>
					</li>
				</ul>
			
				<button onClick={handleClick}>
					{darkModeDetails.isOn ? "Light" : "Dark"}
				</button>
				<ScrollIndicator />
			</nav>
		</header>
	);
}
