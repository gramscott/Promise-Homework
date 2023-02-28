import React, {useState, useEffect} from "react";
import ArticleList from "../Components /ArticleList";
import Article from "../Components /Article";
import FilteredArticles from "../Components /FilteredArticles";


const ArticleContainer = () => {

    const [articles, setArticlesData] = useState([])
    const[filteredArticles, setFilteredArticles] = useState([])

    const filterData = (inputText) => {
        const filter = articles.filter(article => {
            return article.title.includes(inputText)
        })
        setFilteredArticles(filter)
    }

    useEffect(() => {
        fetch ("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(storyIds => {
            const articlePromises = storyIds.map((storyId) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json())
        })

        Promise.all(articlePromises)
        .then(articleData => {
            setArticlesData(articleData);
            setFilteredArticles(filterData)
        })
    })
}, [] ) 


    return (
        <div>
            <h1>Articles</h1>
            <FilteredArticles filterData={filterData}/>
                <ArticleList articles={filteredArticles}/>
        </div>
    )
}


export default ArticleContainer;



