import React from 'react';
import GithubContext from './providers/github.providers';
import {ResetCSS} from './components/global/resetcss'
import App from './App'

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

export default Providers;