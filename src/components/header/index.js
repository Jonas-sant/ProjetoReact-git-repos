import * as Style from './style'


const Header = ()=>{
    return(
        <> 
            <Style.BoxHeader>
                <Style.LogoTitle>Git Repos</Style.LogoTitle>
            </Style.BoxHeader>
            <hr style={{opacity:0.2,color:'#FFFFFF'}}/>
        </>
    );
}

export default Header;