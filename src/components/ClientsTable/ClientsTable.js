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

export const ClientsTable = ({ clients, removeUser, sortUsers, mode}) => {
    return (
      <ClientItem>       
        <Table>
          <thead>
            <TR>
              <TH><ContentComponent>П.І.Б. <Arrows sortUsers={sortUsers} name='name'/></ContentComponent></TH> 
              <TH><ContentComponent>Email <Arrows sortUsers={sortUsers} name='email'/></ContentComponent></TH> 
              <TH>Телефон</TH>
              {mode == 'driver' ? <TH>Реєстраційний номер</TH> : null}
              <TH>Відгуки</TH>
              <TH>Стутус</TH>
              <TH>Опції</TH>
            </TR>
          </thead>
          <tbody>
            {
              clients.map(({ id, name, surname, phone, rating, banned, email, vehicle }) => {
                return (
                  <TR key={id}>
                    <TD>{name ? name : 'no name'} {surname}</TD>
                    <TD>{email ? email : 'no email'}</TD>
                    <TD>{phone ? phone : 'no phone'}</TD>
                    {mode == 'driver' ? <TD>{vehicle.licensePlate ? vehicle.licensePlate : 'no vehicle license Plate'}</TD> : null}
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
  