import React from 'react'
import Link from "next/link";
import Avatar from "./Avatar";

const BottomNav = () => {
  
    return (
        <footer className="">
            <nav className="flex flex-1 flex-col items-center justify-between" role="navigation">
                <ul className="flex items flex-1 center justify-between" role="list">
                    <li>
                        <Link href="/#work"><a>Work</a></Link>
                    </li>
                    <li>
                        <Link href="/#testimonials"><a>Testimonials</a></Link>
                    </li>
                    <li>
                        <Link href="/blog"><a>Blog</a></Link>
                    </li>
                    <li>
                        <Link href="/#contact"><a>Contact</a></Link>
                    </li>
                    <li>
                        <Link href="/styleguide"><a>Styleguide</a></Link>
                    </li>
                </ul>
                <div>
                    <span className="font-light text-tiny2 dark:text-gray">Built with &nbsp;☕️&nbsp;&nbsp;&amp;&nbsp;❤️&nbsp;&nbsp;by RhyGuy Digital ©2021</span>
                </div>
            </nav>
        </footer>
    );    
}

export default BottomNav
