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

export const Link = styled.a`
    color:blue;
    font-size:16px;
    text-decoration:none;
    font-weight:bold;
    font-family:'Roboto';
    cursor:pointer;

    &:hover{
        text-decoration:underline;
    }
`;
export const Text3 = styled.h3`
    font-family:'Roboto';
    font-weight:bold;
    font-size:18px;
`;
export const Text4 = styled.h4`
    font-family:'Roboto';
    font-weight:bold;
    font-size:16px;
`;
export const TextSpan = styled.span`
    font-weight:bold;
    font-family:'Roboto';

`;
export const Container=styled.div`
    text-align:center;
    margin-left:20px;
    padding:3px;

`;


export const BoxInfos = styled.div`
    display:flex;
    flex-direction:column;
    border-left: 1px solid #FFFFFF;
    margin-left:25px;
    padding-left:30px;`;
