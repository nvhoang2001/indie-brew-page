import TextDescription from "../TextDescription/TextDescription.component";
import CustomButton from "../CustomButton/CustomButton.component";

import { ReactComponent as MemberImage } from "../../Assets/User Avatars.svg";
import "./HeaderTitle.style.scss";
import { Link } from "react-router-dom";

const HeaderTitle = (props) => {
	const textContent =
		"With IndieBrew, get personal feeds from resources all around the web, including Reddit, HackerNews, IndieHackers, and much more.";

	return (
		<div className="header-title">
			<h1 className="header-title__title">
				Your weekly <br /> personal feed digest.
			</h1>
			<TextDescription content={textContent} className="header-title__text" />
			<Link to={props.linkBtn}>
				<CustomButton
					className="header-title__btn"
					content="Get Started"
					subContent="it's free"
				/>
			</Link>
			<MemberImage className="header-title__members" />
			<p>
				Join <span className="highlight">32,642</span> IndieBrewers in curating their
				personal digest.
			</p>
		</div>
	);
};

export default HeaderTitle;
