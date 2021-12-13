import styled from 'styled-components';

export const Wrapper = styled.div`
   position:absolute;
   width:100%;
   height:100vh;
   top:0;
   background-color:#fff;
   z-index:1000;
    display:flex;
    flex-direction:Column;
    align-items:center;
    justify-content:center;
`;
export const ImgLogo = styled.img`
    width: 450px;
    height: 130px;
    margin-bottom:50px;
`;

export const BoxSearch = styled.div`
    input{
        width: 450px;
        font-family:'Roboto';
        font-weight: bold;
        padding:8px 30px;
        border-bottom:1px solid #ccc;
        

        &:focus{
            border-radius:8px 0px;
            outline:1px solid lightBlue;
            box-shadow: 4px 4px 30px lightBlue;

        }
    }
    button{
        padding:6px 20px;
        background-color:blue;
        color:#fff;
        font-size:20px;
        font-family:'Roboto',sans-serif;
        border-radius:2px;
        margin-left:12px;
    }

`;

export const CreatedBy = styled.span`
    font-family:'Roboto';
    font-size:16px;
    position:fixed;
    bottom:15px
`;

