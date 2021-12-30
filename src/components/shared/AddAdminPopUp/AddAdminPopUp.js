import React, {useState, useCallback, useRef} from 'react'
import { fetchNewAdmin } from '../../../services/API';
import { useSelector } from 'react-redux'
import { getPopupValue } from '../../../redux/slices/PopupSlice/PopupSlice'
import { useDispatch } from 'react-redux'
import { setPopup } from '../../../redux/slices/PopupSlice/PopupSlice';
import useOutsideClick from '../../../hooks/useOutsideClick'

import {
  ContentComponent,
  AddButton,
	CanselButton,
	ButtonContainer,
	Input,
	InputContainer,
	Overlay
} from './AddAdminPopUp.styled'



const AddAdminPopUp = () => {

	const dispatch = useDispatch()
	const ref = useRef();

	const [values, setValues] = useState({ email: '', pass: '', name: '', surname: '' });
	const popUpValue = useSelector(getPopupValue)

	const handleUserLogin = useCallback(() => {
    if (!values) {
      return alert("Заповніть пусті поля");
    }
    fetchNewAdmin(values)
    .then(data => {
     console.log(data)
    });     
  }, [values,])

	const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  };

	const handlePopup = () => {
		dispatch(setPopup())
	}

	useOutsideClick(ref, () => {
		popUpValue && handlePopup()
  });


	return (
		<Overlay display={popUpValue ? 'flex' : 'none'}>
			<ContentComponent ref={ref}>
				<h4>Додати нового адміністратора</h4>
					<InputContainer>
						<Input
						type="text"
						name='name'
							placeholder="Iм'я"
							value={values.name}
							onChange={(e) => onChange(e)}
					/>
					<Input
						type="text"
						name='surname'
							placeholder='Прізвище'
							value={values.surname}
							onChange={(e) => onChange(e)}
					/>
					<Input
						type='email'
						name='email'
							placeholder='Email'
							value={values.email}
							onChange={(e) => onChange(e)}
					/>
					<Input
						type="password"
						name='pass'
							placeholder='Пароль'
							value={values.pass}
							onChange={(e) => onChange(e)}
					/>
				</InputContainer>
				<ButtonContainer>

					<CanselButton
						onClick={() => handlePopup()}
					>Відмінити
					</CanselButton>

					<AddButton
						onClick={() => handleUserLogin()}
					>Додати</AddButton>
				</ButtonContainer>
			</ContentComponent>
		 </Overlay> 
	);
}

export default AddAdminPopUp;
