import Link from "../Link/Link.component";

const Links = (props) => {
	return (
		<li className={props.className || ""}>
			<h4 className={`${props.baseClassName}__title`}>{props.title}</h4>
			<ul>
				{props.links.map((link, index) => (
					<Link
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
