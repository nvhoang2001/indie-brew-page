import { useEffect } from "react";
import { Link } from "react-router-dom";
import Positive from "../components/Positive/Positive.component";
import ReturnHomepage from "../components/ReturnHomepage/ReturnHomepage";
import { InputsProvider } from "../contexts/inputcontexts";
import Header from "../sections/Header/Header.component";
import SignUpForm from "../sections/SignUpForm/SignUpForm";
import "./SignUp.scss";

const SignUp = () => {
	useEffect(() => {
		document.body.classList.add("active");
		return () => {
			document.body.classList.remove("active");
		};
	}, []);

	return (
		<div className="sign-up">
			<Header
				nav={
					<Link className="sign-up__link" to="/">
						<ReturnHomepage />
					</Link>
				}
			/>
			<main className="sign-up__main">
				<Positive />
				<InputsProvider>
					<SignUpForm />
				</InputsProvider>
			</main>
		</div>
	);
};

export default SignUp;
