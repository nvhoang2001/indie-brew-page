import "./CustomButton.style.scss";

const CustomButton = (props) => {
	return (
		<button className={`btn ${props.className}`}>
			<span className="btn--bold">{props.content}</span>{" "}
			{props.subContent ? <span className="btn--thin"> - {props.subContent}</span> : null}
		</button>
	);
};

export default CustomButton;
