// Demo Link: https://indie-brew-page.web.app

import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./page/Homepage";

import "./reset-css.scss";
import "./App.css";
import Loader from "./components/Loader/Loader.component";

const SignUp = React.lazy(() => import("./page/SignUp"));

function App() {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Switch>
					<Route path="/" exact>
						<Homepage />
					</Route>
					<Route path="/sign-up">
						<SignUp />
					</Route>
				</Switch>
			</Suspense>
		</>
	);
}

export default App;
