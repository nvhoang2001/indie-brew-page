import { Route, Switch } from "react-router-dom";
import "./reset-css.scss";
import "./App.css";
import Homepage from "./page/Homepage";
import SignUp from "./page/SignUp";

function App() {
	return (
		<>
			<Switch>
				<Route path="/" exact>
					<Homepage />
				</Route>
				<Route path="/sign-up">
					<SignUp />
				</Route>
			</Switch>
		</>
	);
}

export default App;
