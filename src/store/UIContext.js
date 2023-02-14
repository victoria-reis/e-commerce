import React, { useState } from "react";

export const UIContext = React.createContext();

export const UIProvider = (props) => {
	const [initialRender, setInitialRender] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(undefined);
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<UIContext.Provider
			value={{
				initialRender,
				setInitialRender,
				isLoading,
				setIsLoading,
				errorMessage,
				setErrorMessage,
			}}
		>
			{props.children}
		</UIContext.Provider>
	);
};
