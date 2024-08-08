import React, { useState } from 'react'
import axios from 'axios';

export default function Wheather() {
   const [data,setdata]=useState("");
    const [town,settown]=useState("");
   
    const fetching =(e)=>{
      e.preventDefault();
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=e02813fdf7cc3635fd74934e2dcdfd37`).then((res) => setdata(res.data.main.temp-272.15)).catch((err)=>console.log(err));
      settown("")
    }

  return (
    <div>
    <form onSubmit={fetching}>
      <h2> Sample Wheather ApI</h2>
       <input  value={town} onChange ={(e) => settown(e.target.value)} type="text"  placeholder='Enter a name'/><br/><br/>
       <input type="submit" value="fetch" />
       </form>
       <div>
    {data !== "" && <div> {data} <small><sup>o</sup></small>c</div>}
    </div>
    </div>
   
  )
}
