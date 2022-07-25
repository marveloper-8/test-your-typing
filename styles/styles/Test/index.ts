import { TestModel } from "../../../public/helpers/interface";
import styled from "styled-components";

export const Timer = styled.div`
    text-align: center;
    padding: 10px;
    height: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
`;

export const ParagraphContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5px;
    height: 51%;
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const Paragraph = styled.div`
    background: #121212;
    position: relative;
    word-wrap: break-word;
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
`;

export const Text = styled.span<TestModel>`
    ${props => props.status === "correct" ? `
        color: orange;
    ` : props.status === "wrong" ? `
        color: red;
    ` : `
        color: #232323;
    `};
`;

export const ParagraphInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
`;

export const Keyboard = styled.div`
    background: #121212;
    height: 35%;
    border-top: 2.5px solid #000;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    padding: 20px;
`;

export const KeyContainer = styled.div<TestModel>`
    display: grid;
    grid-template-columns: repeat(${props => props.keys}, 1fr);
    grid-gap: 10px;
    @media screen and (max-width: 750px){
        grid-gap: 5px;
        height: 40px;
    };
`;

export const Key = styled.div<TestModel>`
    ${props => props.active ? `
        box-shadow: 1px 1px 1px 1px #000;
        color: orange;
        background: #181818;
    ` : `
        color: grey;
        background: #000;
    `};
    font-weight: bolder;
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 750px){
        font-size: 11px;
    };
`;