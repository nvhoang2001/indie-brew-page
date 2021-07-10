import NavigateLink from "../NavigateLink/NavigateLink.component";

import "./Description.style.scss";

const Description = (props) => {
	return (
		<div className={`description ${props.className ? props.className : ""}`}>
			<h2 className="description__title">{props.title}</h2>
			<p className="description__content">{props.content}</p>
			<NavigateLink href={props.linkHref} text={props.linkContent} />
		</div>
	);
};

export default Description;
