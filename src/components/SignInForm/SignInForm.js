import React, {useCallback, useState} from 'react'
import {
    Component,
    Input,
    Logo,
    Button,
    Inputs,
    InputContainer,
    Img
} from './SignInForm.styled'
import axios from 'axios'

import hidePassword from '../../assets/images/hidepassword.png';
import showPassword from '../../assets/images/showpassword.png';


function SignInForm() {

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [clicked, setClick] = useState(false)  

  const PushToLocalStorage = (data) => {
    localStorage.setItem('result', JSON.stringify(data));
  }

  const OnButtonClick = useCallback(async () => {
    if (!email || !pass) {
      return alert("Заповніть пусті поля");
    }
    await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
      "email": email,
      "password": pass
    }).then(res => {
      PushToLocalStorage(res.data)
    });     
    }, [email, pass])

  return (
    <Component>
      <Logo>MAGNET</Logo>
      <h2>Привіт</h2>
      <Inputs>
        <Input
          type='email'
          placeholder='email'
          value={email || ''}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <InputContainer>
          <Img src={clicked ? hidePassword : showPassword} alt='title' onClick={() => setClick(!clicked)} />
          <Input
            type={clicked ? "password" : "text"}
            placeholder='пароль'
            value={pass || ''}
            onChange={(e) => { setPass(e.target.value) }}
          />
        </InputContainer>
      </Inputs>
      <p>Забули пароль?</p>
      <Button
        onClick={() => OnButtonClick()}
      >Ввійти</Button>
    </Component>
  )
}

export default SignInForm
