import { useState, createContext } from 'react';

const UniversalContext = createContext();

export const UniversalProvider = ({ children }) => {
    const [projectViewed, setProjectViewed] = useState(1)

	return (
		<UniversalContext.Provider
			value={{ projectViewed, setProjectViewed }}
		>
			{children}
		</UniversalContext.Provider>
	);
};

export default UniversalContext;
