import React from 'react';
import { ProjectPageWrapper } from '../hoc';
import { testFaces, trainFaces } from '../assets/eigenfaces';

const Eigenfaces = () => {
  return (
    <div className='text-neutral-300 text-[18px]'>
      <p className='text-[48px] font-bold text-white'>Face Recognition using Eigenfaces</p>
      <p>Technologies used: Python, OpenCV, NumPy, Eigenfaces</p>
      <p>Click <a href="https://github.com/carsonjf8/Eigenfaces">here</a> for the GitHub link.</p>
      
      <figure className='py-4 pl-8'>
        <div className='flex flex-row'>
          <img src={trainFaces} width='500px' height='auto' className='px-4' />
          <img src={testFaces} width='500px' height='auto' />
        </div>
        <figcaption className='w-[600px] h-auto text-[14px]'>
          The two sets of faces used in recognition.
          The image on the left is the set of training images, and the faces to match against are on the right.
        </figcaption>
      </figure>

      <p>
        This project uses <a href="https://en.wikipedia.org/wiki/Eigenface">eigenfaces</a> as a way to train on one set of faces, and then match those learned faces to a set of new faces.
        Eigenfaces are a way of using eigenvectors for face recognition in computer vision.
        Faces are represented as flattened vectors of the pixel colors.
        All of the vectors are then stacked together in an N x D matrix where N is the number of faces and D is the product of the width and height of the images.
        For this method to work, all images must be the same size, and the face in each image must be centered and fill the entire image.
        Once the matrix is created, the eigenvectors of the matrix are created, and the vectors are projected into a low-dimensional subspace.
        In order to recognize a face, the new image is flattened and converted to the same subspace as the training images.
        The low-dimensional vector's similarity is calculated against all the other low-dimensional training images, and classified as the face with the most similar vector.
      </p>
    </div>
  )
}

export default ProjectPageWrapper(Eigenfaces);