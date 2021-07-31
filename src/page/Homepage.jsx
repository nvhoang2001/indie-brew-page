import CircleMist from "../sections/Circle-Mist/CircleMist.component";
import Footer from "../sections/Footer/Footer.component";
import HeaderImage from "../sections/Header-Image/HeaderImage.component";
import Header from "../sections/Header/Header.component";
import Resources from "../sections/Resources/Resources.component";
import Waitisit from "../sections/Waitisit/Waitisit.component";

import Navigator from "../components/Navigator/Navigator.component";

const Homepage = () => {
	const signUpLink = "/sign-up";
	return (
		<>
			<CircleMist />
			<Header nav={<Navigator className="header__nav" linkBtn={signUpLink} />} />

			<HeaderImage linkBtn={signUpLink} />
			<Resources />
			<Waitisit />
			<Footer />
		</>
	);
};

export default Homepage;
