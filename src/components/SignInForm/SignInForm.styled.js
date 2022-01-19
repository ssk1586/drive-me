import styled from 'styled-components/macro';

export const Component = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const Input = styled.input`
    width: 50%;
    height: 30px;
    border: 2px solid red;
    border-radius: 5px;

    /* @media (max-width: 767px){
        width: 200px;
    } */
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
    justify-content: center;
    align-items: center;
    gap: 25px;
    width: 80%;
`;

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Img = styled.img`
    position: absolute;
    padding: 0px 10px;
    cursor: pointer;
`;