import "./TextDescription.style.scss";

const TextDescription = (props) => {
	return (
		<p className={`text-description ${props.className ? props.className : ""}`}>
			{props.content}
		</p>
	);
};

export default TextDescription;
