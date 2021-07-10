import HeaderTitle from "../../components/HeaderTitle/HeaderTitle.component";
import MockupImage from "../../components/MockupImage/MockupImage.component";

import "./HeaderImage.style.scss";

const HeaderImage = () => {
	return (
		<section className="header-image">
			<HeaderTitle />
			<MockupImage className="header-image__img" />
		</section>
	);
};

export default HeaderImage;
