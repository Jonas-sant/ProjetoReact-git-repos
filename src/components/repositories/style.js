import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import styled from 'styled-components';


export const WrapperTabs = styled(Tabs)`
    font-size:16px;
    width:85%;
    margin:auto;
   
`;

export const WrapperTabList = styled(TabList)`
    list-style-type:none;
    padding:4px;
    display:flex;
    margin:0;
`;
WrapperTabList.tabsRole='TabList';


export const WrapperTab = styled(Tab)`
    font-family:'Roboto',sans-serif;
    font-weight : bold;
    margin:0px 2px;
    border:1px solid #ccc;
    border-radius:8px;
    user-select: none;
    padding: 8px;
    cursor:pointer;
    z-index:999;
    background-color:#fff;

    &:focus{
        outline:none;
    }

    &.is-selected{
        border-bottom: 1px solid white;
        border-bottom-left-radius:0px;
        border-bottom-right-radius:0px;
    }

`;



export const WrapperTabPanel = styled(TabPanel)`
    
    padding:8px;
    border: 1px solid #ccc;
    box-shadow: 0 0 0.2em rgba(0,0,0,0.4);
    display:none;
    margin-top:-5px;

    &.is-selected{
        display: block;
    }
  

   
`;

export const WrapperList = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
`;