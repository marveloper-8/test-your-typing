import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    height: 100%;
`;

export const Head = styled.div`
    text-align: center;
    padding: 10px;
    font-size: 50px;
    font-weight: bolder;
    margin-bottom: 30px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 60vw;
    margin: 30px auto;
    @media screen and (max-width: 750px){
        width: 80%;
    };
`;

export const SetupButton = styled.button`
    padding: 20px 10px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background: #121212;
    color: #fff;
    font-size: 20px;
    width: 40vw;
    font-weight: bolder;
    margin-top: 60px;
    border: 2px solid grey;
    @media screen and (max-width: 750px){
        width: 80%;
    };
`;