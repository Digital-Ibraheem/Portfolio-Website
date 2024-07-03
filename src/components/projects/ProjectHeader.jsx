import { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi'
import UniversalContext from '../../context/UniversalContext';
import SingleProjectContext from '../../context/SingleProjectContext';
import { useNavigate } from 'react-router-dom';

const ProjectSingleHeader = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const { projectViewed } = useContext(UniversalContext);
	const navigate = useNavigate();

	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
			<span
							className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
								back-icon
                                "
							onClick={() => navigate(-1)}
						>
							<BiArrowBack className="text-ternary-dark dark:text-ternary-light w-5 h-5"></BiArrowBack>
						<span>BACK</span></span>{singleProjectData[projectViewed-1].ProjectHeader.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData[projectViewed-1].ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData[projectViewed-1].ProjectHeader.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
