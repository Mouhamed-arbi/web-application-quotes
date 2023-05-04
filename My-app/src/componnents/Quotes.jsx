import React, { useEffect, useState } from "react"
import axios from 'axios';
import './Quotes.css'





const AllPosts = (props) => {
    const [details, setDetails] = useState(false);
    const [name1, setName1] = useState("");
    const [bodyquote1, setbodyquote1] = useState("");
    const [typequote1, settypequote1] = useState("");



    const apidelete =async (id)=> {
        const res= await axios.delete(`http://localhost:5000/api/quote/${id}`)
        props.setCount(props.count+1)
        }

        const apiUpdate =async (id)=> {
            const res= await axios.put(`http://localhost:5000/api/quote/${id}`,{name:name1,bodyquote:bodyquote1,typequote:typequote1})
            props.setCount(props.count+1)
            } 
       
return (
    <div className="card-list-item">
       <center>
         <img src="https://cdn-icons-png.flaticon.com/512/4185/4185239.png"></img>
   <p className="card-list-item" onClick={() =>setDetails(!details)}><center><h3> {props.data.bodyquote}</h3></center> By : {props.data.name} <h4>Click For Quote Details</h4></p>
   {details &&  <div><h3>Name :{props.data.name}</h3><br/> <h3>Type :{props.data.typequote}</h3></div>} 

   {details &&<div>
   <button onClick={()=>apidelete(props.data.idquote)}>Delete</button>
   <button onClick={()=>apiUpdate(props.data.idquote)}>Update</button>
     <div className="card2">
<input placeholder="Name" defaultValue={props.name1}  onChange={(event)=>setName1(event.target.value)} />
        <input placeholder="Quote" defaultValue={props.bodyquote1}  onChange={(event)=>setbodyquote1(event.target.value)} />
        <input placeholder="Type" defaultValue={props.typequote1}  onChange={(event)=>settypequote1(event.target.value)} />
</div>
</div>}

</center>
        </div>
        
   

    
    
 
  );
  
}

export default AllPosts;