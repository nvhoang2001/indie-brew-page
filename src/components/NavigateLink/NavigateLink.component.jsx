import { Link } from "react-router-dom";
import "./NavigateLink.style.scss";

const NavigateLink = (props) => {
	return (
		<div className={`navigate-link ${props.className ? props.className : ""}`}>
			<Link to={props.href}>
				{props.text} <span className="navigate-link__arrow">&rarr;</span>
			</Link>
		</div>
	);
};

export default NavigateLink;
