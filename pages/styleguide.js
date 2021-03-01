import PropTypes from "prop-types";
import Image from "next/image";

const styleguide = () => {
	return (
		<>
			<section className="container">
				<div>
					<span className="label">subtitle</span>
					<h1>section/hero title</h1>
					<p className="font-bold">
						This is a hero body - We started in a wash room and conquered the
						world. And in-between, we have scored big and also, sometimes,
						struggled to reach our goals. We have done our best for the best. We
						have improved and grown. Looking ahead to the future, always
						remembering where we came from. This is our story.
					</p>
				</div>
			</section>
			<section className="container">
				<h2>Heading - h2</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
					libero iusto consequuntur ratione a. Ut voluptatem iste vitae
					similique possimus, libero necessitatibus nobis inventore odio error
					ullam officiis, nesciunt voluptatibus!
				</p>
			</section>
			<section className="container">
				<blockquote className='flex flex-col content-center justify-center relative'>
					<h2 className="">block quote</h2>
					<div className="relative" aria-hidden="true">
						<div className="quote">
                            &ldquo;
                        </div>
                        <p>
                            I am a client of Rhyan's and have worked closely with Rhyan this
                            past year with the Cash Forecasting Automation project. Rhyan has
                            excellent communication skills: he is an active listener who ensured
                            he understood my requests and vision and he also took the time to
                            give me in-depth answers using terminology I was able to relate to
                            and understand. Rhyan exceeded my and the company’s expectations by
                            delivering this project before the stringent go live date and his
                            forward thinking additionally brought forth enhancements that I
                            didn’t even think were possible. Rhyan is charismatic and
                            well-spoken and has a very robust technological knowledge which
                            makes him an outstanding and valuable asset in the IT support and
                            development world. He is highly dependable and meticulous with
                            superior organizational skills which aides in him completing all
                            tasks flawlessly and before the required deadlines. Rhyan is highly
                            respected and qualified to handle any project thrown at him and he
                            will succeed in delivering quality work of the highest standards. He
                            is a born leader who has a positive impact in the company’s bottom
                            line
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

						<div className="flex flex-col justify-center content-start ml-3 
                        
                        ">
							<hr className="w-8 border-2 mb-1" />
							<span className="">Laura A. Black</span>
							<span className='text-black text-opacity-50 '>Cash Operations Team Lead</span>
						</div>
					</cite>
				</blockquote>
			</section>
		</>
	);
};

export default styleguide;