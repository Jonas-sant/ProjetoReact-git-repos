import * as Style from './style';
import useGithub from '../../hooks/github-hooks';
import React, {useState} from 'react';
import logoAplication from '../../assets/logoAplication.svg';

const NoSearch = ()=>{

    const {getUser} = useGithub();
    const [usernameForSearch,setUsernameForSearch] = useState();
    
    const submitGetUser = ()=>{
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
        

        
    }
    return(
        <Style.Wrapper>
            <Style.ImgLogo src={logoAplication} alt="img-logo"/>

            <Style.BoxSearch>
                <input type="text" onChange={(event)=> setUsernameForSearch(event.target.value)} placeholder= "Busque por um usúario aqui..."/>
                <button onClick={submitGetUser}>Buscar</button> 
            </Style.BoxSearch>
            <Style.CreatedBy>Createde by @Jonas Santos</Style.CreatedBy>
        </Style.Wrapper>

        
    );
}

export default NoSearch;