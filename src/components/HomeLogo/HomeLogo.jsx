import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/Logo.svg";

const HomeLogo = () => {
	return (
		<Link to="/">
			<Logo className="header__logo" />
		</Link>
	);
};

export default HomeLogo;
