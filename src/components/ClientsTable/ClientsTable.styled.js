import styled from 'styled-components/macro';

export const ClientItem = styled.div`
  margin-bottom: 50px;
`;


export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border: 1px solid black;

  &:last-child {
    border-bottom: 0;
  }
`;

export const TR = styled.tr`

`;

export const TH = styled.th`
  padding: 10px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  &:last-child {
    border-right: 0;
  }
`;

export const TD = styled.td`
  padding: 15px;
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  cursor: pointer;

  &:last-child {
    border-right: 0;
  }  
`;
