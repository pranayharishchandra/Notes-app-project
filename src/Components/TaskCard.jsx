import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskCard = (props) => {
  const { id, text, priority, editTextHandler, deleteHandler } = props;

  return (
    <div className='flex justify-evenly p-3 m-1 bg-blue-400 shadow-md shadow-pink-500 border-b-4'>
      <div className='bg-red-500 m-1 p-1 w-10 rounded-md flex justify-center items-center'>
        <h2 className='text-center text-white'>{priority}</h2>
      </div>
      <div className='h-10 mx-auto my-1 flex'>

        <div className='bg-pink-300 m-1 px-10 rounded-md flex justify-center items-center'>
          {text}
        </div>

      </div>

      <div className='flex'>
        <button
          onClick={() => editTextHandler(id)}
          className='bg-green-300 m-0.5 p-1 rounded-md flex justify-center items-center  w-10'
        >
          <FontAwesomeIcon icon={faPen} />
        </button>

        <button
          onClick={() => deleteHandler(id)}
          className='bg-red-500 w-10 m-0.5 p-1 rounded-md flex justify-center items-center'
        >
          <FontAwesomeIcon icon={faTrash} className='text-white' />
        </button>

      </div>

    </div>
  );
};

export default TaskCard;
