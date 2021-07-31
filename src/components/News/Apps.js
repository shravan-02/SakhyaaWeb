import React from 'react'
import { NewsContextProvider } from './NewsContext'



function App() {
    return (
        <NewsContextProvider>
            <div>Hello </div>
        </NewsContextProvider>
    )
}

export default App
