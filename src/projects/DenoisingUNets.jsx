import React from 'react';
import { ProjectPageWrapper } from '../hoc';
import { cifar10Images, results1, results11, results21, results41, results59, unet } from '../assets/denoisingUNets';

const DenoisingUNets = () => {
  return (
    <div className='text-neutral-300 text-[18px]'>
        <p className='text-[48px] font-bold text-white'>Image Generation using Denoising U-Nets</p>
        <p>Technologies used: Python, Generative Deep Learning, TensorFlow, Keras, U-Net, NumPy, Matplotlib</p>
        <p>Click <a href="https://github.com/carsonjf8/Denoising-Diffusion-Probabilistic-Model" target='_blank' className='text-blue-700'>here</a> for the GitHub link.</p>
        
        <figure className='py-4 pl-8'>
            <img src={unet} width='600px' height='auto' />
            <figcaption className='w-[500px] h-auto text-[14px]'>
                Diagram of the architecture of the model used to generate images.
                It consists of a U-Net of four levels with residual blocks.
            </figcaption>
        </figure>

        <p>
            For this project, I started with the code from the TensorFlow tutorial on <a href="https://keras.io/examples/generative/ddpm/" target='_blank' className='text-blue-700'>Denoising Diffusion Probabilistic Models</a>.
            This model uses a diffusion process to generate images.
            Diffusion is a process where a model learns how to turn a noisy (random) image, into one that contain a coherent image.
            Using the code from the tutorial as a starting point, I modified the architecture to make it more lightweight while trying to not lose much fidelity in the generated images.
            This goal was designed so that the modified model could be run quicker and on less high-end computing components.
            U-Nets train by downsampling and then upsampling the image to learn how to reconstruct image data.
            They use skip connections and some use attention to improve the results.
        </p>

        <figure className='py-4 pl-8'>
            <img src={cifar10Images} width='500px' height='auto' />
            <figcaption className='w-[300px] h-auto text-[14px]'>
                CIFAR-10 is a dataset of image from 10 classes.
            </figcaption>
        </figure>

        <p>
            I used CIFAR-10 to train my model and present the results from various epochs below.
            I trained it for 59 epochs.
            At the beginning, it is only noise, but every 10 epochs, the results get better and clearer to the point of starting to be able to decipher what they are supposed to depict.
        </p>

        <figure className='py-4 pl-8'>
            <img src={results1} width='600px' height='auto' />
            <figcaption className='w-[500px] h-auto text-[14px]'>
                Epoch 1
            </figcaption>
        </figure>

        <figure className='py-4 pl-8'>
            <img src={results11} width='600px' height='auto' />
            <figcaption className='w-[500px] h-auto text-[14px]'>
                Epoch 11
            </figcaption>
        </figure>

        <figure className='py-4 pl-8'>
            <img src={results21} width='600px' height='auto' />
            <figcaption className='w-[500px] h-auto text-[14px]'>
                Epoch 21
            </figcaption>
        </figure>

        <figure className='py-4 pl-8'>
            <img src={results41} width='600px' height='auto' />
            <figcaption className='w-[500px] h-auto text-[14px]'>
                Epoch 41
            </figcaption>
        </figure>

        <figure className='py-4 pl-8'>
            <img src={results59} width='600px' height='auto' />
            <figcaption className='w-[500px] h-auto text-[14px]'>
                Epoch 59
            </figcaption>
        </figure>
    </div>
  )
}

export default ProjectPageWrapper(DenoisingUNets);