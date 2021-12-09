import * as Style from './style'
import React from 'react';
import RepositoryItem from '../repository-item';


const Repositories = ()=>{

    return(
        <Style.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <Style.WrapperTabList>
                <Style.WrapperTab>Repositories</Style.WrapperTab>
                <Style.WrapperTab>Starred</Style.WrapperTab>
            </Style.WrapperTabList>
            <Style.WrapperTabPanel>
                <RepositoryItem 
                    name="repo 1" 
                    linkToRepo="https://api.github.com/users/Jonas-sant/repos"
                    fullName="Jonas-sant/desafio-git-github-dio"    
                />

            </Style.WrapperTabPanel>

            <Style.WrapperTabPanel>
                <RepositoryItem 
                name="Repo 2"
                fullName = "Jonas-sant/Jonas-sant"
                linkToRepo = "https://api.github.com/users/Jonas-sant/repos"
                
                />
            </Style.WrapperTabPanel>
        </Style.WrapperTabs>
    );
}


export default Repositories;

