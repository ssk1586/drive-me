import React from 'react';
import {
  ClientItem,
  ClientComponent 
} from './ClientsTable.styled.js'


export const ClientsTable = (clients) => {
  const listContent = clients.map(({ id }) => {
    return (
      <ClientItem key={id}>       
        </ClientItem>
      );
    });
  return <ClientComponent>{listContent}</ClientComponent>;
  };
  