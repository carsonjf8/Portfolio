import React from 'react';
import { ProjectPageWrapper } from '../hoc';
import { race } from '../assets/carRacingGeneticAlg';

const CarRacingGeneticAlg = () => {
  return (
    <div className='text-neutral-300 text-[18px]'>
        <p className='text-[48px] font-bold text-white'>Car Racing Simulation using Genetic Algorithms</p>
        <p>Technologies used: Python, Genetic Algorithms, NumPy, PyGame</p>
        <p>Click <a href="https://github.com/carsonjf8/Car-Racing-Genetic-Algorithm">here</a> for the GitHub link.</p>
        
        <figure className='py-4 pl-8'>
            <img src={race} width='300px' height='auto' />
            <figcaption className='w-[500px] h-auto text-[14px]'>
                Image of the agents training on the racetrack.
                It visually shows the agents of the current generation, number of agents still alive in the current generation, the generation number, the highest fitness of the current generation, and the highest fitness overall.
            </figcaption>
        </figure>

        <p>
            In this project, I wanted to experiment with using genetic algorithms to accomplish tasks.
            I implemented a racetrack with agent controlled cars that have to learn how to drive straight and make turns without running off the edge, while also emphasizing speed.
            The goal of the agents is to complete a whole lap around the entirety of the track.
            The track was designed to test the ability of the agent to make a variety of different type of turns and straights.
        </p>
        <br />
        
        <p>
            Each agent has an internal neural network that I implemented from scratch.
            Agents perceive the world by shooting out rays and know the distance before each ray hits the edge of the road.
            The neural networks takes this distance information as input and outputs an action to take (forward, left right).
            The agents are penalized a little bit each time step and are rewarded for making it farther around the track.
            If an agent makes it completely around the racetrack, it is rewarded with a big bonus.
            At the end of each generation, each agent has a probability of reproducing.
            The likelihood of them reproducing is based on their fitness score.
            A higher fitness means they are more likely to have their offspring in the next generation.
            When an offspring is created, it has a chance to mutate itself to become slightly different from its parent.
            The information that is stored and passed from one generation to the next is a set of weights that define the weights of the nodes in the neural network.
        </p>
    </div>
  )
}

export default ProjectPageWrapper(CarRacingGeneticAlg);