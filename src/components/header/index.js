import * as Style from './style';
import useGithub from '../../hooks/github-hooks';
import React, {useState} from 'react';
import logoAplication from '../../assets/logoAplication.svg';

const Header = ()=>{
    const {getUser} = useGithub();

    const [usernameForSearch,setUsernameForSearch] = useState();

    const submitGetUser = ()=>{
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
        

        
    }


    return(
        <> 
            <Style.BoxHeader>
                <Style.ImgLogo src={logoAplication} alt="img-logo"/>                   
                 <Style.Wrapper>
                    <input type="text" onChange={(event)=> setUsernameForSearch(event.target.value)}/>
                    <button onClick={submitGetUser}>Buscar</button> 
                    </Style.Wrapper>
            </Style.BoxHeader>

            
            <hr style={{opacity:0.2,color:'#FFFFFF'}}/>
        </>
    );
}

export default Header;