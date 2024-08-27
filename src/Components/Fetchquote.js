import React,{useEffect,useState} from 'react'

const Fetchquote = () => {
  const [quote,setQuote]=useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/quotes")
   .then(response=>response.json())
   .then((data)=>setQuote(data.quote.slice(0,10)))
   .catch((error)=>console.error("Error in fetching quote: " + error));
  },[]);
  return (
    <div>
      <h1>Quotes...</h1>
      {quote.map((quote)=>(
        <h2 key={quote.id}>{quote.quote}</h2>
      ))}
    </div>
  )
}

export default Fetchquote