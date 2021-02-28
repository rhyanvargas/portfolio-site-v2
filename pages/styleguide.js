import PropTypes from "prop-types";
import Image from "next/image";

const styleguide = () => {
	return (
		<div>
			<h1>Heading - h1</h1>
			<h2>Heading - h2</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
				libero iusto consequuntur ratione a. Ut voluptatem iste vitae similique
				possimus, libero necessitatibus nobis inventore odio error ullam
				officiis, nesciunt voluptatibus!
			</p>
			<blockquote>
				<div className="stylistic-quote-mark" aria-hidden="true">
					&ldquo;
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero
					unde delectus dignissimos distinctio, quae sed corporis tenetur
					repellendus? Cum beatae ab esse facilis eaque dignissimos animi
					voluptatem quasi vero.
				</p>
				<cite>
					<Image
						src="http://unsplash.it/g/30/30"
						alt="alt text here"
                        width='56'
                        height='56'
					/>
                    <div className="flex flex-col">
					    <span>Nick D</span>
					    <span>Operations</span>
                    </div>
				</cite>
			</blockquote>
		</div>
	);
};

export default styleguide;
