import styled from 'styled-components'

export const BoxHeader = styled.div`
    width: 80%;
    height: 75px;
    border-radius:12px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin:auto;
`;

export const Wrapper = styled.div`
    display:flex;
    width:85%;
    justify-content: center;
    align-items:center;

    input{
        font-family:'Roboto',sans-serif;
        font-weight: 400;
        width: 380px;
        border:1px solid #ccc;
        border-radius: 12px 0px;
        font-size:18px;
        padding:8px;
        outline:none;

        
    &:focus{
            border:1px solid lightBlue;
            box-shadow:1px 2px 10px lightBlue;
        }
        
    }
    button{
        background-color:blue;
        color:white;
        font-size: 18px;
        padding:8px 25px;
        border:none;
        border-radius:0px;
        margin-left:5px;
        font-family:'Roboto';
        border-radius:3px;
    }
`;
export const ImgLogo= styled.img`
    width:230px;
    height:70px;

    margin-top:15px;
    margin-left:60px;
    
    `;