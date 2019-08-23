import React,{ useState, useEffect, useRef } from 'react';

const Input = ({value, onChangeValue, viewAs}) => {
	const [isEdit, setIsEdit] = useState(false);
	const inputR = useRef(null);
	const edit = () => setIsEdit(true);
	const done = () => {
		setIsEdit(false)
		onChangeValue(inputR.current.value);
	};

	useEffect(() => {
		if (isEdit) {
			inputR.current.focus();
		}
	}, [isEdit]);

	if (isEdit) {
		return <input type="text" ref={inputR} defaultValue={value} onBlur={done} placeholder="Digite algo" />
	}
 	return React.createElement(viewAs || 'div', { onClick:edit,  className:"edit-in-place", children:value})
 	//return <h1 onClick={edit} className="edit-in-place">{value}</h1>
}

export const TextArea = ({value, onChangeValue, viewAs}) => {
	const [isEdit, setIsEdit] = useState(false);
	const inputR = useRef(null);
	const edit = () => setIsEdit(true);
	const done = () => {
		setIsEdit(false)
		onChangeValue(inputR.current.value);
	};

	useEffect(() => {
		if (isEdit) {
			inputR.current.focus();
		}
	}, [isEdit]);

	if (isEdit) {
		return <textarea type="text" ref={inputR} onBlur={done} placeholder="Digite algo" defaultValue={value}></textarea>
	}
 	return React.createElement(viewAs || 'div', { onClick:edit,  className:"edit-in-place", children:value})
 	//return <h1 onClick={edit} className="edit-in-place">{value}</h1>
}

export default Input;