import React from 'react'
import Statements from './Statements';
import { Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Curriculum = () => {
  return (
    <>
      <Statements />
      <Typography className='text-lg font-normal py-1 mt-4'>Course Registration & Materials</Typography>
      <div className='bg-red-900 w-full flex p-4 my-2 rounded-lg items-center gap-4'>
        <LibraryBooksIcon className='text-3xl text-white'/>
        <div className='text-white'>
          <Typography className='text-base font-bold'>Study Materials</Typography>
          <Typography className='text-neutral-200 text-xs'>Past exam papers, class notes and exercises.</Typography>
        </div>
        <div>
          <Typography className='bg-neutral-200 p-1 rounded-md text-xs'>Current Subject : 6</Typography>
        </div>
      </div>
      <div className='bg-red-900 w-full flex p-4 rounded-lg items-center gap-4'>
        <LibraryBooksIcon className='text-6xl text-white'/>
        <div className='text-white'>
          <Typography className='text-base font-bold'>Study Materials</Typography>
          <Typography className='text-neutral-200 text-xs'>Past exam papers, class notes and exercises.</Typography>
        </div>
      </div>
    </>
  )
}

export default Curriculum