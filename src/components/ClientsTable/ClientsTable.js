import React from 'react';
import {
  ClientItem,
  Table,
  TR,
  TH,
  TD,
  ContentComponent,
} from './ClientsTable.styled.js';

import deleteIcon from '../../assets/images/deleteIcon.png';
import active from '../../assets/images/active.png';
import blocked from '../../assets/images/blocked.png';
import Arrows from '../shared/Arrows/Arrows.js';
import { useNavigate } from 'react-router-dom';

export const ClientsTable = ({ clients, removeUser, setSortName, mode }) => {

  const navigate = useNavigate();

  const handleUserRedirect = (item) => {
		navigate(`/aboutUser/${item.id}`)
	};

    return (
      <ClientItem>       
        <Table>
          <thead>
            <TR>
              <TH><ContentComponent>П.І.Б. <Arrows setSortName={setSortName} name='name'/></ContentComponent></TH> 
              <TH><ContentComponent>Email <Arrows setSortName={setSortName} name='email'/></ContentComponent></TH> 
              <TH>Телефон</TH>
              {mode == 'driver' ? <TH>Реєстраційний номер</TH> : null}
              <TH>Відгуки</TH>
              <TH>Стутус</TH>
              <TH>Опції</TH>
            </TR>
          </thead>
          <tbody>
            {
              clients.map((item) => {
                const { id, name, surname, phone, rating, banned, email, vehicle } = item
                return (
                  <TR key={id} onClick={() => handleUserRedirect(item)}>
                    <TD>{name ? name : 'no name'} {surname}</TD>
                    <TD>{email ? email : 'no email'}</TD>
                    <TD>{phone ? phone : 'no phone'}</TD>
                    {mode == 'driver' ? <TD>{vehicle?.licensePlate ? vehicle?.licensePlate : 'no vehicle license Plate'}</TD> : null}
                    <TD>{rating}</TD>
                    <TD><img src={banned ? blocked : active} alt='bloked' /></TD>
                    <TD><img src={deleteIcon} onClick={() => {removeUser(id)}} alt='delete' /></TD>
                  </TR>
                )
              })
            }
          </tbody>
        </Table>
      </ClientItem>
    );
  };
  