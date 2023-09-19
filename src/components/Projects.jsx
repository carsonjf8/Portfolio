import React from 'react';
import { projects } from '../constants';
import { motion } from 'framer-motion';
import { slideInVariant } from '../utils/motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ index, title, summary, tags, link }) => {
    return (
        <motion.div
            variants={slideInVariant(index % 2 == 0 ? 'left' : 'right')}
            initial='initial'
            whileInView='show'
            viewport={{ once: true }}
        >
            <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            >
                <Link to={`/Portfolio${link}`}>
                    <div className='rounded-2xl bg-gradient-to-r from-cyan-500 to-lime-500 justify-center items-center p-[2px] cursor-pointer'>
                        <div className='rounded-2xl text-white bg-slate-700 justify-center items-center px-3 py-1'>
                            <p className='font-bold text-[24px]'>{title}</p>
                            <p className='text-neutral-300'>{summary}</p>
                            <p className='text-neutral-300 font-bold'>{tags}</p>
                        </div>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    )
}

const Projects = () => {
  return (
    <div className='pt-[80px]' id='Projects'>
        <p className='text-white text-[48px]'>
            Projects
        </p>
        <p className='text-neutral-300 text-[18px] w-1/2'>
            This is a selection of some projects that I have worked on.
            The title, summary, and tags of each are displayed below.
            Clicking on one will provide more detailed information including the language and libraries used along with an explanation and links to the repo.
        </p>
        <div className='grid grid-cols-2 justify-center gap-10 mt-5'>
            {projects.map((project, index) => (
                <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    {...project}
                />
            ))}
        </div>
    </div>
  )
}

export default Projects
