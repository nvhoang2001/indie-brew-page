import { useMediaQuery } from "react-responsive";
import { ReactComponent as BackArrow } from "../../Assets/Back Arrow.svg";

import "./ReturnHomepage.scss";

const phoneLanscapeMaxWidth = 800;
const phonePortraitMaxWidth = 420;

const landcapePhoneQuery = { maxDeviceWidth: phoneLanscapeMaxWidth, orientation: "landscape" };
const portraitPhoneQuery = { maxDeviceWidth: phonePortraitMaxWidth, orientation: "portrait" };

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
