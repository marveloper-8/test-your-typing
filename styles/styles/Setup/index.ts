import { SetupModel } from "../../../public/helpers/interface";
import styled from "styled-components";

export const Head = styled.div`
    text-align: center;
    padding: 10px;
    font-size: 50px;
    font-weight: bolder;
    margin: 30px 0;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 60vh;
    width: 90%;
    margin: auto;
    grid-gap: 50px;
    @media screen and (max-width: 750px){
        grid-template-columns: 1fr;
    };
`;

export const Paragraph = styled.textarea`
    background: #121212;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    padding: 15px;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    border-radius: 10px;
    @media screen and (max-width: 750px){
        height: 400px;
    };
`;

export const Section = styled.section`
    margin-bottom: 50px;
`;

export const Tabs = styled.span<SetupModel>`
    margin-right: 10px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    ${props => props.active ? `
        background: #fff;
        color: #000;
    ` : `
        background: #121212;
    `};
`;

export const TabsInput = styled.input<SetupModel>`
    margin-right: 10px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    border: grey;
    width: 100px;
    ${props => props.active ? `
        background: #fff;
        color: #000;
    ` : `
        background: #121212;
        color: #fff;
    `};
    &::placeholder{
        color: #808080;
    }
`;

export const Button = styled.button`
    margin-right: 5px;
    padding: 2px 5px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background: #fff;
    color: #000;
`;

export const SetupButton = styled.button`
    padding: 10px 10px;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background: #121212;
    color: #fff;
    font-size: 20px;
    width: calc(100% - 24px);
    font-weight: bolder;
    border: 2px solid grey;
`;