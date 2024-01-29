import React, { useEffect, useState } from 'react'

const Form = (props) => {

  const { addHandler, dark, idEdit } = props;

  console.log('idEdit ',idEdit ? idEdit : '')

  const [text, setText] = useState('');

  useEffect(() => {
    setText(idEdit)
  },[idEdit])


  const [priority, setPriority] = useState(1)

  console.log('text : ', text)


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

    const id = idEdit ? idEdit : Math.random() * 1000000000000000 + 4

    const newTask = {
      id,
      text,
      priority
    }

    addHandler(newTask)
    setText('')

  }

  return (
    <form onSubmit={submitHandler} className='m-4 '>
      <h1 className={'text-xl ' + (dark && 'text-white')}>Add Task</h1>
      <div className='flex justify-evenly align-baseline'>

        <div className='flex align-baseline'>
          <h2 className={'m-2 ' + (dark && 'text-white')}>Priority:</h2>
          <input
            type="number"
            placeholder="Add Priority..."
            value={priority}
            onChange={priorityChange}
            className='my-auto mx-4 w-auto rounded-md p-1'
          />
        </div>
        <div className='flex align-baseline justify-start'>
          <h2 className={'m-2 ' + (dark && 'text-white')}>Task:</h2>
          <input
            type="text"
            placeholder="Add Task..."
            value={text}
            onChange={textChange}
            className='my-auto mx-4 w-auto rounded-md p-1'
          />
          {text.length !== 0 && <button
            type='submit'
            className={'bg-pink-600 px-2 rounded-lg h-12 w-auto ' + (text.length === 0 && 'hidden')}
          > Add
          </button>}
        </div>
      </div>
    </form>
  )
}

export default Form
