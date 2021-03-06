import Image from "next/image";
import React from "react";

const Avatar = ({ imgURL }) => {
	return (
		<Image
			className=""
			src={imgURL}
			alt="RhyGuy logo"
			layout="fill"
			objectFit="contain"
		/>
	);
};

export default Avatar;
