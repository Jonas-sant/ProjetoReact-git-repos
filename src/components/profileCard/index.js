import React from 'react';
import * as Style from './style.js';
import useGithub from '../../hooks/github-hooks';

const ProfileCard = () =>{
    const { githubState } = useGithub();
    return(
        <>
            <Style.Box>
            <div>
                <Style.ImageProf src={githubState.user.avatar} alt="Avatar of User"/>
                    
                </div>
                <Style.BoxInfos>
                    <Style.Title>{githubState.user.name}</Style.Title>
                    <Style.Text3>User Name : <span><Style.Link href={githubState.user.html_url} target="_blank" rel="noreferrer">
                        {githubState.user.login}
                        </Style.Link></span></Style.Text3>
                        {githubState.user.location ? <Style.Text3>Location: {githubState.user.location}</Style.Text3> : <Style.Text3>Location: - </Style.Text3>}
                        {githubState.user.location ? <Style.Text3>Company: {githubState.user.company}</Style.Text3> : <Style.Text3>company: -</Style.Text3>}
                        {githubState.user.blog ? <Style.Text3>Blog: <Style.Link href={githubState.user.blog} target="_blank" rel="noreferrer">{githubState.user.blog}</Style.Link></Style.Text3>:<Style.Text3>Blog:-</Style.Text3>}
                        {githubState.user.bio ? <Style.Text3>Bio:{githubState.user.bio}</Style.Text3> : <></>}


                    <div style = {{
                                    display:'flex',
                                    alignItems: 'center',
                                    justifyContent:'space-around',
                                    marginTop:40
                                }}>
                    

                        <Style.Container>            
                            <Style.Text4>Follows</Style.Text4>
                            <Style.TextSpan>{githubState.user.followers}</Style.TextSpan>
                        </Style.Container>
                        <Style.Container>            
                            <Style.Text4>Followings</Style.Text4>
                            <Style.TextSpan>{githubState.user.following}</Style.TextSpan>
                        </Style.Container>
                        <Style.Container>            
                            <Style.Text4>Gistis</Style.Text4>
                            <Style.TextSpan>{githubState.user.public_gists}</Style.TextSpan>
                        </Style.Container>
                        <Style.Container>            
                            <Style.Text4>Repos</Style.Text4>
                            <Style.TextSpan>{githubState.user.public_repos}</Style.TextSpan>
                        </Style.Container>
                    </div>
                    
                </Style.BoxInfos>
            </Style.Box>
            
        </>
        
    );
}

export default ProfileCard;