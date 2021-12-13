import * as Style from './style'
import React, { useEffect, useState } from 'react';
import RepositoryItem from '../repository-item';
import useGithub from '../../hooks/github-hooks'

const Repositories = ()=>{
    const{ githubState, getUserRepos,getUserStarred } = useGithub();
    const [hasUserForSearchRepos,setHasUserForSearchRepos] = useState(false);
   
    useEffect(()=>{
        if(!!githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);

        }
        setHasUserForSearchRepos(!!githubState.repositories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);
    
    
    return(
        
        <>
        {hasUserForSearchRepos ?(
            <Style.WrapperTabs
                selectedTabClassName="is-selected"
                selectedTabPanelClassName="is-selected"
            >
                <Style.WrapperTabList>
                    <Style.WrapperTab>Repositories</Style.WrapperTab>
                    <Style.WrapperTab>Starred</Style.WrapperTab>
                </Style.WrapperTabList>
                <Style.WrapperTabPanel>
               <Style.WrapperList>
                        {githubState.repositories.map(item =>

                            <RepositoryItem 
                            key={item.id}
                            name={item.name} 
                            linkToRepo={item.html_url}
                            fullName={item.full_name}
                            />        
                        
                        )}
                </Style.WrapperList>    
                    

                </Style.WrapperTabPanel>

                <Style.WrapperTabPanel>
                <Style.WrapperList>
                {githubState.starred.map(item =>
                        <RepositoryItem 
                        key={item.id}
                        name={item.name} 
                        linkToRepo={item.html_url}
                        fullName={item.full_name}
                        />        
                      
                    )}
                </Style.WrapperList>
                </Style.WrapperTabPanel>
            </Style.WrapperTabs>
              ):(
              <></>
              
            )}
        </>
      
    );
}


export default Repositories;

