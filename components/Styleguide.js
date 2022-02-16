// import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

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
			<a key={tool.toString()} className="link" href={tool.url}>
				{tool.name}
			</a>
		))}
	</div>
)
const Styleguide = () => {
	const href = "www.google.com";

	return (
		<>
			<NextSeo title="Style Guide | Rhyan Vargas - Full Stack Web Developer" />
			{/* HERO TEXT */}
			<section className="container flex flex-wrap sm:flex-no-wrap">
				<div className="">
					<span className="label">My name is Rhyan Vargas... </span>
					<h1>more than a devloper.</h1>
					<p className="">
						I care about the user experience of both the end-users and the
						people managing the product. The tools I use to create amazing
						products include (but not limitied to): <br /> {showTools}
					</p>
					<button className="btn-primary mt-10">See my work</button>
				</div>
				<div className=" relative w-2/5 flex-shrink-0">
					<Image
						className="mix-blend-multiply"
						alt="Rhyan Vargas Full Stack Web Developer Profile Picture"
						src="/rhyguy-profilepic-lookright-transparent.png"
						layout="responsive"
						quality={100}
						width={421}
						height={638}
						preload="true"
					/>
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
						<span className={`quote text-${designElementColors.quote}`}>
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
							src="https://media-exp1.licdn.com/dms/image/C5603AQHPgfi62GZuYA/profile-displayphoto-shrink_100_100/0/1517543113026?e=1620259200&v=beta&t=eY6yRGVIey9ASBnp2LO8Vv2YyGRF_Y3ToZS_gHcK1ks"
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
