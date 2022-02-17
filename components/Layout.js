
import Nav from "./Nav";
import Footer from "./Footer";
import { useContext } from 'react'
import { UIThemeContext } from '../pages/_app'


const Layout = ({ children }) => {

	const { darkModeClass } = useContext(UIThemeContext)

	// DATA
	const logoURL = (isDarkModeOn) => {
		return isDarkModeOn
			? "/RhyGuy-whitelogo-v2.png"
			: "/RhyGuy-blacklogo-v2.png";
	}

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
			url: "/reviews",
			locations: ["header"],
		},
		{
			key: 4,
			name: "blog",
			url: "#blog",
			locations: ["header"],
		},
		{
			key: 5,
			name: "contact",
			url: "#contact",
			locations: ["header"],
		},
		{
			key: 6,
			name: "styleguide",
			url: "#styleguide",
			locations: ["header", "footer"],
		},
	];

	return (
		<>
			{/* must place the dark class in highest most component. Thus extra container */}
			<div className={`page-container ${darkModeClass}`} >
				<div className={`page-wrapper`}>
					<Nav logoURL={logoURL} navItems={navItems} />
					<main >
						{children}
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
};




export default Layout;
