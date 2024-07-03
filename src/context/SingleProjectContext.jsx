import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson
	);

	const [projectViewed, setProjectViewed] = useState(1)

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, projectViewed, setProjectViewed }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
