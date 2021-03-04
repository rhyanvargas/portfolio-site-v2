import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children,darkMode,handleThemeToggle}) => {

	const dark = darkMode ? 'dark' : '';

	const handleClick = () => {
		console.log(dark);
		handleThemeToggle();
	}
	return (
		<>
			<Nav className={``}/>
			<div className={`container`}>
				<button onClick={handleClick}>
					{darkMode ? 'Light' : 'Dark'}
				</button>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;
