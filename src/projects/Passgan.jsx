import React from 'react';
import { ProjectPageWrapper } from '../hoc';
import { passganArchitecture, passganMatched, passganResidual, passganUnique, recreatedMatched, recreatedUnique } from '../assets/passgan';

const Passgan = () => {
    return (
        <div className='text-neutral-300 text-[18px]'>
            <p className='text-[48px] font-bold text-white'>PassGAN implementation, using GANs to generate password guesses</p>
            <p>Technologies used: Python, Tensorflow, Keras, GANs, Generative Deep Learning, Jupyter</p>
            <p>Click <a href="https://github.com/carsonjf8/PassGAN" target='_blank' className='text-blue-700'>here</a> for the GitHub link and project writeup.</p>
            
            <figure className='py-4 pl-8'>
                <div>
                    <img src={passganArchitecture} width='800px' height='auto' className='py-2' />
                    <img src={passganResidual} width='600px' height='auto' className='pb-2' />
                </div>
                <figcaption  className='w-[700px] h-auto text-[14px]'>
                    Diagrams of the architecture of the PassGAN model from the original paper, and that I replicated in this project.
                    The generator and discriminator each are made of 5 residual blocks and a 1D convolutional layer.
                </figcaption >
            </figure >

            <p>
                This project is an implementation of <i><a href="https://arxiv.org/abs/1709.00440" target='_blank' className='text-blue-700'>PassGAN: A Deep Learning Approach for Password Guessing</a></i>.
                This model can be used to generate password guesses to guess passwords.
                It uses a WGAN-GP architecture to learn the structure and distribution of real passwords from password leaks to be able to generate passwords that follow the same distribution.
                My work on this project was to reproduce the results that the original researchers did.
                In the original paper, the researchers presented multiple charts and graphs with their results and I reproduced them.
                Some of the reproduced results are shown in the images below.
                PassGAN is one of the first machine learning based models for generating password guesses.
                It can be used for generating guesses to crack passwords as well as generating fake passwords, called honeywords, to make a dataset less valuable if leaked because it would contain a lot of fake information.
                PassGAN is also very important in that it out-performs many popular non-machine learning based tools such as HashCat and John The Ripper.
                One of the reasons that PassGAN is able to outperform these other tools is that it is not reliant on n-gram based models.
            </p>

            <figure className='py-4 pl-8'>
                <div className='flex flex-row'>
                    <img src={passganMatched} width='500px' height='auto' className='py-2 pr-2' />
                    <img src={recreatedMatched} width='500px' height='auto' className='py-2' />
                </div>
                <figcaption className='w-[1000px] h-auto text-[14px]'>
                    The image on the left is from the PassGAN paper, and the one on the right is my reproduced results.
                    These show the number of passwords generated that match the RockYou leaked password set from a sample size of 10^8 passwords at different epochs during training.
                    My results match the original researchers or are better in all epochs.
                    These graphs show that over time, the model is getting better at generating passwords similar to the distribution of data it was being trained on.
                    It starts of with a sharp increase in matches as it learns the common ones, and then takes longer and more training to get the less common passwords.
                </figcaption>
            </figure>

            <div className='py-4 pl-8'>
                <div className='flex flex-row'>
                    <img src={passganUnique} width='500px' height='auto' className='py-2 pr-2' />
                    <img src={recreatedUnique} width='500px' height='auto' className='py-2' />
                </div>
                <p className='w-[1000px] h-auto text-[14px]'>
                    The image on the left is from the PassGAN paper, and the one on the right is my reproduced results.
                    These graphs show the number of unique passwords generated when sampling different amounts of passwords from the fully trained model.
                    My results were very similar to what the PassGAN researchers found.
                    Tracking the number of unique passwords as different sample sizes shows that as more passwords are generated, the model is producing new passwords it has not yet generated.
                    This trend is easily seen and although the rate of new passwords decreases as the simpler passwords are generated early on, a substantial amount of new passwords are generated at each new magnitude of sample size.
                </p>
            </div>
        </div>
    )
}

export default ProjectPageWrapper(Passgan);