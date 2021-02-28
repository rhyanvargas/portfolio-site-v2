import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Avatar from "./Avatar";

export default function Nav() {
	return (
		<nav className={styles.main}>
			<Avatar />
			<ul className={styles.list} role="list">
				<li>
					<Link href="/#work">Work</Link>
				</li>
				<li>
					<Link href="/#testimonials">Testimonials</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/#contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
