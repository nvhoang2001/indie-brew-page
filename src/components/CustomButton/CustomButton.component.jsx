import "./CustomButton.style.scss";

const CustomButton = (props) => {
	console.log(props);
	return (
		<button className="btn">
			<span className="btn--bold">{props.content}</span>{" "}
			{props.subContent ? (
				<span className="btn--thin"> - {props.subContent}</span>
			) : null}
		</button>
	);
};

export default CustomButton;
