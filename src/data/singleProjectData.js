// Import images
import Image1 from '../images/dawcon.png';
import Image2 from '../images/dawcon-2.png';
import Image3 from '../images/about-dawcon.png';
import Image4 from '../images/mobile-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
import Uvuew from '../images/UvUew.jpg'
import Uvuew2 from '../images/uvuew2.png'
import Notes1 from '../images/notes1.png'
import Notes2 from '../images/notes2.png'
import Notes3 from '../images/notes3.png'
import Inxson from '../images/inxson.png'
import Inxson2 from '../images/inxson2.png'
import Inxson3 from '../images/inxson3.png'
import Gndcontrol1 from '../images/gnd-control-2.png'
import Gndcontrol2 from '../images/gnd-control.png'
import Gndcontrol3 from '../images/gnd-control-3.png'
import Groupchat1 from '../images/groupchat1.png'
import Groupchat2 from '../images/groupchat2.png'
import Groupchat3 from '../images/groupchat.png'
import Prada1 from '../images/prada1.png'
import Prada2 from '../images/prada2.png'
import Prada3 from '../images/prada3.png'

// TODO: complete all related projects

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = [
	{
		ProjectHeader: {
			title: 'Dawcon Construction',
			publishDate: 'Jun 12, 2022',
			tags: 'UI / Frontend / Logo',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Dawcon INC.',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Constrution & Renovation',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://dawcon.ca',
				},
				{
					id: 4,
					title: 'Phone',
					details: '613 797 1414',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'"Dawcon Construction is a respected construction and renovation company in Ottawa, Ontario. Our goal is to be your top choice through quality, timely projects. With top-notch craftsmanship, we offer premier service in the industry."',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'ReactJS',
						'Bootstrap',
						'Firebase',
						'Adobe CC',
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			// 
			ProjectDetails: [
				{
					id: 1,
					details:
						"In collaboration with Dawcon Construction, I initially undertook the task of crafting a logo and a \"Coming Soon\" page, integrating a contact form. As the project progressed, it naturally evolved into the development of a complete and functional website. Throughout this journey, I encountered and proactively addressed a range of challenges.",
				},
				{
					id: 2,
					details:
						"At the project's inception, I dedicated myself to meticulously designing a logo that could effectively encapsulate Dawcon Construction's identity, seamlessly merging the initials \"D\" and \"C.\" After numerous iterations, a final logo was achieved, reflecting the essence of the company's brand and serving as the visual cornerstone for the forthcoming website.",
				},
				{
					id: 3,
					details:
						'Transitioning into website development, I carefully conceptualized designs catering to both desktop and mobile interfaces. By harnessing the capabilities of ReactJS, I skillfully translated these designs into responsive pages, encompassing critical sections such as the home, about, gallery, and contact pages. The strategic implementation of CSS was pivotal in ensuring a cohesive and intuitive user experience across various devices.',
				},
				{
					id: 4,
					details:
						"At the project's core was the seamless integration of a functional contact form, enhancing communication between users and Dawcon Construction. Navigating challenges of aesthetics, functionality, performance optimization, and browser compatibility, I employed diligent research and industry best practices. The project concluded with Google Firebase hosting, prioritizing reliability and security. Overall, from logo inception to website creation, this project underscored my adaptability and unwavering commitment to aligning with Dawcon Construction's vision.",
				},
			]
		},
	},
	// UVUEW

	{
		ProjectHeader: {
			title: 'Frontend Social Media/eCommerce Website',
			publishDate: 'Nov 08, 2021',
			tags: 'UI / Frontend / PSD',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Uvuew,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Uvuew2,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Private',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Social Media Platform',
				},
				{
					id: 3,
					title: 'Website',
					details: 'Private',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'A social media platform that would connect contect creators and users, with both free and exclusive content.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'ReactJS',
						'Adobe XD'
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			// 
			ProjectDetails: [
				{
					id: 1,
					details:
						"I undertook a comprehensive task of developing the entire frontend for a social platform that aimed to connect creators with their audience and enable content monetization. This project emerged from a connection on Fiverr, where the client sought a skilled developer for this ambitious endeavor. The client provided a detailed Adobe XD document with approximately 20 pages, encompassing both mobile and desktop versions, which served as the blueprint for the project.",
				},
				{
					id: 2,
					details:
						"The primary challenge throughout the development process was finding the right balance between aesthetics and functionality. The goal was to create an engaging and visually appealing user interface that also offered smooth navigation and efficient content monetization features. My commitment to best practices ensured that the Adobe XD designs were skillfully translated into a cohesive and user-friendly website.",
				},
				{
					id: 3,
					details:
						'Due to the sensitive nature of the project, the client emphasized the importance of confidentiality regarding the site and logo. This professional approach underscored the respect and trust that were central to our collaboration. In summary, my involvement in this project showcased my ability to execute complex design concepts, and it also highlighted the significance of discretion and professionalism in maintaining strong client relationships.',
				},
				{
					id: 4,
					details:
						" ",
				},
			] 
		}
	},
	// MERN Notes App


	{
		ProjectHeader: {
			title: 'MERN Notes App',
			publishDate: 'Feb 17, 2021',
			tags: 'UI / Fullstack',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Notes1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Notes2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Notes3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Notezzz',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Create, edit and delete notes',
				},
			],
			ObjectivesHeading: 'Objective of Project',
			ObjectivesDetails:
				'This project aimed to showcase my skills and enrich my portfolio by creating my first MERN application.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'ReactJS',
						'MongoDB',
						'ExpressJS',
						'NodeJS'
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			// 
			ProjectDetails: [
				{
					id: 1,
					details:
						"The MERN notes app project began with a simple sketch outlining how the frontend and backend would work together. As someone relatively new to backend development, this marked a key moment in my journey as a software developer. Combining backend features with the frontend brought both excitement and challenges, leading me into a dedicated phase of learning and growth.",
				},
				{
					id: 2,
					details:
						"To navigate this new territory, I turned to thorough tutorials that explained the ins and outs of the MERN stack – MongoDB, Express, React, and Node.js. These tutorials were essential guides, providing step-by-step instructions on important tasks like posting and retrieving data. As I turned my initial concept into a functional application, it showcased the real progress of my skills and my development expertise.",
				},
				{
					id: 3,
					details:
						'Even though the MERN notes app might seem simple, its impact on my software development journey was significant. This project gave me hands-on experience in handling backend development and coordinating different technology parts. Beyond its surface appearance, it highlighted my ability to adapt and my commitment to ongoing improvement. This lays the groundwork for even more ambitious projects as I continue my journey as a software developer.',
				},
				{
					id: 4,
					details:
						" ",
				},
			]
		},
	},
	// INXSON 

	{
		ProjectHeader: {
			title: 'INXSON',
			publishDate: 'Aug 20, 2023',
			tags: 'UI / Authentication / Payment',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Inxson,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Inxson2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Inxson3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'INXSON',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Entertainment',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://inxson.com',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'"INXSON is an emerging innovator in interactive 3D audiobooks, redefining storytelling with immersive narratives for children through cutting-edge technology and a dedication to excellence."',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Firebase',
						'Bootstrap',
						'EmailJS'
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			// 
			ProjectDetails: [
				{
					id: 1,
					details:
						"Inxson.com is a platform dedicated to delivering immersive 3D audiobooks designed for children to engage with stories interactively. Initially engaged to develop the site's \"Coming Soon\" page, my role evolved to encompass creating the site using ReactJS. Following a decision to move away from the initial ReactJS approach, the company transitioned to developing a new website, utilizing HTML, CSS, and JavaScript. This iteration's design was developed by other developers, and together we developed the pages of the site. My role was in essential components such as authentication, payment integration, and multiple functional pages, including a contact page.",
				},
				{
					id: 2,
					details:
						"Throughout its progression, the project involved several engagements via Fiverr, ultimately evolving into a sustained client relationship. This evolution demonstrates the project's maturation and underscores the value of adaptable collaboration. The culmination of these efforts resulted in the establishment of a lasting partnership, underscoring mutual understanding and shared objectives.",
				},
				{
					id: 3,
					details:
						'INXSON stands as an innovative endeavor that merges technology with storytelling to enhance children\'s engagement. This project exemplifies the convergence of technology and creative content in a collaborative context, highlighting the potential of interactive media to captivate young audiences.',
				},
				{
					id: 4,
					details:
						"",
				},
			],
		},
	},
	// GND Control
	{
		ProjectHeader: {
			title: 'GND Control',
			publishDate: 'Nov 24, 2021',
			tags: 'UI / Fullstack / Authentication',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Gndcontrol1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Gndcontrol2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Gndcontrol3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'GND Control',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Commercial Organization Software',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'GND-Control is a rising pioneer in organizational software, transforming task assignment and role management for employees.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'ReactJS',
						'Firebase'
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			// 
			ProjectDetails: [
				{
					id: 1,
					details:
						"Encountered through a Fiverr engagement, I embarked on the development of GND Control—a sophisticated organizational software solution. The client's requirements centered on dual account functionalities, enabling both administrators and regular users to log in and access tailored features.",
				},
				{
					id: 2,
					details:
						"At the core of GND Control's architecture is a robust system for role and task assignment. Administrators possess the authority to allocate roles and tasks, both individually and collectively, facilitating effective team coordination. Conversely, employees receive assigned roles, tasks, and associated messages, enhancing workflow clarity and accountability. This interplay creates an environment where users can efficiently track their peers' progress, fostering a culture of transparency.",
				},
				{
					id: 3,
					details:
						'The project\'s technical framework relied on the integration of ReactJS and Firebase. These advanced technologies were leveraged to establish a secure authentication system, while Firebase served as the backbone for comprehensive database development. This collaboration between frameworks established a performance-driven platform, tailored to address the intricate demands of modern organizational workflows.',
				},
				{
					id: 4,
					details:
						"GND Control's journey exemplifies the convergence of meticulous user requirements, technological acumen, and dynamic functionality. The project underscores my adeptness in employing ReactJS and Firebase to navigate intricate development scenarios, affirming my dedication to creating functional solutions that empower businesses to optimize their operations and enhance organizational efficiency.",
				},
			],
		},
	},
	// Groupchat
	{
		ProjectHeader: {
			title: 'Groupchat',
			publishDate: 'Jun 20, 2021',
			tags: 'UI / Fullstack / Authentication',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Groupchat1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Groupchat2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Groupchat3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Groupchat',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Online Communication',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://groupchat-53a8a.web.app/',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'My first app combining ReactJS and Firebase, enabling real-time communication via Firestore integration.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'ReactJS',
						'Firebase'
					],
				},
			],
			ProjectDetailsHeading: 'Description',
			// 
			ProjectDetails: [
				{
					id: 1,
					details:
						"The concept and potential offered by Firebase inspired me to bring an idea I had been pondering on to life. I was prompted to create this application for my Grade 10 Computer Science RST, a project equivalent at that time to an end of course summative. The objective of this initiative was to develop a mobile-responsive ReactJS interface,  crafted to be responsive on different devices through customized CSS styling.",
				},
				{
					id: 2,
					details:
						"At its core, the project utilized Firebase's authentication, facilitated by Google. This enabled the creation of an interactive group chat accessible to Google account holders via a designated site link. Integration with Firestore ensured nearly instant communication, greatly enhancing the user experience. Notably, the chat seamlessly incorporated users' Google profile pictures, adding a personalized touch.",
				},
				{
					id: 3,
					details:
						'This project demonstrates my commitment to learning and applying emerging technologies. As a result of my dedication, I successfully delivered a project that not only fulfilled its technical goals but also earned me an exceptional outcome in my Grade 10 computer science course, an overall grade of 100% for the course.',
				},
				{
					id: 4,
					details:
						"",
				},
			],
		},
	},
	// // Retro Runner
	// {
	// 	ProjectHeader: {
	// 		title: 'Retro Runner',
	// 		publishDate: 'Jun 20, 2023',
	// 		tags: 'Unity / Level Design / UI',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: 1,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image1,
	// 		},
	// 		{
	// 			id: 2,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image2,
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Kabul Project Management UI',
	// 			img: Image3,
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Company',
	// 		CompanyInfo: [
	// 			{
	// 				id: 1,
	// 				title: 'Name',
	// 				details: 'Coder Sports',
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Services',
	// 				details: 'Constrution & Renovation',
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'Website',
	// 				details: 'https://dawcon.ca',
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Phone',
	// 				details: '613 797 1414',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'"Dawcon Construction is a respected construction and renovation company in Ottawa, Ontario. Our goal is to be your top choice through quality, timely projects. With top-notch craftsmanship, we offer premier service in the industry."',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'ReactJS',
	// 					'Bootstrap',
	// 					'Firebase',
	// 					'Adobe CC',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Description',
	// 		// 
	// 		ProjectDetails: [
	// 			{
	// 				id: 1,
	// 				details:
	// 					"In collaboration with Dawcon Construction, I initially undertook the task of crafting a logo and a \"Coming Soon\" page, integrating a contact form. As the project progressed, it naturally evolved into the development of a complete and functional website. Throughout this journey, I encountered and proactively addressed a range of challenges.",
	// 			},
	// 			{
	// 				id: 2,
	// 				details:
	// 					"At the project's inception, I dedicated myself to meticulously designing a logo that could effectively encapsulate Dawcon Construction's identity, seamlessly merging the initials \"D\" and \"C.\" After numerous iterations, a final logo was achieved, reflecting the essence of the company's brand and serving as the visual cornerstone for the forthcoming website.",
	// 			},
	// 			{
	// 				id: 3,
	// 				details:
	// 					'Transitioning into website development, I carefully conceptualized designs catering to both desktop and mobile interfaces. By harnessing the capabilities of ReactJS, I skillfully translated these designs into responsive pages, encompassing critical sections such as the home, about, gallery, and contact pages. The strategic implementation of CSS was pivotal in ensuring a cohesive and intuitive user experience across various devices.',
	// 			},
	// 			{
	// 				id: 4,
	// 				details:
	// 					"At the project's core was the seamless integration of a functional contact form, enhancing communication between users and Dawcon Construction. Navigating challenges of aesthetics, functionality, performance optimization, and browser compatibility, I employed diligent research and industry best practices. The project concluded with Google Firebase hosting, prioritizing reliability and security. Overall, from logo inception to website creation, this project underscored my adaptability and unwavering commitment to aligning with Dawcon Construction's vision.",
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Share This',
	// 		SocialSharing: [
	// 			{
	// 				id: 1,
	// 				name: 'Twitter',
	// 				icon: <FiTwitter />,
	// 				url: 'https://twitter.com/realstoman',
	// 			},
	// 			{
	// 				id: 2,
	// 				name: 'Instagram',
	// 				icon: <FiInstagram />,
	// 				url: 'https://instagram.com/realstoman',
	// 			},
	// 			{
	// 				id: 3,
	// 				name: 'Facebook',
	// 				icon: <FiFacebook />,
	// 				url: 'https://facebook.com/',
	// 			},
	// 			{
	// 				id: 4,
	// 				name: 'LinkedIn',
	// 				icon: <FiLinkedin />,
	// 				url: 'https://linkedin.com/',
	// 			},
	// 			{
	// 				id: 5,
	// 				name: 'Youtube',
	// 				icon: <FiYoutube />,
	// 				url: 'https://www.youtube.com/c/StomanStudio',
	// 			},
	// 		],
	// 	},
	// 	RelatedProject: {
	// 		title: 'Related Projects',
	// 		Projects: [
	// 			{
	// 				id: 1,
	// 				title: 'Mobile UI',
	// 				img: Image4,
	// 			},
	// 			{
	// 				id: 2,
	// 				title: 'Web Application',
	// 				img: Image5,
	// 			},
	// 			{
	// 				id: 3,
	// 				title: 'UI Design',
	// 				img: Image6,
	// 			},
	// 			{
	// 				id: 4,
	// 				title: 'Kabul Mobile App UI',
	// 				img: Image3,
	// 			},
	// 		],
	// 	},
	// },
];
