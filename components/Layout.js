
import Nav from "./Nav";
import Footer from "./Footer";
import { useContext } from 'react'
import { UIThemeContext } from '../pages/_app'


const Layout = ({ children }) => {

	const { darkModeClass } = useContext(UIThemeContext)

	return (
		<>
			{/* must place the dark class in highest most component. Thus extra container */}
			<div className={`page-container ${darkModeClass}`} >
				<div className={`page-wrapper`}>
					<Nav />
					<div className={`container`}>
						<main >{children}</main>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Layout;
