import React from 'react';

function ButtonComponent({style,content, url, outerStyle}) {
    return(
        <div>
            <a href={url}>
             <button style={style}>{content}</button>
            </a>
        </div>
    )
}

export default ButtonComponent