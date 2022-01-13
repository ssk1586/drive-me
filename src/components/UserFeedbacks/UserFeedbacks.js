import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchFeedbacks } from '../../services/API'
import { useParams } from "react-router-dom";
import { getData } from '../../utils/getDate';  

import {
  Title,
  FeedbackCount,
  Comment,
  Date,
  Rate,
  Author,
  FeedbackComponent,
  Content,
} from './UserFeedbacks.styled'

import {
  Table,
  TR,
  TH,
} from '../ClientsTable/ClientsTable.styled';

import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';



const UserFeedbacks = () => {

  const [userFeedbacks, setFeedbacks] = useState([]);
  const { id } = useParams();
  const page = useSelector((state) => state.page.page)
  const [pageCount, setpageCount] = useState(null)
  const userLimit = 15;

  const navigate = useNavigate();

  const handleUserRedirect = (id) => {
		navigate(`/aboutUser/${id}`)
	};
  
  useEffect(() => {
    fetchFeedbacks(id, page, userLimit).then(data => setFeedbacks(data))
    setpageCount(Math.ceil(userFeedbacks.feedbackCount / userLimit))
  }, [id, page]);

  return (
    <>
      {userFeedbacks?.feedbacks?.length > 0 ?
        <Content>
          <Title>Загальна оцінка користувача - {userFeedbacks.rating} </Title>
          
          <FeedbackComponent>
            <FeedbackCount>{userFeedbacks.feedbackCount} коментарів</FeedbackCount>
            <Pagination
              clientsData={userFeedbacks}
              pageCount={pageCount}
            />
          </FeedbackComponent>

          <Table>
            <thead>
              {userFeedbacks?.feedbacks?.map((item) => {
                const { tripDate, id, sender, text, rating } = item
                return (
                  <TR key={id}>
                    <TH>
                      <Comment onClick={() => handleUserRedirect(sender.id)}>
                        <Author>{sender.name} {sender.surname}</Author>
                        <Date>{getData(tripDate)}</Date>
                      </Comment>
                    </TH>
                    <TH>
                      <Comment>
                        <div>{text}</div>
                        <Rate>{rating}</Rate>
                      </Comment>
                    </TH>
                  </TR>
                )
              })
              }
            </thead>
          </Table>
        </Content> : 'no comments'}
    </>
  );
}

export default UserFeedbacks
