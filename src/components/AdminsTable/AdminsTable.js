import React from 'react';
import {
  ClientItem,
  Table,
  TR,
  TH,
  TD,
  ContentComponent,
} from '../ClientsTable/ClientsTable.styled';

import deleteIcon from '../../assets/images/deleteIcon.png';
import Arrows from '../shared/Arrows/Arrows.js';

export const AdminsTable = ({ admins, removeUser, sortUsers }) => {

    return (
      <ClientItem>       
        <Table>
          <thead>
            <TR>
              <TH><ContentComponent>П.І.Б. <Arrows sortUsers={sortUsers} name='name'/></ContentComponent></TH> 
              <TH><ContentComponent>Email <Arrows sortUsers={sortUsers} name='email'/></ContentComponent></TH> 
              <TH>Опції</TH>
            </TR>
          </thead>

          <tbody>
            {
              admins.map(({ id, name, surname, email}) => {
                return (
                  <TR key={id}>
                    <TD>{name ? name : 'no name'} {surname}</TD>
                    <TD>{email ? email : 'no email'}</TD>
                    <TD><img src={deleteIcon} onClick={() => { removeUser(id) }} alt='delete' /></TD>
                  </TR>
                )
              })
            }
          </tbody>
        </Table>
      </ClientItem>
      );
  };
  