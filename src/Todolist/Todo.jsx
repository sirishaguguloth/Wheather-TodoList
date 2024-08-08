import React, { useState } from 'react'
import Form from './Form'
import Display from './Display';

export default function Todo() {
    const [todos, settodos]= useState([]);
console.log(todos);
  return (
    <div >
      <Form  add={settodos} todos={todos} />
      <Display todos={todos} del={settodos}/>
    </div>
  )
}
