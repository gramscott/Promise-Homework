import React from "react";


const Article = ({article}) => {

    return (
        <li>
            <a href="{article.url}">
                <h1>{article.title}</h1>
                </a>
        </li>
    )
}

export default Article