import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  border: 2px solid red;
  background-color: inherit;
  border-radius: 20px;
`;

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ButtonComponent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-end;
`;