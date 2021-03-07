import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Footer from "./Footer";
import {useContext} from 'react'
import {UIThemeContext} from '../pages/_app'


const Layout = ({ children}) => {

const {darkModeDetails, darkModeClass}= useContext(UIThemeContext)

	return (
		<>
			
			<div className={`page-container ${darkModeClass}`} >
				<div className={`page-wrapper`}>
					<Nav />
					<div className={`container`}>
						<main className={styles.main}>{children}</main>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Layout;
