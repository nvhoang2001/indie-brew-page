import Header from "./sections/Header/Header.component";
import CircleMist from "./sections/Circle-Mist/CircleMist.component";

import "./reset-css.scss";
import "./App.css";

function App() {
	return (
		<div className="App">
			<CircleMist />
			<Header />
		</div>
	);
}

export default App;
