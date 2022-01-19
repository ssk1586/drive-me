import styled from "styled-components/macro";

export const TripComponent = styled.div`
  margin: 30px 10px;
  @media only screen and (max-width: 760px) {
	table, tbody, th, td, tr { 
		display: block; 
    &:last-child {
    border-right: 0;
  }
	}
  thead { 
		display: none; 
	}
}
@media only screen and (max-width: 760px) {
  td { 
    &:last-child {
    border-right: 0;
  }
}
}
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const TripsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PaginationComponent = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
`;