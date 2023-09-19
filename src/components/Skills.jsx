import React from 'react';
import { techs } from '../constants';
import { motion } from 'framer-motion';
import { zoomVariant } from '../utils/motion';

const SkillCard = ({ name }) => {
    return (
        <motion.div
            variants={zoomVariant()}
            initial='initial'
            whileInView='show'
            viewport={{ once: true }}
        >
            <div className='flex rounded-full bg-gradient-to-r from-cyan-500 to-lime-500 h-12 justify-center items-center p-[2px]'>
                <div className='flex rounded-full text-white bg-slate-700 w-full h-full justify-center items-center'>
                    <p className='text-[24px] px-4 text-center align-middle whitespace-normal font-bold'>{name}</p>
                </div>
            </div>
        </motion.div>
    )
}

const Skills = () => {
    return (
        <div className='pt-[80px]' id='Skills'>
            <p className='text-white text-[48px]'>
                Skills
            </p>
            <p className='text-neutral-300 text-[18px] w-1/2'>
                These are the skills that I have axquired throughout my education, work experience, and self-teaching
            </p>

            <div className='flex flex-row flex-wrap justify-center gap-5 mt-5'>
                {techs.map((tech) => (
                    <SkillCard
                        key={`tech-${tech.name}`}
                        {...tech}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills