import Links from "../Links/Links.component";

import "./MenuLinks.style.scss";

const MenuLinks = (props) => {
	console.log(props);

	return (
		<nav className="menu-links">
			<ul className="menu-links__list">
				{props.linksList.map((linkArr) => (
					<Links
						key={linkArr.title}
						{...linkArr}
						className="menu-links__links"
						baseClassName="menu-links"
					/>
				))}
			</ul>
		</nav>
	);
};

export default MenuLinks;
