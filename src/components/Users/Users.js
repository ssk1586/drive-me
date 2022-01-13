import React, {useEffect, useState} from 'react'
import {ClientsTable} from '../ClientsTable/ClientsTable'
import { fetchUsers, fetchStatus, deleteUser } from '../../services/API'
import Pagination from '../Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux'
import { setDefault } from '../../redux/slices/PaginationCount/PaginationCount'

import {
  Header,
  Input,
  InputComponent,
  PageComponent,
  Multiselect, 
} from './User.styled.js'



function Users({mode}) {
  const [clientsData, setClientsData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [pageCount, setpageCount] = useState(null)
  const [sortName, setSortName] = useState('');
  const page = useSelector((state) => state.page.page)
  const userLimit = 15;

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    dispatch(setDefault())
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetchUsers(page, searchTerm, userLimit, mode, 'user', sortName)
      .then(data => {
        setClientsData(data)
        setpageCount(Math.ceil(clientsData.count / userLimit))
      })
  }, [page, searchTerm, sortName]);

  const removeUser = (id) => {
    deleteUser(id)
      .then(res => fetchUsers(page, searchTerm)
      .then(data => setClientsData(data)))
  };

  const handleStatusChange = (status) => {
    if (status == 'all') {
      fetchUsers(page, searchTerm, userLimit, mode, 'user')
        .then(data => setClientsData(data))
    } else {
      fetchStatus(status, mode)
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
          pageCount={pageCount}
        />
      </Header>

      <div>
        {clientsData?.rows ?
          <ClientsTable
            clients={clientsData.rows}
            removeUser={removeUser}
            setSortName={setSortName}
            mode={mode}
          />
          : "no result("}
      </div>
    </PageComponent>
  );
};

export default Users
