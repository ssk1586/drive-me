import styled from "styled-components/macro";

export const Content = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 100px;
`;

export const Text = styled.p`
  font-weight: 500;
  margin: 10px;
`;


export const Title = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
`;

export const Img = styled.img`
  width: 300px;
  height: 220px;
  border-radius: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;