import PositiveDetail from "../PositiveDetail/PositiveDetail.component";

import { ReactComponent as balloon } from "../../Assets/balloon.svg";
import { ReactComponent as lightbulb } from "../../Assets/lightbulb.svg";
import { ReactComponent as parchment } from "../../Assets/parchment.svg";
import "./Positive.scss";

const details = [
	{
		id: "d1",
		icon: balloon,
		highlight: "Over 20 resources.",
		details:
			"With resources ranging from Reddit to IndieHackers, we've got all your needs covered.",
	},
	{
		id: "d2",
		icon: parchment,
		highlight: "Delivered weekly.",
		details:
			"Every week at exactly Tuesday 12.00 P.M. EST - expect a value - packed digest right in your email.",
	},
	{
		id: "d3",
		icon: lightbulb,
		highlight: "Unlimited ideas.",
		details:
			"With all the ideas you'll be reading about, what's stopping you from creating a sustainable startup.",
	},
];

const Positive = () => {
	return (
		<div className="positive">
			<h2 className="positive__title">Create your personalized feed</h2>
			{details.map((del) => (
				<PositiveDetail
					key={del.id}
					icon={del.icon}
					highlight={del.highlight}
					details={del.details}
				/>
			))}
		</div>
	);
};

export default Positive;
