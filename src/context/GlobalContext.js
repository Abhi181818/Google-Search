import React from 'react'
import { useState, useContext, createContext } from 'react'

const ResultsContext = createContext();
// const baseUrl = ""
export const ResultsProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("abhishek")
    // const [title, setTitle] = useState([])
    const getResult = async () => {
        setIsLoading(true);
        const url = `https://google-search74.p.rapidapi.com/?query=${searchTerm}&limit=50&related_keywords=true`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setResults(result);
        setIsLoading(false)
        // setTitle(result.knowledge_panel["name"])
    }
    return (
        <ResultsContext.Provider value={{ getResult, results, searchTerm, setSearchTerm, isLoading }}>
            {
                children
            }
        </ResultsContext.Provider>
    )
}
export const useResultContext = () => useContext(ResultsContext)