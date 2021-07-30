import { Link } from "react-router-dom";
import "./Link.style.scss";

const CustomLink = (props) => {
	return (
		<li className={`link ${props.className ? props.className : ""}`}>
			<Link to={props.href}>{props.content}</Link>
		</li>
	);
};

export default CustomLink;
