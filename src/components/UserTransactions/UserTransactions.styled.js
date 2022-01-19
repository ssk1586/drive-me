import styled from 'styled-components/macro'

export const Amount = styled.p`
  color: ${props => props.color};
`;

export const TransactionsComponent = styled.div`
  margin-bottom: 30px;

  @media (max-width: 470px){
    margin: 0px 10px 30px 10px;
  }
`;

export const PaginationComponent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;