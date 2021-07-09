import "./Link.style.scss";

const Link = (props) => {
	return (
		<li className={props.className}>
			<a href={props.href}>{props.content}</a>
		</li>
	);
};

export default Link;
