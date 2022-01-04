import React, {useState, useEffect} from 'react'
import { deleteUser, fetchSortAdmins, fetchAdmins } from '../../services/API';
import {AdminsTable} from '../AdminsTable/AdminsTable'

import {
  Header,
  Input,
  InputComponent,
  PageComponent,
} from '../Users/User.styled'

import Pagination from '../Pagination/Pagination';

const Admins = () => {

  const [adminsData, setAdminsData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [userLimit] = useState(15)
  const [pageCount, setpageCount] = useState(null)
  const [page, setPage] = useState(1)

  const handleOnSubmit = (e) => {
    setPage(1)
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    fetchAdmins(page, searchTerm, userLimit, 'moderator')
      .then(data => {
        setAdminsData(data)
        setpageCount(Math.ceil(adminsData.count / userLimit))
      })
  }, [page, searchTerm])

  const sortUsers = (sortType) => {
    fetchSortAdmins(sortType)
    .then(data => setAdminsData(data))
  }

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
      .then(res => fetchAdmins(page, searchTerm)
      .then(data => setAdminsData(data)))
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
      </InputComponent>

      <Pagination
        clientsData={adminsData}
        page={page}
        pageCount={pageCount}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Header>

    <div>
      {adminsData?.rows ?
        <AdminsTable
          admins={adminsData.rows}
          removeUser={removeUser}
          sortUsers={sortUsers}
        />
        : "no result("}
    </div>
  </PageComponent>
  )
}

export default Admins;
