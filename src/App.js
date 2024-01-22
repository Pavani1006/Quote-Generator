import {useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

function App () {
  const [quote,setQuote] = useState("")
  const fetchData=()=>{
    axios.get('https://type.fit/api/quotes')
    .then((res)=>{
       let data=res.data
       let index=Math.floor(Math.random()*data.length)
       let randomQuote=data[index]
       setQuote(randomQuote.text)
       console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  useEffect(() => {
    return ()=>{
      fetchData()
    };
  }, [])
  
  return (
      <div className='App'>
        <div className='Quote'>
          <h2 className='header'>
            {quote}
          </h2>
          <button className='button' onClick={()=>fetchData()}>
             <span>Next Quote!!</span>
          </button>
        </div>
      </div>
  );
}

export default App;
