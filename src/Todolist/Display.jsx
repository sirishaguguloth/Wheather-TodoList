import React from 'react'

export default function Display({todos,del}) {
const deleteHandler =(tod)=>{
    const deleted =todos.filter(tos => tos !==tod);
    del(deleted);
}
  return (
    <div> {todos.map(tod =>{
     return(
        <>
        <div>{tod}</div>
        <button onClick={()=> deleteHandler(tod)}>Delete</button>
        </>
     )
    })}
      
    </div>
  )
}
