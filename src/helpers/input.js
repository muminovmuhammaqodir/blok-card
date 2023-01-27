const Input = ({ type, placeholder, value, onChangehandler,name }) => {
	

	return (
		<input
			className="w-100 form-control p-2"
			type={type}
			placeholder={placeholder}
			onChange={onChangehandler}
            value={value}
            name={name}
		/>
	);
};

export default Input;
