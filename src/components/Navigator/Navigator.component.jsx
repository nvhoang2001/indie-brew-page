import CustomLink from "../Link/CustomLink.component";
import CustomButton from "../CustomButton/CustomButton.component";

import "./Navigator.style.scss";

const Navigator = (props) => {
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

	return (
		<nav className={`navigator ${props.className ? props.className : ""}`}>
			<ul className="navigator__links">
				{navItems.map((link) => (
					<CustomLink key={link.content} className="navigator__link" {...link} />
				))}
			</ul>
			<CustomButton content="Get Started" subContent="it's free" />
		</nav>
	);
};

export default Navigator;
