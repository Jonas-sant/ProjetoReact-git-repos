import * as Style from './style.js';

const ProfileCard = () =>{
    return(
        <>
            <Style.Box>
            <div>
                <Style.ImageProf src="https://avatars.githubusercontent.com/u/58575990?v=4" alt="Avatar of User"/>
                    
                </div>
                <Style.BoxInfos>
                    <Style.Title>Jonas Santos</Style.Title>
                    <h3>User Name : <span><a href="https://www.google.com" target="_blank" rel="noreferrer">Jonas-sant</a></span></h3>
                    <div style = {{
                                    display:'flex',
                                    alignItems: 'center',
                                    justifyContent:'space-around',
                                    marginTop:40
                                }}>

                        <div className="container">            
                            <h4>Follows</h4>
                            <span>5</span>
                        </div>
                        <div>            
                            <h4>Starreds</h4>
                            <span>5</span>
                        </div>
                        <div>            
                            <h4>Followings</h4>
                            <span>5</span>
                        </div>
                    </div>
                    
                </Style.BoxInfos>
            </Style.Box>
            
        </>
        
    );
}

export default ProfileCard;