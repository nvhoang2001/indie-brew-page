import Header from "./sections/Header/Header.component";
import CircleMist from "./sections/Circle-Mist/CircleMist.component";
import HeaderImage from "./sections/Header-Image/HeaderImage.component";

import "./reset-css.scss";
import "./App.css";

function App() {
	return (
		<div className="App">
			<CircleMist />
			<Header />
			<HeaderImage />
		</div>
	);
}

export default App;
