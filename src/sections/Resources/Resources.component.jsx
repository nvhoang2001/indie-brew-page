import Description from "../../components/Description/Description.component";
import IllustrateImage from "../../components/IllustrateImage/IllustrateImage.component";

import image from "../../Assets/Social Media Icons.png";
import "./Resources.style.scss";

const Resources = () => {
	const title = "Curate your feed from dozens of resources.",
		content =
			"We cover all major platforms where one could want to curate their feed from Reddit, ProductHunt, IndieHackers, and so much more.",
		linkHref = "#",
		linkContent = "See full list of resources";
	return (
		<section className="resources">
			<Description
				title={title}
				content={content}
				linkHref={linkHref}
				linkContent={linkContent}
			/>
			<IllustrateImage imgSrc={image} className="resources__img" />
		</section>
	);
};

export default Resources;
