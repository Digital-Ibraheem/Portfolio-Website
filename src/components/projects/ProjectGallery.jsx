import { useContext, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import UniversalContext from '../../context/UniversalContext';
import { ImCross } from "react-icons/im";

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const { projectViewed } = useContext(UniversalContext);
	const [toggleImage, setToggleImage] = useState({id: "", toggled: false});

	const handleClick = (id, state) => {
		setToggleImage({
			id: id,
			toggled: state
		})
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			<span className={`cover ${toggleImage.toggled && "show"}`}>
				<ImCross className="cross" onClick={() => handleClick(toggleImage.id, false)} />
			</span>
			{singleProjectData[projectViewed-1].ProjectImages.map((project) => {
				return (
						<div className="mb-10 sm:mb-0" key={project.id}>
							<img
								src={project.img}
								className={`rounded-xl cursor-pointer shadow-lg sm:shadow-none ${toggleImage.id == project.id && toggleImage.toggled == true ? "project-img" : ""}`}
								alt={project.title}
								key={project.id}
								onClick={() => handleClick(project.id, true)}
							/>
							{console.log(toggleImage)}
						</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
