import React from 'react'
import Link from 'next/link'

const NavItem = ({name,styles, url}) => {
    
    const aStyles = 'h-full items-center justify-center flex-1 flex'

    
    return (
        <li className={styles}>
            <Link href={url}>
                <a className={aStyles}>{name}</a>
            </Link>
        </li>
    )
}

export default NavItem
