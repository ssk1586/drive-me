import React, {useState, useEffect} from 'react'
import { fetchTrips } from '../../services/API'  
import { useParams } from 'react-router-dom';

import {
  Table,
  TR,
  TH,
  TD,
  ContentComponent,
} from '../ClientsTable/ClientsTable.styled';

import {
  TripComponent,
  Details,
  TripsDetails,
  Row,
} from './TripTable.styled'

import Arrows from '../shared/Arrows/Arrows.js';
import { getData } from '../../utils/getDate'
import card from '../../assets/trapsIcons/card.png'
import passenger from '../../assets/trapsIcons/passenger.png'
import startingpoint from '../../assets/trapsIcons/startingpoint.png'
import finishingpoint from '../../assets/trapsIcons/finishingpoint.png'
import Pagination from '../Pagination/Pagination';



function TripTable() {

  const { id } = useParams();
  const [traps, setTraps] = useState([]);
  const [page, setPage] = useState(1)
  const [pageCount, setpageCount] = useState(null)
  const [sortName, setSortName] = useState(null);
  const userLimit = 15;
  
  useEffect(() => {
    fetchTrips(id, sortName, page, userLimit).then(data => setTraps(data))
    setpageCount(Math.ceil(traps.count / userLimit))
  }, [id, page, sortName]);

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    };
  };

  return (
    <>
      <Pagination
        clientsData={traps}
        page={page}
        pageCount={pageCount}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      {traps?.rows?.length > 0 ?
        <TripComponent>
          <Table>
            <thead>
              <TR>
                <TH><ContentComponent>Час і дата <Arrows setSortName={setSortName} name='createdAt' /></ContentComponent></TH>
                <TH><ContentComponent>Тип <Arrows setSortName={setSortName} name='type' /></ContentComponent></TH>
                <TH>Деталі</TH>
                <TH><ContentComponent>Стутус <Arrows setSortName={setSortName} name='status' /></ContentComponent></TH>
                <TH>Водій</TH>
              </TR>
            </thead>
            <tbody>
              {
                traps?.rows.map((item, index) => {
                  const { type, dateTime, status, numberOfPassengers, price, arrival, departure, driver } = item
            
                  return (
                    <TR key={index} >
                      <TD>{getData(dateTime)}</TD>
                      <TD>{type}</TD>
                      <TD>
                        <Details>
                          <TripsDetails>
                            <Row><img src={startingpoint} alt='startingpoint' /> {departure?.address.label || 'no address'}</Row>
                            <Row><img src={finishingpoint} alt='finishingpoint' /> {arrival?.address.label || 'no address'}</Row>
                          </TripsDetails>
                          <TripsDetails>
                            <Row><img src={card} alt='card' /> Вартість поїздки - ${price}</Row>
                            <Row><img src={passenger} alt='passenger' />{numberOfPassengers} {numberOfPassengers > 1 ? 'пасажири' : 'пасажир'}</Row>
                          </TripsDetails>
                        </Details>
                      </TD>
                      <TD>{status}</TD>
                      <TD>{driver?.name}</TD>
                    </TR>
                  )
                })
              }
            </tbody>
          </Table>
        </TripComponent>
        : 'no trips'}
    </>
  );
}

export default TripTable;
