import HomeLogo from "../../components/HomeLogo/HomeLogo";

import "./Header.style.scss";

const Header = (props) => {
	let navContent = props.nav;

	return (
		<header className="header">
			<HomeLogo />
			{navContent}
		</header>
	);
};

export default Header;
