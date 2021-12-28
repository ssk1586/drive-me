import React from 'react';
import {
  ClientItem,
  Table,
  TR,
  TH,
  TD,
} from './ClientsTable.styled.js';

import deleteIcon from '../../assets/images/deleteIcon.png';
import active from '../../assets/images/active.png';
import blocked from '../../assets/images/blocked.png';


export const ClientsTable = ({ clients, removeUser }) => {

    return (
      <ClientItem>       
        <Table>
          <thead>
          <TR>
            <TH>П.І.Б.</TH>
            <TH>Email</TH>
            <TH>Телефон</TH>
            <TH>Відгуки</TH>
            <TH>Стутус</TH>
            <TH>Опції</TH>
            </TR>
            </thead>

          <tbody>
            {
              clients.map(({ id, name, surname,  phone, rating, banned, email}) => {
                return (
                  <TR key={id}>
                    <TD>{name ? name : 'no name'} {surname}</TD>
                    <TD>{email ? email : 'no email'}</TD>
                    <TD>{phone ? phone : 'no phone'}</TD>
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
  