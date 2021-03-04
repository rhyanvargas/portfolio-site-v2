import Link from "next/link";

import Avatar from "./Avatar";

export default function Nav({dark}) {
	return (
		<nav className='flex justify-between dark:bg-black dark:text-white'>
			<Avatar />
			<ul className='flex justify-between' role="list">
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
				<li>
					<Link href="/styleguide">Styleguide</Link>
				</li>
			</ul>
		</nav>
	);
}
