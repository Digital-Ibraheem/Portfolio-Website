import { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import {send} from 'emailjs-com'

const ContactForm = () => {
	const [toSend, setToSend] = useState(
		{
			name: '',
			reply_to: '',
			subject: '',
			message: ''
		}
	)

	const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        console.log(toSend)
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<div className="font-general-regular mb-4">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-1"
							htmlFor='name'
						>
							Full Name
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							type='text'
							id='name'
							name='name'
							placeholder='Your Name'
							aria-label='Name'
							value={toSend.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="font-general-regular mb-4">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-1"
							htmlFor='email'
						>
							Email
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							type='text'
							id='email'
							name='email'
							placeholder='Your Email'
							aria-label='Email'
							value={toSend.reply_to}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="font-general-regular mb-4">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-1"
							htmlFor='subject'
						>
							Subject
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							type='text'
							id='subject'
							name='subject'
							placeholder='Subject'
							aria-label='Subject'
							value={toSend.subject}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							onChange={handleChange}
							value={toSend.message}
							aria-label="Message"
						></textarea>
					</div>

					<div onClick={() => {
						if(toSend.email !== '' && toSend.subject !== '' && toSend.message !== '') {
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
						}
					}} className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
