import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Nav() {
	return (
		<nav className={styles.main}>
			<ul className={styles.list} role="list">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/testimonials">Testimonials</Link>
				</li>
			</ul>
		</nav>
	);
}
