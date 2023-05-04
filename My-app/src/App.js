import React, { useEffect, useState } from "react"
import axios from 'axios';
import Quotes from './componnents/Quotes.jsx'
import './App.css'
function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [bodyquote, setbodyquote] = useState("");
  const [typequote, settypequote] = useState("");


  const [count, setCount] = useState(0)
  const [details, setDetails] = useState(false);
  const [searchh,setsearchh]=  useState("");
  const [quote, setQuote] = useState([]);


   const apiGet = async() => {
     const res=await axios.get("http://localhost:5000/api/quote")
     setItems(res.data)
   };

   useEffect(() => {
     apiGet();
     newItems()
   }, [count])
  
   const apipost =async ()=> {
    const res= await axios.post(`http://localhost:5000/api/quote`,{name,bodyquote,typequote})
setCount(count+1)
    }

    
    function search(id){
        axios.get(`http://localhost:5000/api/quote/${id}`)
        .then((res)=>{
            setItems(res.data)
          })
          .catch((err)=>{console.log(err)})  
    }  

  
    const shuffleArray = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
   

    const newItems = () => {
      const shuffledArray = shuffleArray([...items]);
  return shuffledArray;
      }
     
    
    var arr=newItems();
   
    const handleSearch=()=>{
        search(searchh)
       }
  return (
      
    <div className="?" >
      <div className="search ">
        <input className="searchinput" placeholder="searchByTypeOfQuote" defaultValue={searchh}  onChange={(event)=>setsearchh(event.target.value)} />
        <button onClick={()=>handleSearch()}>search</button>
        </div>
        
        <center><h2>SCROLL TO SEE THE DAILY QUOTE BELOW</h2></center>
        <center className="text">𝕀𝕥’𝕤 𝕒𝕞𝕒𝕫𝕚𝕟𝕘 𝕙𝕠𝕨 𝕒𝕟 𝕦𝕡𝕝𝕚𝕗𝕥𝕚𝕟𝕘 𝕢𝕦𝕠𝕥𝕖 𝕠𝕣 𝕚𝕟𝕤𝕡𝕚𝕣𝕒𝕥𝕚𝕠𝕟𝕒𝕝 𝕤𝕥𝕠𝕣𝕪 𝕔𝕒𝕟 𝕔𝕠𝕞𝕡𝕝𝕖𝕥𝕖𝕝𝕪 𝕔𝕙𝕒𝕟𝕘𝕖 𝕪𝕠𝕦𝕣 𝕕𝕒𝕪, 𝕒𝕟𝕕 𝕤𝕠𝕞𝕖𝕥𝕚𝕞𝕖𝕤 𝕪𝕠𝕦𝕣 𝕝𝕚𝕗𝕖. 𝕆𝕟𝕖 𝕢𝕦𝕠𝕥𝕖 𝕥𝕙𝕒𝕥 𝕥𝕠𝕦𝕔𝕙𝕖𝕤 𝕪𝕠𝕦𝕣 𝕙𝕖𝕒𝕣𝕥 𝕠𝕣 𝕣𝕖𝕞𝕚𝕟𝕕𝕤 𝕪𝕠𝕦 𝕠𝕗 𝕪𝕠𝕦𝕣 𝕕𝕣𝕖𝕒𝕞𝕤 𝕔𝕒𝕟 𝕚𝕟𝕤𝕡𝕚𝕣𝕖 𝕤𝕥𝕖𝕡𝕤 𝕥𝕙𝕒𝕥 𝕨𝕠𝕦𝕝𝕕 𝕠𝕥𝕙𝕖𝕣𝕨𝕚𝕤𝕖 𝕣𝕖𝕞𝕒𝕚𝕟 𝕦𝕟𝕥𝕒𝕜𝕖𝕟 𝕒𝕟𝕕 𝕤𝕥𝕚𝕣 𝕟𝕖𝕨 𝕡𝕖𝕣𝕤𝕡𝕖𝕔𝕥𝕚𝕧𝕖𝕤 𝕠𝕟 𝕝𝕚𝕗𝕖 𝕒𝕟𝕕 𝕡𝕠𝕤𝕤𝕚𝕓𝕚𝕝𝕚𝕥𝕚𝕖𝕤.<br></br>
        <br></br>
        𝕀𝕟𝕤𝕚𝕘𝕙𝕥 𝕠𝕗 𝕥𝕙𝕖 𝔻𝕒𝕪 𝕨𝕒𝕤 𝕔𝕣𝕖𝕒𝕥𝕖𝕕 𝕥𝕠 𝕤𝕡𝕣𝕖𝕒𝕕 𝕚𝕟𝕤𝕡𝕚𝕣𝕒𝕥𝕚𝕠𝕟 𝕥𝕙𝕣𝕠𝕦𝕘𝕙 𝕤𝕠𝕞𝕖𝕥𝕙𝕚𝕟𝕘 𝕤𝕞𝕒𝕝𝕝, 𝕠𝕟 𝕒 𝕝𝕒𝕣𝕘𝕖 𝕤𝕔𝕒𝕝𝕖. 𝕋𝕙𝕠𝕦𝕘𝕙 𝕥𝕙𝕖𝕣𝕖 𝕒𝕣𝕖 𝕒 𝕥𝕠𝕟 𝕠𝕗 𝕕𝕚𝕗𝕗𝕖𝕣𝕖𝕟𝕥 ‘𝕢𝕦𝕠𝕥𝕖 𝕨𝕖𝕓𝕤𝕚𝕥𝕖𝕤’, 𝕠𝕟 𝕥𝕙𝕚𝕤 𝕡𝕒𝕘𝕖 𝕪𝕠𝕦’𝕝𝕝 𝕒𝕝𝕨𝕒𝕪𝕤 𝕗𝕚𝕟𝕕 𝕒 𝕨𝕖𝕒𝕝𝕥𝕙 𝕠𝕗 𝕚𝕟𝕤𝕡𝕚𝕣𝕚𝕟𝕘, 𝕞𝕠𝕥𝕚𝕧𝕒𝕥𝕚𝕟𝕘 𝕒𝕟𝕕 𝕚𝕟𝕤𝕚𝕘𝕙𝕥𝕗𝕦𝕝 𝕢𝕦𝕠𝕥𝕖𝕤 – 𝕥𝕙𝕠𝕦𝕘𝕙𝕥𝕗𝕦𝕝𝕝𝕪 𝕔𝕙𝕠𝕤𝕖𝕟 𝕨𝕚𝕥𝕙 𝕪𝕠𝕦 𝕒𝕟𝕕 𝕪𝕠𝕦𝕣 𝕕𝕣𝕖𝕒𝕞𝕤 𝕚𝕟 𝕞𝕚𝕟𝕕.<br></br>
                <br></br>
                𝕐𝕠𝕦 𝕔𝕒𝕟 𝕒𝕝𝕤𝕠 𝕤𝕦𝕓𝕤𝕔𝕣𝕚𝕓𝕖 𝕗𝕠𝕣 𝕀𝕟𝕤𝕚𝕘𝕙𝕥 𝕠𝕗 𝕥𝕙𝕖 𝔻𝕒𝕪 𝕥𝕠 𝕣𝕖𝕔𝕖𝕚𝕧𝕖 𝕒𝕟 𝕦𝕡𝕝𝕚𝕗𝕥𝕚𝕟𝕘 𝕢𝕦𝕠𝕥𝕖 𝕖𝕧𝕖𝕣𝕪 𝕕𝕒𝕪 𝕠𝕗 𝕥𝕙𝕖 𝕨𝕖𝕖𝕜 𝕒𝕟𝕕 𝕒𝕟 𝕚𝕟𝕤𝕡𝕚𝕣𝕒𝕥𝕚𝕠𝕟𝕒𝕝 𝕤𝕥𝕠𝕣𝕪 𝕠𝕟 𝔽𝕣𝕚𝕕𝕒𝕪 𝕣𝕚𝕘𝕙𝕥 𝕚𝕟 𝕪𝕠𝕦𝕣 𝕚𝕟𝕓𝕠𝕩.
                
                </center>
                <center>
                <h2>Quote of the Day</h2>
                <button className="bb" onClick={() =>setDetails(!details)}> Wanna Add Quotes</button>
                </center>
       {details &&  <div>
         <center>
        <button onClick={()=>apipost()}>ADD</button>
        <input placeholder="Name" defaultValue={name}  onChange={(event)=>setName(event.target.value)} />
        <input placeholder="bodyquote" defaultValue={bodyquote}  onChange={(event)=>setbodyquote(event.target.value)} />
        <input placeholder="typequote" defaultValue={typequote}  onChange={(event)=>settypequote(event.target.value)} />
        </center>
        </div>}
        {arr.map((item)=>{
          
            return <Quotes data={item} setCount={setCount}  count={count} />
        })}
    </div>
  );
}

export default App;
