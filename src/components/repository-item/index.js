import React from 'react';
const RepositoryItem = ({name,fullName,linkToRepo})=>{
    return(
        <>
            <h2>{name}</h2>
            <h4>{fullName}</h4>
            <span>
                <a  href="https://www.google.com" 
                    target="_blank" 
                    rel="noreferrer">
                    {linkToRepo}
                </a>
            </span>

        </>
    );
}

export default RepositoryItem