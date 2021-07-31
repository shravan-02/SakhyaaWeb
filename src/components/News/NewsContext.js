import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState([])
    // const apiKey = "7209038e006b42189d535e96cec8b018";

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7209038e006b42189d535e96cec8b018`).then(response => setData(response.data())).catch(error => console.log(error));

    },[])

    return (
            <NewsContextProvider props={data}>{props.children}</NewsContextProvider>
        )
};