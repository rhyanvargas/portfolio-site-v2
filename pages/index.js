import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Styleguide from "../components/Styleguide";
import Reviews from "./reviews";

export default function Home() {

	return (
		<>
			<NextSeo title="Home | Rhyan Vargas - Full Stack Developer" />
			{/* <Styleguide/> */}
			<Styleguide />
		</>
	);
}
