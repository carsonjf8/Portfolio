import React from 'react';
import { courses } from '../constants';
import { motion } from 'framer-motion';
import { zoomVariant } from '../utils/motion';

const CourseCard = ({ name }) => {
    return (
        <div className='rounded-full bg-slate-700 mx-3 my-2'>
            <p className='text-neutral-300 text-[18px] px-4 text-center align-middle whitespace-normal font-semibold'>{name}</p>
        </div>
    )
}

const CourseTopicCard = ({ topic, courses }) => {
    return (
        <motion.div
            variants={zoomVariant()}
            initial='initial'
            whileInView='show'
            viewport={{ once: true }}
        >
            <div className='h-fit rounded-2xl justify-center items-center p-[2px] bg-gradient-to-r from-cyan-500 to-lime-500'>
                <div className='rounded-2xl bg-slate-800 justify-center items-center px-3 py-1'>
                    <p className='text-center text-white font-bold text-[28px]'>{topic}</p>
                    <div>
                        {courses.map((course) => (
                            <CourseCard
                                key={`course-${course.name}`}
                                name={course.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const Courses = () => {
    return (
        <div className='pt-[80px]' id='Courses'>
            <p className='text-white text-[48px]'>
                Courses
            </p>
            <p className='text-neutral-300 text-[18px] w-1/2'>
                This is a list of relevant courses that I have completed and excelled at throughout my schooling
            </p>

            <div className='justify-center mt-5 grid grid-cols-3 gap-x-3 gap-y-2'>
                {courses.map((courseGroup) => (
                    <CourseTopicCard
                        key={`topic-${courseGroup.topic}`}
                        topic={courseGroup.topic}
                        courses={courseGroup.courses}
                    />
                ))}
            </div>
        </div>
    )
}

export default Courses