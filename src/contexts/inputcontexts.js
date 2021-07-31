import React from "react";

const inputStore = React.createContext({
	validInputs: {},
	clearInputFuncs: {},
	inputTouchedFuncs: {},
});

export const InputsProvider = (props) => {
	return (
		<inputStore.Provider
			value={{
				validInputs: {},
				clearInputFuncs: {},
				inputTouchedFuncs: {},
			}}
		>
			{props.children}
		</inputStore.Provider>
	);
};

export default inputStore;
