import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import CustomLink from "../Link/CustomLink.component";
import CustomButton from "../CustomButton/CustomButton.component";
import Backdrop from "../Backdrop/Backdrop.component";
import Card from "../Card/Card.component";
import HomeLogo from "../HomeLogo/HomeLogo";

import { ReactComponent as HamburgerMenu } from "../../Assets/Hamburger Menu.svg";
import { landcapePhoneQuery, portraitPhoneQuery } from "../../config";
import "./Navigator.style.scss";

const navItems = [
	{
		content: "Pricing",
		href: "#",
	},
	{
		content: "Support",
		href: "#",
	},
];

const PhoneNav = (props) => {
	const [isShowMenu, setIsShowMenu] = useState(false);

	const hideMenu = () => {
		setIsShowMenu(false);
	};

	const showMenu = () => {
		setIsShowMenu(true);
	};

	// For test only
	const testNav = navItems.concat(
		{
			content: "Forum",
			href: "#",
		},
		{
			content: "Community",
			href: "#",
		},
	);

	return (
		<nav className={`navigator ${props.className ? props.className : ""}`}>
			<HamburgerMenu onClick={showMenu} />
			{isShowMenu && (
				<Backdrop onCancel={hideMenu}>
					<Card>
						<ul className="navigator__links">
							<li className="navigator__logo">
								<HomeLogo />
							</li>
							{testNav.map((link) => (
								<CustomLink
									key={link.content}
									className="navigator__link"
									{...link}
								/>
							))}
						</ul>
					</Card>
				</Backdrop>
			)}
		</nav>
	);
};

const Navigator = (props) => {
	const isLanscapeMobile = useMediaQuery(landcapePhoneQuery);
	const isPortraitMobile = useMediaQuery(portraitPhoneQuery);
	const isMobile = isLanscapeMobile || isPortraitMobile;

	if (isMobile) {
		return <PhoneNav />;
	}

	return (
		<nav className={`navigator ${props.className ? props.className : ""}`}>
			<ul className="navigator__links">
				{navItems.map((link) => (
					<CustomLink key={link.content} className="navigator__link" {...link} />
				))}
			</ul>
			<Link to={props.linkBtn}>
				<CustomButton content="Get Started" subContent="it's free" />
			</Link>
		</nav>
	);
};

export default Navigator;
