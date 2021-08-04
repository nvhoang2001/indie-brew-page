import { useMediaQuery } from "react-responsive";
import { landcapePhoneQuery, portraitPhoneQuery } from "../../config";
import { ReactComponent as BackArrow } from "../../Assets/Back Arrow.svg";

import "./ReturnHomepage.scss";

const ReturnHomepage = () => {
	const isLanscapeMobile = useMediaQuery(landcapePhoneQuery);
	const isPortraitMobile = useMediaQuery(portraitPhoneQuery);
	const isMobile = isLanscapeMobile || isPortraitMobile;

	return (
		<div className="ReturnHomepage">
			<div className="ReturnHomepage__svg">
				<BackArrow />
			</div>

			{!isMobile && <span className="ReturnHomepage__text">Back to homepage</span>}
		</div>
	);
};

export default ReturnHomepage;
