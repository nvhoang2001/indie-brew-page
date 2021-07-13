import Navigator from "../../components/Navigator/Navigator.component";

import { ReactComponent as Logo } from "../../Assets/Logo.svg";

import "./Header.style.scss";

const Header = () => {
	console.log(Logo);
	return (
		<header className="header">
			<Logo className="header__logo" />
			<Navigator className="header__nav" />
		</header>
	);
};

export default Header;
