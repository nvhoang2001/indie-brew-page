import { useContext, useReducer, useRef } from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../components/CustomButton/CustomButton.component";
import CustomInput from "../../components/CustomInput/CustomInput.component";
import inputStore from "../../contexts/inputcontexts";

import "./SignUpForm.scss";

const validateEmailRegex =
	/^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/;

const inputs = [
	{
		id: "input1",
		type: "email",
		label: "Email",
		placeholder: "john@example.com",
		validator: (value) => validateEmailRegex.test(value),
		errorText: "Please enter a valid email.",
	},
	{
		id: "input2",
		type: "text",
		label: "Full Name",
		placeholder: "John Doe",
		validator: (value) => value.trim() !== "",
		errorText: "Full name must not empty, please enter your name.",
	},
	{
		id: "input3",
		type: "password",
		label: "Password",
		placeholder: "At least 8 characters",
		validator: (value) => value.trim().length >= 8,
		errorText: "Password must has at least 8 characters.",
	},
];

const SET_TOGGLE = "SET_TOGGLE";
const SET_TOUCHED = "SET_TOUCHED";

const checkboxInitial = {
	checked: false,
	touched: false,
};

const checkboxReducer = (prevState, action) => {
	switch (action.type) {
		case SET_TOGGLE:
			return {
				checked: !prevState.checked,
				touched: true,
			};

		case SET_TOUCHED:
			return {
				checked: prevState.checked,
				touched: true,
			};

		default:
			break;
	}

	return {
		checked: false,
		touched: false,
	};
};

const SignUpForm = () => {
	const checkboxRef = useRef();
	const inputsContext = useContext(inputStore);
	const [checkboxState, setCheckboxState] = useReducer(checkboxReducer, checkboxInitial);

	const invalidCheckbox = !checkboxState.checked && checkboxState.touched;

	const checkboxChangeHandler = () => {
		setCheckboxState({ type: SET_TOGGLE });
	};

	let allInputIsValid = !Object.values(inputsContext.validInputs).find(
		(isValidInput) => isValidInput === false,
	);

	let formIsValid = false;

	if (allInputIsValid && checkboxState.checked) {
		formIsValid = true;
	}

	const submitHandler = (e) => {
		e.preventDefault();
		setCheckboxState({ type: SET_TOUCHED });
		Object.values(inputsContext.inputTouchedFuncs).forEach((func) => func(true));

		if (!formIsValid) {
			return;
		}

		Object.values(inputsContext.clearInputFuncs).forEach((func) => func());
		setCheckboxState({ type: "CLEAR" });
	};

	const getClearInputFuncs = (id, func) => {
		inputsContext.clearInputFuncs[id] = func;
	};

	const getInputValidity = (id, valData) => {
		inputsContext.validInputs[id] = valData;
	};

	const getInputTouchFunc = (id, func) => {
		inputsContext.inputTouchedFuncs[id] = func;
	};

	return (
		<form className="sign-up-form" onSubmit={submitHandler}>
			<h3 className="sign-up-form__title">Create your IndieBrew Account</h3>

			{inputs.map((input) => (
				<CustomInput
					key={input.id}
					input={input}
					sendClearInputFunc={getClearInputFuncs}
					sendInputValidity={getInputValidity}
					sendInputTouchFunc={getInputTouchFunc}
				/>
			))}

			<div className="sign-up-form__checkbox">
				<input
					type="checkbox"
					name="agree"
					id="input4"
					ref={checkboxRef}
					checked={checkboxState.checked}
					onChange={checkboxChangeHandler}
				/>
				<label htmlFor="input4">
					By creating an account on IndieBrew, you agree to the{" "}
					<Link to="#">Terms {"&"} Conditions</Link>
				</label>
			</div>
			{invalidCheckbox && <p className="error-text">* Please check the checkbox!</p>}
			<CustomButton className="sign-up-form__btn" content="Create an Account" type="submit" />
		</form>
	);
};

export default SignUpForm;
