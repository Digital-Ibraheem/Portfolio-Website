function Button({ title, functionSend }) {
	return <button onClick={functionSend}>{title}</button>;
}

export default Button;
