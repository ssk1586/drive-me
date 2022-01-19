import React, {useState} from 'react'
import {
  Title,
  InputComponent,
  Inputs,
  Input,
  ButtonComponent,
  CancelButton,
  SaveButton,
  Text,
} from './PriceSettings.styled'

const PriceSettings = () => {

  const [price, setPrice] = useState({
    delivery: { min: null, max: null },
    distance: { min: null, max: null },
    time: { min: null, max: null }
  });

  return (
    <>
      <InputComponent>
        <Title>Рекомендована ціна за кілометр</Title>
        <Inputs>
          <div>
            <Text>Мінімальна</Text>
            <Input
            />
          </div>

          <div>
            <Text>Максимальна</Text>
            <Input />
          </div>
        </Inputs>
      </InputComponent>

      <InputComponent>
        <Title>Рекомендована ціна за кілограм</Title>
        <Inputs>
          <div>
            <Text>Мінімальна</Text>
            <Input />
          </div>
          
          <div>
            <Text>Максимальна</Text>
            <Input />
          </div>
        </Inputs>
      </InputComponent>

      <InputComponent>
        <Title>Рекомендована ціна за годину</Title>
        <Inputs>
          <div>
            <Text>Мінімальна</Text>
            <Input />
          </div>
          
          <div>
            <Text>Максимальна</Text>
            <Input />
          </div>
        </Inputs>
      </InputComponent>
      <ButtonComponent>
        <CancelButton color={'white'}>Скасувати</CancelButton>
        <CancelButton color={'red'}>Зберегти</CancelButton>
      </ButtonComponent>
    </>
  );
}

export default PriceSettings;
