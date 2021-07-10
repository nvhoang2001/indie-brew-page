import image from "../../Assets/Feed Mockup.png";
import "./MockupImage.style.scss";

const MockupImage = (props) => {
	return (
		<div className={`mockup-image ${props.className ? props.className : ""}`}>
			<img src={image} alt="feed mockup" />
		</div>
	);
};

export default MockupImage;
