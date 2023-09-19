import React from 'react';
import { ProjectPageWrapper } from '../hoc';
import { blobDetection, cornerDetection } from '../assets/cornerBlobDetection';

const CornerBlobDetection = () => {
  return (
    <div className='text-neutral-300 text-[18px]'>
        <p className='text-[48px] font-bold text-white'>Corner and Blob Detection</p>
        <p>Technologies used: Python, OpenCV, Harris Corner Detector, Blob Detection, NumPy, Matplotlib</p>
        <p>Click <a href="https://github.com/carsonjf8/Corner-and-Blob-Detection">here</a> for the GitHub link.</p>
        
        <figure className='py-4 pl-8'>
            <img src={cornerDetection} width='400px' height='auto' />
            <figcaption className='w-[600px] h-auto text-[14px]'>
                Corner detected in the image are marked in red.
            </figcaption>
        </figure>

        <p>
            This is an implementation of the <a href="https://en.wikipedia.org/wiki/Harris_corner_detector">Harris Corner Detector</a> algorithm.
            This algorithms works by first converting an image to grayscale.
            Then the derivatives in the x and y directions are calculated.
            Then, using a defined window size and the second moment matrix which is calculated from the derivatives, determine if the corner response function for a pixel is greater than a predefined value.
            If this is true, then that pixel is added to a list of corners.
            Finally, non-max suppression is applied ot the list of corners to remove multiple corner detections in a single small area.
        </p>

        <figure className='py-4 pl-8'>
            <img src={blobDetection} width='400px' height='auto' />
            <figcaption className='w-[600px] h-auto text-[14px]'>
                Blobs that are detected in the image are marked in red.
            </figcaption>
        </figure>

        <p>
            This project also has an implementation of the <a href="https://en.wikipedia.org/wiki/Blob_detection">Blob Detector</a> algorithm.
            This algorithm is able to effectively detect blobs of various sizes and shapes in an image.
            It starts by converting the image to grayscale.
            Then, the image is scales to various sizes.
            For each scale, a Laplacian of Gaussian filter is moved throughout the image.
            The response function value for each pixel is threshholded to determine if a blob is detected or not.
            Finally, non-max suppression is applied across each scale, and overall to prevent multiple blobs from being detected in the same spot.
        </p>
    </div>
  )
}

export default ProjectPageWrapper(CornerBlobDetection);