import React, {useState, useEffect} from "react";


const FilteredArticles = ({filterData}) => {

    const [inputText, setInputText] = useState("")

    const handleTextChange = (event) => {
        setInputText(event.target.value);
    }

    useEffect(() => {
        filterData(inputText)
    }, [inputText])


    return (
        <div>
            <input id="input" type="text" onChange={handleTextChange} value={inputText}/>
        </div>
    )
}

export default FilteredArticles