import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import BottomNav from "./BottomNav";
import {useContext} from 'react'
import {UIThemeContext} from '../pages/_app'


const Layout = ({ children}) => {

const {darkModeDetails, darkModeClass}= useContext(UIThemeContext)

	return (
		<div className={`page-container ${darkModeClass}`}>
			<Nav />
			<div className={`container`}>
				<main className={styles.main}>{children}</main>
			</div>
			<BottomNav />
		</div>
	);
};

export default Layout;
