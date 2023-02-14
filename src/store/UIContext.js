import React, { useState } from "react";

export const UIContext = React.createContext();

export const UIProvider = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(undefined);
	// const [showSidebar, setShowSidebar] = useState(false);

	return (
		<UIContext.Provider
			value={{
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
