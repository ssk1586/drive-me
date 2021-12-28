import React, {useEffect, useState} from 'react'
import {ClientsTable} from '../ClientsTable/ClientsTable'
import { fetchUsers, fetchStatus, deleteUser} from '../../services/API'
import Pagination from '../Pagination/Pagination'

import {
  Content,
  Header,
  Input,
  InputComponent,
  PageComponent,
  Multiselect, 
} from './User.styled.js'



function Users() {
  const [clientsData, setClientsData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [userLimit] = useState(15)
  const [pageCount, setpageCount] = useState(null)
  const [page, setPage] = useState(1)


  const handleOnSubmit = (e) => {
    setPage(1)
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    fetchUsers(page, searchTerm, userLimit)
      .then(data => {
        setClientsData(data)
        setpageCount(Math.ceil(clientsData.count / userLimit))
      })
  }, [page, searchTerm])

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    };
  };

  const removeUser = (id) => {
    deleteUser(id)
      .then(res => fetchUsers(page, searchTerm)
      .then(data => setClientsData(data)))
  };

  const handleStatusChange = (status) => {
    if (status == 'all') {
      fetchUsers(page, searchTerm)
        .then(data => setClientsData(data))
    } else {
      fetchStatus(status)
        .then(data => setClientsData(data))
    };
  };
  
  return (
    <PageComponent>
      <Header>
        <InputComponent>
          <Input
            type='search'
            value={searchTerm || ''}
            placeholder='Пошук за іменем...'
            onChange={(e) => handleOnSubmit(e)}
          />
          <div>
            <Multiselect onChange={e => handleStatusChange(e.target.value)}>
              <option value='all'>Всі</option>
              <option value={false}>Активні</option>
              <option value={true}>Заблоковані</option>
            </Multiselect>
          </div>
        </InputComponent>

        <Pagination
          clientsData={clientsData}
          page={page}
          pageCount={pageCount}
          prevPage={prevPage}
          nextPage={nextPage}
        />

      </Header>
      
      <Content>
        {clientsData?.rows?.length > 0 ?
          <ClientsTable
            clients={clientsData.rows}
            removeUser={removeUser}
          />
          : "no result("}
      </Content>
    </PageComponent>
  )
} 

export default Users