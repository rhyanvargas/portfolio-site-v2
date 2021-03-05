import Image from 'next/image'
import React from 'react'


const Avatar =  React.forwardRef(({ onClick, href,imgURL }, ref) => {

    return (
            <a className=" relative h-8 w-28 tablet:w-40 laptop:w-44" href={href} ref={ref}>
                <Image className=""
                    src={imgURL} 
                    alt="RhyGuy logo"  
                    layout="fill"
                    objectFit="contain"
                />
            </a>

    )
})

export default Avatar
