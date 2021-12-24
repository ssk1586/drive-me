import styled from 'styled-components/macro';

export const HeaderComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
    align-items: center;
    max-height: 80px;
`;

export const Logo = styled.h1`
    color: #e94746;
    font-size: 26px;
    font-weight: bold;
`;

export const User = styled.h4`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
`;

export const Status = styled.div`
    cursor: pointer;
`;

export const Name = styled.div`
    color: gray;
    text-decoration: underline;
    cursor: pointer;
`;

export const Line = styled.hr`
    border: none; 
    background-color: red; 
    color: red; 
    height: 2px;
`;

export const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;