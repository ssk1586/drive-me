import styled from 'styled-components/macro';

export const Title = styled.h3`
  color: red;

  @media (max-width: 670px){
    font-size: 14px;
  }
`;

export const Text = styled.p`
  @media(max-width: 670px){
    font-size: 10px;
  }
`;

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 670px){
    padding: 10px;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 670px){
    gap: 20px;
  }
`;

export const Input = styled.input`
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px 5px;
  width: 100%;

  @media (max-width: 670px){
    padding: 5px 3px;
    width: 80%;
  }
`;

export const ButtonComponent = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 50px 0px;

  @media (max-width: 470px){
    margin: 10 0px;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.color)};
  border: none;
  border-radius: 10px;
`;

