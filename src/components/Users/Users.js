import React, {useEffect, useState} from 'react'
import {ClientsTable} from '../ClientsTable/ClientsTable'
import {fetchUsers} from '../../services/API'


function Users() {
  const [clients, setClients] = useState([])

  // useEffect((
  //   fetchUsers().then(data => console.log(data))
  // ), []);

  return (
    <>
      {/* <ClientsTable clients={clients} /> */}
    </>
  )
}

export default Users
