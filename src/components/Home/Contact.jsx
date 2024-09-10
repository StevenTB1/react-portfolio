import React from 'react'

const Contact = () => {
  return (
    <div className='border-b-2 border-neutral-500 pb-20'>
        <h1 className='bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-200 bg-clip-text text-transparent my-10 text-center text-4xl'>Contact Me</h1>
        <div className='text-center tracking-tighter'>
            <p className='mb-4'>+1 (437)213-3671</p>
            <a href="#" className='border-b'>
                s9chow@uwaterloo.ca
            </a>
            <p className='my-4'>OR</p>
            <a href="#" className='border-b'>
                stevenchow0812@gmail.com
            </a>
        </div>
    </div>
  )
}

export default Contact;
