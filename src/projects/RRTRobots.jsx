import React from 'react';
import { ProjectPageWrapper } from '../hoc';
import { omplPlan, pybulletDemo, rrt } from '../assets/rrtRobots';

const RRTRobots = () => {
  return (
    <div className='text-neutral-300 text-[18px]'>
        <p className='text-[48px] font-bold text-white'>RRT Sampling for Non-Holonomic Robotic Agents</p>
        <p>Technologies used: Python, RRT, PyBullet, OMPL, NumPy, Jupyter</p>
        <p>Click <a href="https://github.com/carsonjf8/RRT-for-Nonholonomic-Agents/tree/main" target='_blank' className='text-blue-700'>here</a> for the GitHub link.</p>
        
        <div className='py-4 pl-8'>
            <img src={rrt} width='600px' height='auto' />
            <p className='w-[600px] h-auto text-[14px]'>
                This is a diagram of how RRT sampling works.
                The left is from when only a few samples are generated, and the right shows when many sampled points are generated.
            </p>
        </div>

        <p>
            In this project, I developed a planning and physics simulation for a non-holonomic autonomous snake agent.
            I created a maze environment for the agent to travel through from one location to another.
            Then I implemented the planning algorithm using the <a href="https://ompl.kavrakilab.org/" target='_blank' className='text-blue-700'>Open Motion Planning Library (OMPL)</a>.
            OMPL is a library for motion planning while abiding by certain constraints.
            OMPL wout generate the plan following the constraints of the environment and the robots and presents the plan.
            I also used <a href="https://pybullet.org/wordpress/" target='_blank' className='text-blue-700'>PyBullet</a>, which is another library that contains physics simulations and collision detections.
            The plan is then passed to PyBullet, where it then simulates and visualizes the generated plan.
        </p>
        <br />

        <p>
            The robot in this project is a non-holonomic snake agent.
            A non-holonomic system is one in which it's state (position, angle, velocity, etc) is based on actions taken in previous states to reach the current state.
            For a snake robot, this means that from one state position, it may not be able to immediately reach another state position because the system has constraints on how it can move and turn.
            One of the other constraints for the snake agent, is the angle at with it is able to turn which presents a potential issue with when navigating corners and narrow areas.
        </p>

        <div className='py-4 pl-8'>
            <img src={omplPlan} width='500px' height='auto' />
            <p className='w-[500px] h-auto text-[14px]'>
                Visualization of the motion plan outputted from OMPL.
                The black areas are obstacles that must be avoided.
                The orange areas are buffer areas away from the obstacles that the agents tries to stay out of.
                The blue path is the motion plan.
            </p>
        </div>

        <p>
            <a href="https://en.wikipedia.org/wiki/Rapidly_exploring_random_tree" target='_blank' className='text-blue-700'>Rapidly Expanding Random Tree (RRT)</a> is a search algorithm designed to efficiently search a problem space.
            The algorithm begins by initializing a starting node.
            From there, a new node is randomly sampled and then connected to the nearest existing node.
            This node sampling and connection continues untils some end condition is met.
            This results in a very efficient method of exploring a domain.
            While the solution path is not guranteed to be optimal, it does produce quite good results.
            And in the case of my work, the produced results were about as good as I could get.
            Originally, I wanted to used an improved version of RRT called RRT*.

            RRT* is a variant where each node keeps track of it's distance from the origin node.
            When a new node is generated, instead of connecting it to the closest node, it is connected to the node with the shortest distance.
            For a holonomic system RRT* would be prefereable, however since a non-holonomic system relies on previous states to define the current state, RRT* would not work.
        </p>

        <div className='py-4 pl-8'>
            <img src={pybulletDemo} width='500px' height='auto' />
            <p className='w-[500px] h-auto text-[14px]'>
                An image from the simulation.
                The colorful blocks are the obstacles that make up the maze.
                The black spheres are a subset of the waypoints from the motion plan.
                The snake is in the middle of the maze and is made up of several small cubes.
            </p>
        </div>
        
        <p>
            The visualization of the simulation was created through using PyBullet.
            It would take in the motion plan from OMPL and use the physics engine to run it.
            It would follow the waypoints using a Proportional Derivative (PD) controller.
            PD controllers work by calculating an error between the current state and the target state.
            Corrections are made using proportional and derivate factors of this error.
        </p>
    </div>
  )
}

export default ProjectPageWrapper(RRTRobots);