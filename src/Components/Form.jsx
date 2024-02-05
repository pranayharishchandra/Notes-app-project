import React, { useContext, useEffect, useState } from 'react'
import TaskContext from '../context/ListContext';

const Form = (props) => {

  // const { 
  //   // addHandler, 
  //   //  dark,
  //   //  idEdit,
  //   //  editText, 
  //   //  editPriority 
  //   } = props;

  const { 
    dark,
    addHandler,
    idEdit,
    editPriority, 
    editText,
    filterText,
    setFilterText
  } = useContext(TaskContext)

  const [text, setText] = useState('');
  const [priority, setPriority] = useState(1);

  useEffect(() => {
    setText(editText)
    setPriority(editPriority)
  },[idEdit, editText, editPriority])


  function textChange(e) {
    setText(e.target.value)
  }

  function priorityChange(e) {
    setPriority(e.target.value)
  }

  function filterTextChangeHandler(e) {
    setFilterText(e.target.value)
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

      {/* <h1 className={'text-xl ' + (dark && 'text-white flex-wrap')}>Add Task</h1> */}
      <div className='flex justify-evenly align-baseline flex-wrap'>

      <div className='flex align-baseline'>
          <h2 className={'m-2 ' + (dark && 'text-white')}>Filter:</h2>
          <input
            type="text"
            placeholder="Filter..."
            value={filterText}
            onChange={filterTextChangeHandler}
            className='my-auto mx-4 w-auto rounded-md p-1'
          />
        </div>

        <div className='flex align-baseline'>
          <h1 className={'text-xl m-2 ' + (dark && 'text-white')}>ADD TASKS:</h1>
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
          {text?.length !== 0 && <button
            type='submit'
            className={'bg-pink-600 px-2 rounded-lg h-12 w-auto ' + (text?.length === 0 && 'hidden')}
          > {idEdit?'Update':'Add'}
          </button>}
        </div>

      </div>
    </form>
  )
}

export default Form
