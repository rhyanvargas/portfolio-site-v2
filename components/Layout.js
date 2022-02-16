import Nav from "./Nav";
import Footer from "./Footer";
import { useContext } from 'react'
import { UIThemeContext } from '../pages/_app'


const Layout = ({ children }) => {

	const { darkModeDetails, darkModeClass } = useContext(UIThemeContext)

	return (
		<>
			<div className={`page-wrapper ${darkModeClass}`}>
				<Nav />
				<main className={`container`}>{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
