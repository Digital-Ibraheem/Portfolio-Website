import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import logo from '../../images/logo-portfolio.svg';
import { motion } from 'framer-motion';
import { send } from 'emailjs-com'
import Button from '../reusable/Button';



const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();
	const [toSend, setToSend] = useState(
		{
			name: '',
			reply_to: '',
			subject: 'Frontend Web Application',
			message: ''
		}
	)
	
	const selectOptions = [
		'Frontend Web Application',
		'Backend Web Application',
		'Fullstack Web Application',
		'Branding',
		'Other(explain below)'
	];

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        console.log(toSend)
	};

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link to="/">
								<img
									src={logo}
									className="logo"
									alt="Logo"
									height="80"
									width="80"
								/>
						</Link>
					</div>

					{/* Theme switcher small screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<span
							onClick={showHireMeModal}
							className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
					</div>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<span
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
					</div>

					{/* Theme switcher large screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
				</div>
			</div>
			{/* Hire me modal */}
			<div>
				{showModal ? (
					<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
				>
					{/* Modal Backdrop */}
					<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>
		
					{/* Modal Content */}
					<main className="flex flex-col items-center justify-center h-full w-full">
						<div className="modal-wrapper flex items-center z-30">
							<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
								<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
									<h5 className=" text-primary-dark dark:text-primary-light text-xl">
										What project are you looking for?
									</h5>
									<button
										onClick={() => showHireMeModal()}
										className="px-4 font-bold text-primary-dark dark:text-primary-light"
									>
										<FiX className="text-3xl" />
									</button>
								</div>
								<div className="modal-body p-5 w-full h-full">
									<form
										onSubmit={(e) => {
											//
										}}
										className="max-w-xl m-4 text-left"
									>
										<div className="">
											<input
												className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
												id="name"
												name="name"
												type="text"
												required=""
												placeholder="Name"
												aria-label="Name"
												value={toSend.name}
												onChange={handleChange}
											/>
										</div>
										<div className="mt-6">
											<input
												className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
												id="reply_to"
												name="reply_to"
												type="text"
												required=""
												placeholder="Email"
												aria-label="Email"
												value={toSend.reply_to}
												onChange={handleChange}
											/>
										</div>
										<div className="mt-6">
											<select
												className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
												id="subject"
												name="subject"
												type="text"
												required=""
												aria-label="Project Category"
												value={toSend.subject}
												onChange={handleChange}
											>
												{selectOptions.map((option) => (
													<option
														className="text-normal sm:text-md"
														key={option}
														value={option}
													>
														{option}
													</option>
												))}
											</select>
										</div>
		
										<div className="mt-6">
											<textarea
												className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
												id="message"
												name="message"
												cols="14"
												rows="6"
												aria-label="Details"
												placeholder="Project description"
												value={toSend.message}
												onChange={handleChange}
											></textarea>
										</div>
		
										<div className="mt-6 pb-4 sm:pb-1">
											<span
												onClick={() => {
												showHireMeModal()
													send(
														'service_op13dwf',
														'template_xiqhkoh',
														toSend,
														'J0BL3mUhohNeQXatU'
													)
														.then((response) => {
															console.log('SUCCESS!', response.status, response.text);
														})
														.then(() => {
															setToSend({
																name: '',
																reply_to: '',
																subject: '',
																message: ''
															})
														})
														.catch((err) => {
															console.log('FAILED...', err);
														});
												}}
												type="submit"
												className="px-4
													sm:px-6
													py-2
													sm:py-2.5
													text-white
													bg-indigo-500
													hover:bg-indigo-600
													rounded-md
													focus:ring-1 focus:ring-indigo-900 duration-500"
												aria-label="Submit Request"
											>
												<Button title="Send Request" />
											</span>
										</div>
									</form>
								</div>
								<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
									<span
										onClick={() => showHireMeModal()}
										type="button"
										className="px-4
											sm:px-6
											py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
										aria-label="Close Modal"
									>
										<Button functionSend={() => {
											send(
												'service_7azlqto',
												'template_xiqhkoh',
												toSend,
												'J0BL3mUhohNeQXatU'
											)
												.then((response) => {
													console.log('SUCCESS!', response.status, response.text);
												})
												.then(() => {
													setToSend({
														name: '',
														reply_to: '',
														subject: '',
														message: ''
													})
												})
												.catch((err) => {
													console.log('FAILED...', err);
												});
										}} type='button' title="Close" />
									</span>
								</div>
							</div>
						</div>
					</main>
				</motion.div>
				) : null}
				{showModal ? showHireMeModal : null}
			</div>
		</motion.nav>
	);
};

export default AppHeader;
