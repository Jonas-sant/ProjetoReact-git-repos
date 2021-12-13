import React from 'react';
import * as Style from './style'
const RepositoryItem = ({name,fullName,linkToRepo})=>{
    return(
        <Style.CardRepo>
            <Style.Text2>{name}</Style.Text2>
            <Style.Text4>Full Name:<Style.TextSpan>{fullName}</Style.TextSpan> </Style.Text4>
            <Style.Text4>Link:</Style.Text4>
            <span>
                <Style.Link  href={linkToRepo} 
                    target="_blank" 
                    rel="noreferrer">
                    {linkToRepo}
                </Style.Link>
            </span>
            

        </Style.CardRepo>
    );
}

export default RepositoryItem