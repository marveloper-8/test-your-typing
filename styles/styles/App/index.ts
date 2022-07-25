import styled from "styled-components";

export const App = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: #19191a;
    color: grey;
`;

export const Container = styled.div`
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    background: #000;
    position: absolute;
    top: 15px;
    left: 15px;
    border-radius: 15px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    overflow: hidden;
    overflow-y: scroll;
`;