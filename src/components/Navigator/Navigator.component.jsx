import Link from "../Link/Link.component";
import CustomButton from "../CustomButton/CustomButton.component";

import "./Navigator.style.scss";

const Navigator = () => {
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
		<nav className="navigator">
			<ul className="navigator__links">
				{navItems.map((link) => (
					<Link
						key={link.content}
						className="navigator__link"
						{...link}
					/>
				))}
			</ul>
			<CustomButton content="Get Started" subContent="it's free" />
		</nav>
	);
};

export default Navigator;
