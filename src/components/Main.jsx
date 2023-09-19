import React from 'react';
import { draw } from '../utils/motion';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <div className='pt-[60px] h-screen'>
        <p
            className='ml-44 text-[96px] text-white font-bold'
        >
            Hi, I'm <span className='bg-gradient-to-r from-blue-600 via-cyan-500 to-lime-500 inline-block text-transparent bg-clip-text'>Carson</span>
        </p>
        <p className='ml-44 text-[28px] text-white'>I'm an ML/AI software developer</p>

        <div className='flex justify-center items-center'>
            <motion.svg width="800" height="600" viewBox="-75 -10 550 420" initial="hidden" animate="visible" >
                {/* input */}
                <motion.circle cx="-50" cy="50" r="20" stroke="#2563eb" variants={draw} custom={1} />
                <motion.circle cx="-50" cy="200" r="20" stroke="#2563eb" variants={draw} custom={1} />
                <motion.circle cx="-50" cy="350" r="20" stroke="#2563eb" variants={draw} custom={1} />
                
                {/* input to hidden */}
                <motion.line x1="-30" y1="50" x2="180" y2="20" stroke="#168BE0" variants={draw} custom={2} />
                <motion.line x1="-30" y1="50" x2="180" y2="140" stroke="#168BE0" variants={draw} custom={2} />
                <motion.line x1="-30" y1="50" x2="180" y2="260" stroke="#168BE0" variants={draw} custom={2} />
                <motion.line x1="-30" y1="50" x2="180" y2="380" stroke="#168BE0" variants={draw} custom={2} />

                <motion.line x1="-30" y1="200" x2="180" y2="20" stroke="#168BE0" variants={draw} custom={2} />
                <motion.line x1="-30" y1="200" x2="180" y2="140" stroke="#168BE0" variants={draw} custom={2} />
                <motion.line x1="-30" y1="200" x2="180" y2="260" stroke="#168BE0" variants={draw} custom={2} />
                <motion.line x1="-30" y1="200" x2="180" y2="380" stroke="#168BE0" variants={draw} custom={2} />

                <motion.line x1="-30" y1="350" x2="180" y2="20" stroke="#168BE0" variants={draw} custom={2} />
                <motion.line x1="-30" y1="350" x2="180" y2="140" stroke="#168BE0" variants={draw} custom={2} />
                <motion.line x1="-30" y1="350" x2="180" y2="260" stroke="#168BE0" variants={draw} custom={2} />
                <motion.line x1="-30" y1="350" x2="180" y2="380" stroke="#168BE0" variants={draw} custom={2} />

                {/* hidden */}
                <motion.circle cx="200" cy="20" r="20" stroke="#06b6d4" variants={draw} custom={3} />
                <motion.circle cx="200" cy="140" r="20" stroke="#06b6d4" variants={draw} custom={3} />
                <motion.circle cx="200" cy="260" r="20" stroke="#06b6d4" variants={draw} custom={3} />
                <motion.circle cx="200" cy="380" r="20" stroke="#06b6d4" variants={draw} custom={3} />
                
                {/* hidden to output */}
                <motion.line x1="220" y1="20" x2="430" y2="100" stroke="#33BE90" variants={draw} custom={4} />
                <motion.line x1="220" y1="20" x2="430" y2="300" stroke="#33BE90" variants={draw} custom={4} />

                <motion.line x1="220" y1="140" x2="430" y2="100" stroke="#33BE90" variants={draw} custom={4} />
                <motion.line x1="220" y1="140" x2="430" y2="300" stroke="#33BE90" variants={draw} custom={4} />

                <motion.line x1="220" y1="260" x2="430" y2="100" stroke="#33BE90" variants={draw} custom={4} />
                <motion.line x1="220" y1="260" x2="430" y2="300" stroke="#33BE90" variants={draw} custom={4} />

                <motion.line x1="220" y1="380" x2="430" y2="100" stroke="#33BE90" variants={draw} custom={4} />
                <motion.line x1="220" y1="380" x2="430" y2="300" stroke="#33BE90" variants={draw} custom={4} />

                {/* output */}
                <motion.circle cx="450" cy="100" r="20" stroke="#84cc16" variants={draw} custom={5} />
                <motion.circle cx="450" cy="300" r="20" stroke="#84cc16" variants={draw} custom={5} />
            </motion.svg>
        </div>
    </div>
  )
}

export default Main