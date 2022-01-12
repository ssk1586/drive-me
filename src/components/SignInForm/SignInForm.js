import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

import {
    Component,
    Input,
    Logo,
    Button,
    Inputs,
    InputContainer,
    Img
} from './SignInForm.styled'

import hidePassword from '../../assets/images/hidepassword.png';
import showPassword from '../../assets/images/showpassword.png';
import { userLogin } from '../../services/userService';
import { useTranslation } from "react-i18next";



function SignInForm() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [values, setValues] = useState({email: '', pass: ''});
  const [clicked, setClick] = useState(false)  

  const handleUserLogin = useCallback(async () => {
    if (!values) {
      return alert("Заповніть пусті поля");
    }
    userLogin(values)
    .then(data => {
      Cookies.set('user', JSON.stringify(data))
      Cookies.set('accessToken', data.accessToken)
      Cookies.set('refreshToken', data.refreshToken)
      navigate('/')
    });     
    }, [values, navigate])

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  };
  
  return (
    <Component>
      <Logo>MAGNET</Logo>
      <h2>{t('hello')}</h2>
      <Inputs>
        <Input
          type='email'
          name='email'
          placeholder='email'
          value={values.email || ''}
          onChange={(e) => onChange(e)}
        />
        <InputContainer>
          <Img src={clicked ? hidePassword : showPassword} alt='title' onClick={() => setClick(!clicked)} />
          <Input
            type={clicked ? "password" : "text"}
            name='pass'
            placeholder='пароль'
            value={values.pass || ''}
            onChange={(e) => onChange(e)}
          />
        </InputContainer>
      </Inputs>
      <p>{t('passForgot')}</p>
      <Button
        onClick={() => handleUserLogin()}
      >{t('logIn')}</Button>
    </Component>
  )
}

export default SignInForm
