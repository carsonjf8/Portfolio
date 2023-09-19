import React from 'react';
import { ProjectPageWrapper } from '../hoc';
import { separateImages, stitchedImage } from '../assets/panoramaStitching';

const PanoramaStitching = () => {
  return (
    <div className='text-neutral-300 text-[18px]'>
        <p className='text-[48px] font-bold text-white'>Panorama Stitching using RANSAC and SIFT Features</p>
        <p>Technologies used: Python, OpenCV, scikit-image, Matplotlib, SciPy, NumPy, Computer Vision, RANSAC, SIFT</p>
        <p>Click <a href="https://github.com/carsonjf8/Panorama-Stitching">here</a> for the GitHub link.</p>
        
        <figure className='py-4 pl-8'>
            <img src={separateImages} width='800px' height='auto' />
            <figcaption className='w-[500px] h-auto text-[14px]'>
                Original images, before stitching.
            </figcaption>
        </figure>

        <figure className='py-4 pl-8'>
            <img src={stitchedImage} width='800px' height='auto' />
            <figcaption className='w-[500px] h-auto text-[14px]'>
                Panorama created from two individual images.
            </figcaption>
        </figure>

        <p>
            If you are trying to take a picture of a large object, sometimes you are not able to fit the whole thing in one image.
            Creating a panorama out of multiple images is a way to display a large object in a single image.
            In order to create the panorama, the two images must be stitched together.
        </p>
        <br />

        <p>
            In order to find out how to stitch the two images must be combined, a homography must be estimated.
            A homography is a transformation of coordinates from one from to another.
            In this case, it's that transformation applied to a pixel in one of the images to the location in the other image where it belongs.
            Homographies can be estimated by taking pairs of corresponding points between the two images, and solving a matrix equation.
        </p>
        <br />

        <p>
            Pairs of points are found using <a href="https://en.wikipedia.org/wiki/Scale-invariant_feature_transform">Scale-Invariant Feature Transform</a> (SIFT) features.
            SIFT keypoints are local features in an image.
            Using the OpenCV library, I can extract the SIFT keypoints corresponding between the two images.
            Next, the best homography needs to be estimated using the pairs of keypoints.
            How good a homograqphy is, is determined by the number of inliers when a keypoint is transformed by the homography.
            A keypoint pair is an inlier if when one point is transformed by the homography, it falls within a tolerance distance from the other keypoint in the pair.
        </p>
        <br />

        <p>
            The process of finding the best homography is accomplished using <a href="https://en.wikipedia.org/wiki/Random_sample_consensus">Random Sample Consensus</a> (RANSAC).
            RANSAC works by choosing a subset of data, fitting it and calculating a homography.
            The number of inliers are calculated, and the homography with the most inliers is saved.
            This sampling, fitting, and inlier counting is continued until there is a consensus on the current best homography being the best.
        </p>
    </div>
  )
}

export default ProjectPageWrapper(PanoramaStitching);