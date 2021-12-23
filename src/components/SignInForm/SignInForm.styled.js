import styled from 'styled-components/macro';

export const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const Input = styled.input`
    min-width: 400px;
    min-height: 30px;
    border: 2px solid red;
    border-radius: 5px;
`;

export const Button = styled.button`
    min-height: 30px;
    min-width: 150px;
    color: white;
    border: none;
    background-color: red;
    border-radius: 5px;
    cursor: pointer;
`;

export const Logo = styled.p`
    font-weight: 800;
    font-size: 26px;
    color: red;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const Img = styled.img`
    position: absolute;
    padding: 0px 10px;
    cursor: pointer;
`;