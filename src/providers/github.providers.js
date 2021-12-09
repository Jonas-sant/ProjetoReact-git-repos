import React, {createContext, useState } from 'react';
import { useState } from 'react';

export const GithubContext = createContext({
    user:{},
    repositories:[],
    starred: [],

})

const githubProvider = ()=>{

      const [githubState, setGithubState] = useState({
        user:{
            login: undefined,
            name: undefined,
            publicUrl: undefined,
            followers:0,
            following:0,
            public_gists:0,
            public_repos:0,
        },
        repositories:[],
        starred: [],
      })

    return(
        <>

        </>
    );

}

export default githubProvider;
