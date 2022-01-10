import React from 'react'
import {
  Content,
  UserContainer,
  Text,
  Title,
  Img,
  ImageContainer,
  Logo,
} from './UserInformation.styled';
import { useSelector } from 'react-redux'
import { getSelectedUser } from '../../redux/slices/SelectedUserSlice/SelectedUser';
import { getData } from '../../utils/getDate';

export const UserInformation = () => {

  const driver = useSelector(getSelectedUser);


  const listContent = driver.map(({ id, name, surname, email, phone, birthDate, sex, feedbackCount, rating, createdAt, vehicle, mode, pricePerKilogram, pricePerKilometer, images}) => {

    return (
      <Content key={id}>
        <UserContainer>
          <div>
            <h3>ДАНІ ПРО КОРИСТУВАЧA</h3>
            <Logo src={images.drivingLicense[0]} alt='logo'/>
            <Title>П.І.Б:<Text>{name} {surname}</Text></Title>
            <Title>Телефон:<Text>{phone}</Text></Title>
            <Title>Email:<Text>{email}</Text></Title>
            <Title>Стать:<Text>{sex}</Text></Title>
            <Title>Дата народження:<Text>{getData(birthDate)}</Text></Title>
            <Title>Кількість поїздок:<Text>{name}</Text></Title>
            <Title>Загальний рейтинг:<Text>{rating} ({feedbackCount})</Text></Title>
            <Title>Користувач з:<Text>{getData(createdAt)}</Text></Title>
          </div>

          {mode == 'driver' && <div>
            <h3>ДАНІ ПРО АВТОМОБІЛЬ</h3>
            <Logo src={images.drivingLicense[0]} alt='logo'/>
            <Title>Тип транспорту:<Text>{vehicle.type}</Text></Title>
            <Title>Бренд: <Text>{vehicle.brand}</Text></Title>
            <Title>Модель: <Text>{vehicle.model}</Text></Title>
            <Title>Реєстраційни номер: <Text>{vehicle.licensePlate}</Text></Title>
            <Title>Колір: <Text>{vehicle.color}</Text></Title>
            <Title>Ціна за кілометр: <Text>${pricePerKilometer}</Text></Title>
            <Title>Ціна за кілограм: <Text>${pricePerKilogram}</Text></Title>
          </div>}
        </UserContainer>

        {mode == 'driver' &&
          <div>
            <h3>ФОТО ТЕХПАСПОРТУ ТА ВОДІЙСЬКИХ ПРАВ</h3>
            <ImageContainer>
              <Img src={images.drivingLicense[0]} alt='drivingLicense' />
              <Img src={images.drivingLicense[1]} alt='drivingLicense' />
            </ImageContainer>
          </div>}
      </Content>
    );
  });
  return <>{listContent}</>;
};
export default UserInformation
