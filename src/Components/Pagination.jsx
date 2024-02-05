import React, { useContext } from 'react';
import TaskContext from '../context/ListContext';

const Pagination = ( ) => {

  const { currPage, totalPages, setCurrPage } = useContext(TaskContext)


  const handleNext = () => {
      setCurrPage(prev => Math.min(prev + 1, totalPages))
  }


  const handlePrev = () => {
      setCurrPage(prev => Math.max(prev - 1, 0))
  }

  const nextBg = currPage === totalPages ? 'bg-gray-700': 'bg-pink-600'
  const prevBg = currPage === 1 ? 'bg-gray-700': 'bg-pink-600'

  return (
    <div    className = 'flex my-3 justify-center w-auto items-baseline text-white'>
    <button onClick   = {handlePrev} disabled = {currPage === 1} className = {'rounded-md m-2 py-2 w-24 ' + prevBg} >
        Previous
      </button>
      <span>Page {currPage} of {totalPages}</span>
      <button onClick = {handleNext} disabled = {currPage === totalPages} className = {'rounded-md  m-2 py-2 w-24 ' + nextBg} >
        Next
      </button>
    </div>
  );
};

export default Pagination;
