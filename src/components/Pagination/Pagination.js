import React from 'react'
import {
    Button
} from '../Users/User.styled'

function Pagination({ clientsData, page, pageCount=15, prevPage, nextPage }) {
	return (
		<div>
			{page} - {clientsData?.rows?.length} із {clientsData.count}
			<Button onClick={() => prevPage()} disabled={page == 1 ? true : false}>{'<'}</Button>
			<Button onClick={() => nextPage()} disabled={page == pageCount ? true : false}>{'>'}</Button>
		</div>
	);
};

export default Pagination
