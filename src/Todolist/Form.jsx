import React, { useState } from 'react'

export default function Form({add,todos}) {
    const [todo,settodo]=useState("");
    const [todo1,settodo1]=useState("");
    const [todo2,settodo2]=useState("");
    //console.log(todo);
    const submitHandler =(e) =>{
        e.preventDefault();
        add([...todos,todo,todo1]);
        settodo("");
        settodo1("");
        settodo2("");
    }
  return (
    <div>
      <center>
        <h2>TODO List</h2>
    <form  onSubmit={submitHandler}>
        <input value={todo}   onChange={(e) => settodo(e.target.value)} type="text"  placeholder='Enter a name'/><br/><br/>
        <input value={todo1}   onChange={(e) => settodo1(e.target.value)} type="email"  placeholder='Enter a email'/><br/><br/>
        <input  type="password"  value={todo2}   onChange={(e) => settodo2(e.target.value)} placeholder='password'/><br/><br/>
        <input type="submit" value="ADD" />
      </form>
      </center>
    </div>
  )
}

