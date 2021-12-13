import styled from 'styled-components';

export const Text4 = styled.h4`
    font-family:'Roboto';
    font-weight: bold;
    font-size:18px;
    margin-bottom:9px;
`;
export const TextSpan = styled.span`
    font-size:16px;
    font-weight: normal;
    margin-left: 6px;
`;

export const Text2 = styled.h2`
    font-family:'Roboto';
    font-weight: bold;
    font-size:22px;
    margin-bottom:10px;
`;

export const CardRepo  = styled.div`
    width:340px;
    height:180px;

    font-family:'Roboto';
    font-weight:bold;
    box-shadow:1px 2px 8px rgba(0,0,0,0.5);
    padding:10px;
    margin-top:20px;
    margin-left:15px;
    transition:all 0.2s;

    &:hover{
        transform:scale(1.1);
    }

`;
export const Link = styled.a`
    color:blue;
    font-size:16px;
    text-decoration:none;
    font-weight:bold;
    font-family:'Roboto';
    cursor:pointer;
    margin-top:5px;

    &:hover{
        text-decoration:underline;
    }
`;
