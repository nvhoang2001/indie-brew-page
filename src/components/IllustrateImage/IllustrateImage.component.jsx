import "./IllustrateImage.style.scss";

const IllustrateImage = (props) => {
	return (
		<div className={`illustrate-image ${props.className ? props.className : ""}`}>
			<img src={props.imgSrc} alt />
		</div>
	);
};

export default IllustrateImage;
