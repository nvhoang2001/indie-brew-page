import Header from "./sections/Header/Header.component";
import CircleMist from "./sections/Circle-Mist/CircleMist.component";
import HeaderImage from "./sections/Header-Image/HeaderImage.component";
import Resources from "./sections/Resources/Resources.component";
import Waitisit from "./sections/Waitisit/Waitisit.component";

import "./reset-css.scss";
import "./App.css";

function App() {
	return (
		<div className="App">
			<CircleMist />
			<Header />
			<HeaderImage />
			<Resources />
			<Waitisit />
		</div>
	);
}

export default App;
