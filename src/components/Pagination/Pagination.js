import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from '../../redux/slices/PaginationCount/PaginationCount';

import {
    Button
} from '../Users/User.styled'



function Pagination({ clientsData, pageCount = 15 }) {
	const page = useSelector((state) => state.page.page)
  const dispatch = useDispatch()

  return (
    <div>
      {page} - {clientsData?.rows?.length || clientsData?.feedbacks?.length} із {clientsData?.count || clientsData?.feedbackCount}
      <Button onClick={() => dispatch(decrement())} disabled={page == 1 ? true : false}>{'<'}</Button>
      <Button onClick={() => dispatch(increment())} disabled={page == pageCount || pageCount === 1 ? true : false}>{'>'}</Button>
    </div>
  )
};

export default Pagination;
