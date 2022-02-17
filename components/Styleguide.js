// import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { useContext } from 'react'
import { UIThemeContext } from '../pages/_app'

// DATA / CONSTANTS
const designElementColors = {
	quote: "blue",
	dark: "black",
	light: "white",
};
const tools = [
	// { name: "Postgres", url: "https://www.postgresql.org/" },
	// { name: "Prisma", url: "https://www.prisma.io/" },
	// { name: "Nextjs", url: "https://nextjs.org/" },
	{ name: "Reactjs", url: "https://reactjs.org/" },
	{ name: "TailwindCSS", url: "https://tailwindcss.com/" },
	{ name: "GraphQL", url: "https://graphql.org/" },
	{ name: "RESTFUL APIs", url: "https://restfulapi.net/" },
	{ name: "Nodejs", url: "https://nodejs.org/en/" },
	{ name: "Git", url: "https://git-scm.com/" },
];

const showTools = (
	<div className="space-x-2">
		{tools.map(tool => (
			<a key={`${tool.name.toString()} + ${tool.toString()}`} className="link" href={tool.url}>
				{tool.name}
			</a>
		))}
	</div>
)

// RENDER COMPONENT
const Styleguide = () => {

	const { darkModeDetails } = useContext(UIThemeContext);

	const pfp = darkModeDetails.isOn
		? "/rhyguy-profilepic-lookright-circle-darkmode.png"
		: "/rhyguy-profilepic-lookright-circle.png"

	return (
		<>
			<NextSeo title="Style Guide | Rhyan Vargas - Full Stack Web Developer" />

			{/* HERO TEXT */}
			<section className="
				hero
				container
				flex
				flex-col
				items-center
				tablet:grid
				tablet:gap-4
				tablet:grid-cols-2 
				tablet:grid-rows-1 
			">
				{/* Image */}
				<div className="dark:z-10 flex h-40 pb-5 tablet:pb-0 tablet:h-full justify-center">
					<div className="w-40 h-full tablet:w-80 relative">
						<Image
							className="mix-blend-overlay"
							alt="Rhyan Vargas Full Stack Web Developer Profile Picture"
							src={pfp}
							layout="fill"
							objectFit="contain"
							quality={100}
							sizes="320px"
							// width={320}
							// height={320}
							preload="true"
						/>
					</div>
				</div>
				{/* Content */}
				<div className="flex flex-col text-center tablet:text-left tablet:justify-start">
					{/* <div> */}
					<span className="label">My name is Rhyan Vargas... </span>
					<h1>more than a devloper.</h1>
					<p className="">
						Passionate about creating vision , processes and bringing together team members who are equally excited to bring ideas to life.
						I use code and tech to build and scale those ideas.
					</p>
					{/* </div> */}
					{/* <div> */}
					{showTools}
					{/* </div> */}
					<div className="flex justify-center tablet:justify-start">
						<button className="btn-primary mt-10">See my work</button>
					</div>
				</div>
			</section>

			{/* BUTTONS  / links*/}
			<section className="container flex space-x-5">
				<button className="btn-primary "> hire me </button>
				<button className="btn-secondary">hire me</button>
			</section>

			{/* SECTION TEXT */}
			<section className="container">
				<h2>Heading - h2</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
					libero iusto consequuntur ratione a. Ut voluptatem iste vitae
					similique possimus, libero necessitatibus nobis inventore odio error
					ullam officiis, nesciunt voluptatibus!
				</p>
			</section>

			{/* BLOCKQUOTE */}
			<section className="container">
				<blockquote className="flex flex-col content-center justify-center relative">
					<h2 className="">block quote</h2>
					<div className="relative" aria-hidden="true">
						{/* <div > */}
						<span className={`quote `}>
							&ldquo;
						</span>
						{/* </div> */}
						<p>
							I am a client of Rhyan's and have worked closely with Rhyan this
							past year with the Cash Forecasting Automation project. Rhyan has
							excellent communication skills: he is an active listener who
							ensured he understood my requests and vision and he also took the
							time to give me in-depth answers using terminology I was able to
							relate to and understand. Rhyan exceeded my and the company’s
							expectations by delivering this project before the stringent go
							live date and his forward thinking additionally brought forth
							enhancements that I didn’t even think were possible. Rhyan is
							charismatic and well-spoken and has a very robust technological
							knowledge which makes him an outstanding and valuable asset in the
							IT support and development world. He is highly dependable and
							meticulous with superior organizational skills which aides in him
							completing all tasks flawlessly and before the required deadlines.
							Rhyan is highly respected and qualified to handle any project
							thrown at him and he will succeed in delivering quality work of
							the highest standards. He is a born leader who has a positive
							impact in the company’s bottom line
						</p>
					</div>
					<cite className="flex justify-center">
						<Image
							className="rounded-full"
							src="https://via.placeholder.com/150"
							alt="Laura A. Black recommendation for Rhyan Vargas"
							width="56"
							height="56"
						/>

						<div
							className="flex flex-col justify-center content-start ml-3 
					
					"
						>
							<hr
								className={`w-8 border-2 border-${designElementColors.quote} mb-1`}
							/>
							<span className="">Laura A. Black</span>
							<span className="text-black text-tiny text-opacity-50 dark:text-gray">
								Cash Operations Team Lead
							</span>
						</div>
					</cite>
				</blockquote>
			</section>

		</>
	);
};

export default Styleguide;
