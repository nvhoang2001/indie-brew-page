import CustomLink from "../Link/CustomLink.component";

const Links = (props) => {
	return (
		<li className={props.className || ""}>
			<h4 className={`${props.baseClassName}__title`}>{props.title}</h4>
			<ul>
				{props.links.map((link, index) => (
					<CustomLink
						key={`l${index}`}
						href={link.href}
						content={link.title}
						className={`${props.baseClassName}__link`}
					/>
				))}
			</ul>
		</li>
	);
};

export default Links;
