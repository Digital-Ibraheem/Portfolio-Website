// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import { UniversalProvider } from './context/UniversalContext';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLk052oqWrLtdNOep-6-VW3BN48aApvwQ",
  authDomain: "ibraheem-portfolio.firebaseapp.com",
  projectId: "ibraheem-portfolio",
  storageBucket: "ibraheem-portfolio.appspot.com",
  messagingSenderId: "305697494005",
  appId: "1:305697494005:web:4ab27316ca5aabc072c6bc",
  measurementId: "G-5PBFC1EM0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
	return (
		<AnimatePresence>
			<UniversalProvider>
				<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
					<Router>
						<ScrollToTop />
						<AppHeader />
						<Suspense fallback={""}>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="projects" element={<Projects />} />
								<Route
									path="projects/single-project"
									element={<ProjectSingle />}
								/>
								<Route path="about" element={<About />} />
								<Route path="contact" element={<Contact />} />
							</Routes>
						</Suspense>
						<AppFooter />
					</Router>
					<UseScrollToTop />
				</div>
			</UniversalProvider>
		</AnimatePresence>
	);
}

export default App;
