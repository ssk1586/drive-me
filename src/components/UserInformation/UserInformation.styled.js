import styled from "styled-components/macro";

export const Content = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 100px;

  @media (max-width: 470px){
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;

export const Text = styled.span`
  font-weight: 500;
  margin: 10px;

  @media (max-width: 470px){
    font-size: 10px;
  }
`;


export const Title = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;

  @media (max-width: 470px){
    font-size: 12px;
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 220px;
  border-radius: 20px;

  @media (max-width: 470px){
    width: 200px;
    height: 140px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 470px){
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media (max-width: 470px){
    width: 50px;
    height: 50px;
  };
`;

export const TopicTitle = styled.h3`
  @media (max-width: 470px){
    font-size: 14px;
  }
`;