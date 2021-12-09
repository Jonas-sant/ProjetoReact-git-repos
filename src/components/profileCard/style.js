import styled from 'styled-components';

export const Box = styled.div`
    height: 300px;
    border-radius:12px;
    display:flex;
    padding-left:50px;
    align-items:center;

`;

export const ImageProf = styled.img`
    width:200px;
    height:200px;
    border-radius:50px;
    
`;

export const Title = styled.h1`
    color:#000;
    font-family: 'Roboto', sans-serif;
    font-size:1.7em;
    font-weight:bold;
`;

export const BoxInfos = styled.div`
    display:flex;
    flex-direction:column;
    border-left: 1px solid #FFFFFF;
    margin-left:25px;
    padding-left:30px;

    h3{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h3 span:hover{
        text-decoration: underline;
        cursor:pointer;
    }
    h3 span a{
        text-decoration: none;
        color:#000;
    }
`;
