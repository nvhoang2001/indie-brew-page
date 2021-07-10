import FooterContent from "../../components/FooterContent/FooterContent.component";
import MenuLinks from "../../components/MenuLinks/MenuLinks.component";

import "./Footer.style.scss";

const Footer = () => {
	const links = [
		{
			title: "Sitemap",
			links: [
				{ title: "Homepage", href: "#" },
				{ title: "Pricing", href: "#" },
			],
		},
		{
			title: "Resources",
			links: [
				{ title: "Support", href: "#" },
				{ title: "Contact", href: "#" },
				{ title: "FAQ", href: "#" },
			],
		},
		{
			title: "Company",
			links: [
				{ title: "About", href: "#" },
				{ title: "Customers", href: "#" },
				{ title: "Blog", href: "#" },
			],
		},
		{
			title: "Portfolios",
			links: [
				{ title: "HackerNews", href: "#" },
				{ title: "Reddit", href: "#" },
				{ title: "Twitter", href: "#" },
			],
		},
	];

	return (
		<footer className="footer">
			<FooterContent />
			<MenuLinks linksList={links} />
		</footer>
	);
};

export default Footer;
