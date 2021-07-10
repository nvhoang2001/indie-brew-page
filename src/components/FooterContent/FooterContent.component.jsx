import TextDescription from "../TextDescription/TextDescription.component";

import "./FooterContent.style.scss";

const FooterContent = (props) => {
	const title = "IndieBrew",
		content =
			"With IndieBrew, get personal feeds from resources all around the  web, including Reddit, HackerNews and much more.",
		maker = "Made with \u2764 in the UK.";
	return (
		<div className="footer-content">
			<h4 className="footer-content__title">{title}</h4>
			<TextDescription className="footer-content__content" content={content} />
			<TextDescription className="footer-content__maker" content={maker} />
		</div>
	);
};

export default FooterContent;
