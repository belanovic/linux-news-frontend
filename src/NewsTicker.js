import React from 'react'
import Ticker from 'react-ticker'
 
const NewsTicker = () => (
    <Ticker>
        {({ index }) => (
            <>
                <h1 className = "tickerTitle">This is the Headline of element #{index}!</h1>
            </>
        )}
    </Ticker>
)
 
export default NewsTicker