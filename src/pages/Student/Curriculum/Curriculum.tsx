import React from 'react'
import Statements from './Statements';
import { Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Curriculum = () => {
  return (
    <>
      <p className='text-lg font-normal py-1'>Statements & Results</p>
      <Statements />
      <p className='text-lg font-normal py-1 mt-4'>Course Registration & Materials</p>
      <div className='bg-red-900 w-full flex p-4 my-2 rounded-lg items-center gap-4'>
        <LibraryBooksIcon className='text-3xl text-white'/>
        <div className='text-white'>
          <p className='text-base font-bold'>Study Materials</p>
          <p className='text-neutral-200 text-xs'>Past exam papers, class notes and exercises.</p>
        </div>
        <div>
          <p className='bg-neutral-200 p-1 rounded-md text-xs'>Current Subject : 6</p>
        </div>
      </div>
      <div className='bg-red-900 w-full flex p-4 rounded-lg items-center gap-4'>
        <LibraryBooksIcon className='text-6xl text-white'/>
        <div className='text-white'>
          <p className='text-base font-bold'>Study Materials</p>
          <p className='text-neutral-200 text-xs'>Past exam papers, class notes and exercises.</p>
        </div>
      </div>
    </>
  )
}

export default Curriculum