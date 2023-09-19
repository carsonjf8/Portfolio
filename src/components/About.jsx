import React from 'react'
import { about } from '../constants'

const About = () => {
  return (
    <div className='pt-[80px]' id='About'>
        <p className='text-white text-[48px]'>
            About Me
        </p>
        <p className='text-gray-300 text-[18px] max-w-3xl'>
            {about}
        </p>
    </div>
  )
}

export default About