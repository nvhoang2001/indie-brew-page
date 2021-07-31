import { ReactComponent as BackArrow } from "../../Assets/Back Arrow.svg";

import "./ReturnHomepage.scss";

const ReturnHomepage = () => {
	return (
		<div className="ReturnHomepage">
			<div className="ReturnHomepage__svg">
				<BackArrow />
			</div>

			<span className="ReturnHomepage__text">Back to homepage</span>
		</div>
	);
};

export default ReturnHomepage;
