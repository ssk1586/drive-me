import styled from "styled-components/macro";

export const Title = styled.h3`
  color: red;
  margin-bottom: 0px;
`;

export const FeedbackCount = styled.p`
  font-weight: 500;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  font-weight: 400;
`;

export const Date = styled.div`
  color: gray;
`;

export const Rate = styled.div`
  color: red;
`;

export const Author = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

export const FeedbackComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  margin-bottom: 30px;
`;