import "./Backdrop.scss";

const Backdrop = (props) => {
	return (
		<>
			<div className="backdrop" onClick={props.onCancel} />
			{props.children}
		</>
	);
};

export default Backdrop;
