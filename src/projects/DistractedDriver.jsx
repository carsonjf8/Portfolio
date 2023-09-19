import React from 'react';
import { ProjectPageWrapper } from '../hoc';
import { classCounts, cnnAArch, cnnBArch, cnnCArch, distractedDriver, multiLogLoss, openposeAnnotation, openposeImagesResults, origImagesResults } from '../assets/distractedDriver';

const DistractedDriver = () => {
  return (
    <div className='text-neutral-300 text-[18px]'>
        <p className='text-[48px] font-bold text-white'>Distracted Driver Detection using Deep Learning and Transfer Learning</p>
        <p>Technologies used: Python, TensorFlow, Keras, Transfer Learning, Jupyter, Deep Learning, OpenPose</p>        
        <p>Click <a href="https://github.com/carsonjf8/Distracted-Driver-Detection">here</a> for the GitHub link and project writeup.</p>
        
        <figure className='py-4 pl-8'>
            <img src={distractedDriver} width='300px' height='auto' />
            <figcaption className='w-[400px] h-auto text-[14px]'>
                An example of one of the images that was used to train on.
                This is an example of a distracted driver that my model was trained to detect.
            </figcaption>
        </figure>

        <p>
            This was a Kaggle competition that I competed in.
            It was sponsored by State Farm and was called the <a href="https://www.kaggle.com/competitions/state-farm-distracted-driver-detection/data">State Farm Distracted Driver Detection</a> competition.
            As I worked on this project, the competition had already ended, but I still treated it as a real competition.
        </p>
        <br />

        <p>
            In this competition, the goal is to detect whether an image depicts a distracted driver or not.
            If they are a distracted driver, it must also predict in what type of distraction the driver is participating in.
            The evaluation metric that is used is multi-class logarithmic loss.
            Using this loss function not only prioritizes making correct predictions, but also emphasizes the need to be confident in predictions.
            This increases the difficulty of this competition because the model must also be very sure in it's classifications.
        </p>

        <figure className='py-4 pl-8'>
            <img src={multiLogLoss} width='300px' height='auto' />
            <figcaption className='w-[400px] h-auto text-[14px]'>
                The equation for multi-class logarithmic loss.
            </figcaption>
        </figure>

        <p>
            The idea of this competition is to take images that appear to be from driver-facing dash cameras to determine if they are being safe drivers or not.
            The training data for this competition was a set of images of drivers either driving without being distracted or engaging in a distracting activity.
            There are a total of 10 classes, 1 being safe driving and the other 9 being different distractions.
            The distribution of examples amongst these classes are approximately equal.
        </p>

        <figure className='py-4 pl-8'>
            <img src={classCounts} width='300px' height='auto' />
            <figcaption className='w-[400px] h-auto text-[14px]'>
                The frequency of each of the classes in the training data.
            </figcaption>
        </figure>

        <p>
            I used a wide variety of both custom and pre-trained models while creating my model.
            The custom Convolutional Neural Networks (CNNs) that I designed were composed of convolutional, max-pooling, batch-normalization, and linear layers.
            In each of the three main custom CNNs, I experimented with various number of layers, adding or removing batch-normalization layers, kernel sizes, and the number of filters.
            These models were implemented using TensorFlow, and trained from scratch using the training data provided.
        </p>

        <div className='flex flex-row py-4 pl-8'>
            <figure className='px-2'>
                <img src={cnnAArch} width='300px' height='auto' />
                <figcaption className='text-[14px]'>
                    Custom CNN A architecture
                </figcaption>
            </figure>
            <figure className='px-2'>
                <img src={cnnBArch} width='300px' height='auto' />
                <figcaption className='text-[14px]'>
                    Custom CNN B architecture
                </figcaption>
            </figure>
            <figure className='px-2'>
                <img src={cnnCArch} width='300px' height='auto' />
                <figcaption className='text-[14px]'>
                    Custom CNN C architecture
                </figcaption>
            </figure>
        </div>

        <p>
            In addition, I also used transfer learning through pretrained models to see if those models would have improved scores over my custom ones.
            The three families of models that I used for transfer learning were <a href="https://arxiv.org/abs/1409.1556">VGG</a>, <a href="https://arxiv.org/abs/1512.03385">ResNet</a>, and <a href="https://arxiv.org/abs/1905.11946">EfficientNet</a>.
            For each of these transfer learning based models, I used the pretrained versions and attached some linear layers to the end to fine tune the model on the Distracted Driver training data.
            I also made sure to freeze the pretrained weights on these models so that they would not be messed up while fine tuning on my task-specific data.
            From the VGG family, I used VGG-16 and VGG-19.
            From ResNet, I used the ResNet50 and ResNet152.
            From EfficientNet, I used the B3, B4, B5, and B7 variants.
        </p>
        <br />

        <p>
            The data results for each of the models are shown in the table below.
            The score is the loss calculated using the multi-class logarithmic loss function shown above.
            This means that a lower score is prefereable, and would result in a better ranking.
            There were a total of 1438 competitors which means that our best model, EfficientNetB4, would have placed 222nd in the competition.
            This would put it in the top 15% of the leaderboard.
            I was quite happy with these results.
        </p>

        <div className='py-4 pl-8'>
            <img src={origImagesResults} width='400px' height='auto' />
            <p className='w-[500px] h-auto text-[14px]'>
                Data table of each of the models along with the score they received when submitting to Kaggle and the placement it would have received.
            </p>
        </div>

        <p>
            Another approach that was pursued, was using <a href="https://cmu-perceptual-computing-lab.github.io/openpose/web/html/doc/index.html">OpenPose</a> to analyze and preprocess the images before training the models.
            OpenPose applied annotations to the images and would predict the articulation of the head, face, body, arms, and legs.
            The models that results from training this data were not very good.
            The scoring from Kaggle was considerably worse than the models that did not use OpenPose.
            The results are shown in the table below, as well as an example of what an image looked like.
        </p>

        <div className='py-4 pl-8'>
            <img src={openposeImagesResults} width='400px' height='auto' />
            <p className='w-[500px] h-auto text-[14px]'>
                The table of results from the models that were trained with OpenPose.
            </p>
        </div>

        <div className='py-4 pl-8'>
            <img src={openposeAnnotation} width='400px' height='auto' />
            <p className='w-[500px] h-auto text-[14px]'>
                An image after being processed by OpenPose.
            </p>
        </div>
    </div>
  )
}

export default ProjectPageWrapper(DistractedDriver);