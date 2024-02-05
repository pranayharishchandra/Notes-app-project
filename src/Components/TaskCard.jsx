import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import TaskContext from '../context/ListContext';

const TaskCard = (props) => {
  const {
    id,
    text,
    priority,
    // editTextHandler, 
    // deleteHandler 
  } = props;

  const {
    deleteHandler,
    editTextHandler,
    readMore, setReadMore
  } = useContext(TaskContext)

 // const [expand, setExpand] = useState(false)

 const expand = id === readMore

 function expandHandler() {
   setReadMore(expand ? null : id)
   // setExpand(readMore === id ? true : false)
 }


  return (
    <div className='flex-col bg-blue-600 rounded-md p-2 m-3'>
      <div className='flex justify-evenly items-center p-3 m-3 bg-blue-600  border-b border-white-500'>

        <div className='bg-red-500 m-1 p-1 h-10 w-10 rounded-md flex justify-center items-center'>
          <h2 className='text-center text-white'>{priority}</h2>
        </div>
        <div className='h-auto mx-auto my-1 flex'>

          <div className='bg-pink-600 m-1 px-7 py-1 rounded-md flex justify-center items-center text-white'>
            {text}
          </div>

        </div>

        <div className='flex'>
          <button
            onClick={() => editTextHandler(id, text, priority)}
            className='bg-green-300 h-10 m-0.5 p-1 rounded-md flex justify-center items-center  w-10'
          >
            <FontAwesomeIcon icon={faPen} />
          </button>

          <button
            onClick={() => deleteHandler(id)}
            className='bg-red-500 h-10 w-10 m-0.5 p-1 rounded-md flex justify-center items-center'
          >
            <FontAwesomeIcon icon={faTrash} className='text-white' />
          </button>
          
          <button
            onClick={() => expandHandler(id)}
            className='bg-yellow-200 h-10 w-10 m-0.5 p-1 rounded-md flex justify-center items-center'
          >
            <FontAwesomeIcon icon={expand ? faMinus : faAdd} className='text-black scale-125' />

          </button>

        </div>

      </div>
      { expand && <div className='m-2 bg-pink-300 rounded-lg p-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam repellendus voluptatum vero. Explicabo excepturi ratione omnis beatae assumenda nobis in quisquam illum unde quae earum harum placeat, accusamus voluptatum.
      </div>}
    </div>
  );
};

export default TaskCard;
