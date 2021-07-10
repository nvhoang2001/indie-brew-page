import "./NavigateLink.style.scss";

const NavigateLink = (props) => {
	return (
		<div className={`navigate-link ${props.className ? props.className : ""}`}>
			<a href={props.href}>
				{props.text} <span className="navigate-link__arrow">&rarr;</span>
			</a>
		</div>
	);
};

export default NavigateLink;
