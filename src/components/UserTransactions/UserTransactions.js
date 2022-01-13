import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'

import { fetchUserTransactions } from '../../services/API'
import { getData } from '../../utils/getDate';
import Arrows from '../shared/Arrows/Arrows.js';
import Pagination from '../Pagination/Pagination';

import {
  Table,
  TR,
  TH,
  TD,
  ContentComponent,
} from '../ClientsTable/ClientsTable.styled';

import {
  Amount,
  TransactionsComponent,
  PaginationComponent,
} from './UserTransactions.styled'




const UserTransactions = () => {

  const [transactions, setTransactions] = useState([])
  const [pageCount, setpageCount] = useState(null)
  const [sortName, setSortName] = useState(null);
  const page = useSelector((state) => state.page.page)
  const userLimit = 15;
  const {id} = useParams()

  useEffect(() => {
    fetchUserTransactions(id, page, sortName, userLimit).then(data => setTransactions(data))
    setpageCount(Math.ceil(transactions.transactions?.count / userLimit))
  }, [id, page, sortName])

  return (
    <>
      <TransactionsComponent>
        <h3>Залишок основних рахунків: {transactions.main} грн</h3>
        <h3>Залишок бонусних рахунків: {transactions.bonus} грн</h3>
        <h3>Залишок в резерві: {transactions.reserved} грн</h3>

        <PaginationComponent>
          <Pagination
            clientsData={transactions?.transactions}
            pageCount={pageCount}
          />
        </PaginationComponent>

        <Table>
          <thead>
            <TR>
              <TH><ContentComponent>Вид транзакції</ContentComponent></TH>
              <TH><ContentComponent>Дата<Arrows setSortName={setSortName} name='createdAt' /></ContentComponent></TH>
              <TH><ContentComponent>Сума, грн<Arrows setSortName={setSortName} name='amount' /></ContentComponent></TH>
            </TR>
          </thead>
          <tbody>
            {
              transactions?.transactions?.rows.map((item, index) => {
                const { type, createdAt, amount } = item
                return (
                  <TR key={index} >
                    <TD>{type}</TD>
                    <TD>{getData(createdAt)}</TD>
                    <TD><Amount color={amount > 0 ? 'green' : 'red'}>{amount}</Amount></TD>
                  </TR>
                )
              })
            }
          </tbody>
        </Table>
      </TransactionsComponent>
    </>
  );  
}

export default UserTransactions;
