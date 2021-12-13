import React from 'react';
import App from './App';
import {ResetCSS} from './global/resetCSS';
import {GithubContext} from '../providers/github.providers'

const Providers = () =>{
    return(
        <main>
      <GithubContext>
        <ResetCSS/>
        
        <App/>
              
        </GithubContext>
      </main>
    );
}