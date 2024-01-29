import React, { useState } from 'react'

const Form = (props) => {

  const { addHandler } = props;

  const [text, setText] = useState('')
  const [priority, setPriority] = useState(1)

  function textChange(e) {
    console.log(e.target.value)
    setText(e.target.value)
  }
  
  function priorityChange(e) {
    console.log(e.target.value)
    setPriority(e.target.value)
  }


  function submitHandler(e) {
    e.preventDefault()
    
    const newTask = {
      id: Math.random() * 1000000000000000 + 4,
      text,
      priority
    }

    addHandler(newTask)

  }

  return (
    <form onSubmit={submitHandler} className='m-4'>
      <h1 className='text-xl'>Add Task</h1>
      Priority: <input
        type="number"
        placeholder="Add Priority..."
        value={priority}
        onChange={priorityChange}
        className='m-4'
      />
     Task: <input
        type="text"
        placeholder="Add Task..."
        value={text}
        onChange={textChange}
        className='m-4'
      />
      {text.length !== 0  &&  <button
        type='submit'
        className='bg-pink-600 p-2 rounded-lg'
      > Add 
      </button>}
    </form>
  )
}

export default Form
