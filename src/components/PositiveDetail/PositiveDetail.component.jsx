import "./PositiveDetail.scss";

const PositiveDetail = (props) => {
	const { icon: Icon, highlight, details } = props;
	return (
		<div className="positive-detail">
			<div className="positive-detail__icon">
				<Icon />
			</div>
			<div className="positive-detail__text">
				<p>
					<span className="positive-detail__text--highlight">{highlight}</span> {details}
				</p>
			</div>
		</div>
	);
};

export default PositiveDetail;
