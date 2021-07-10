import Description from "../../components/Description/Description.component";
import IllustrateImage from "../../components/IllustrateImage/IllustrateImage.component";

import "./Waitisit.style.scss";
import image from "../../Assets/Phone Mockup.png";

const Waitisit = () => {
	const title = "Access your feed from the comfort of your phone.",
		content =
			"With native apps for both iOS and Android, accessing your curated content has never been easier.",
		linkHref = "#",
		linkContent = "Sign up for the waitisit";
	return (
		<section className="waitisit">
			<Description
				title={title}
				content={content}
				linkHref={linkHref}
				linkContent={linkContent}
				className="waitisit__des"
			/>
			<IllustrateImage imgSrc={image} className="waitisit__img" />
		</section>
	);
};

export default Waitisit;
