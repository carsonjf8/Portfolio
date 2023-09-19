const about = 'My name is Carson and I a recent graduate from George Mason University with a 4.0 GPA in Computer Science MS with a concentration in Machine Learning. '
    + 'I am very passionate and interested in the fields of Machine Learning and Artificial Intelligence. '
    + 'Throughout my schooling as well as my personal projects, I have put a focus on these areas so that I have become knowledgable in these topics. '
    + 'I have expereience with many programming languages, libraries, and tools including Python, PyTorch, Tensorflow, scikit-learn, Tableau, C/C++, Git, and many more. '
    + 'My knowledge and hands-on experience include machine learning, artificial intelligence, deep learning, data structures, training deep learning models from scratch, evaluating and comparing multiple models, implementing models from research papers, and more. '
    + 'I am in search of a position in the area of machine learning and/or artificial intelligence at a company that values, supports, and challenges its employees. '
    + 'I want to be in a position where I can provide valuable contributions, interact with other like-minded passionate developers, and continue to learn and grow. ';

const courses = [
    {
        topic: 'Machine Learning',
        courses: [
            { name: 'Machine Learning' },
            { name: 'Deep Learning' },
            { name: 'Deep Learning Generative Models' },
            { name: 'Theory and Application of Data Mining' },
        ]
    },
    {
        topic: 'Artificial Intelligence',
        courses: [
            { name: 'Advanced Artificial Intelligence' },
            { name: 'Computer Vision' },
            { name: 'Autonomous Robotics' },
            { name: 'AI and Sci-Fi Ethical Issues' },
        ]
    },
    {
        topic: 'Math',
        courses: [
            { name: 'Multivariable Calculus' },
            { name: 'Linear Algebra' },
            { name: 'Discrete Mathematics' },
            { name: 'Probability and Statistics' },
        ]
    },
    {
        topic: 'CS Fundamentals',
        courses: [
            { name: 'Analysis of Algorithms' },
            { name: 'Data Structures' },
            { name: 'Software Testing and Maintenance' },
            { name: 'Formal Methods and Models' },
            { name: 'Object Oriented Programming' },
            { name: 'Low-level Programming' },
            { name: 'Ethics and Law for Computing Professionals' },
            { name: 'Software Engineering' },
        ]
    },
    {
        topic: 'Computer Systems',
        courses: [
            { name: 'Database Systems' },
            { name: 'Concurrent and Distributed Systems' },
            { name: 'Operating Systems' },
            { name: 'Computer Systems and Programming' },
            { name: 'Secure Programming and Systems' },
        ]
    },
    {
        topic: 'Computer Graphics',
        courses: [
            { name: 'Computer Graphics' },
            { name: 'Visual Computing' },
            { name: 'Introduction to Game Design' },
        ]
    },
]

const techs = [
    {
        name: 'PyTorch',
    },
    {
        name: 'Tensorflow',
    },
    {
        name: 'scikit-learn',
    },
    {
        name: 'Python',
    },
    {
        name: 'JavaScript',
    },
    {
        name: 'Node.js',
    },
    {
        name: 'HTML',
    },
    {
        name: 'CSS',
    },
    {
        name: 'Tailwind',
    },
    {
        name: 'React.js',
    },
    {
        name: 'C/C++',
    },
    {
        name: 'C#',
    },
    {
        name: 'Java',
    },
    {
        name: 'Git',
    },
    {
        name: 'Golang',
    },
    {
        name: 'Tableau',
    },
    {
        name: 'SQL',
    },
    {
        name: 'Latex',
    },
    {
        name: 'Unity',
    },
    {
        name: 'R',
    },
]

const projects = [
    {
        title: 'Distracted Driver Detection using Deep Learning and Transfer Learning',
        summary: 'This was a Kaggle competition to train a model that was capable of detecting if a driver was distracted.'
            + 'If they were distracted, the model must also be able to identify what they are doing.'
            + 'I designed and trained multiple convolutional networks from scratch as well as using a variety of pretrained models and then fine-tuning them on the data set.'
            + 'The way the predictions were scored forced the models to not only make correct predictions, but also to be confident in the predictions made.'
            + 'This extra challenged was enforced by using the multiclass log loss to score predictions.',
        tags: 'Python, TensorFlow, Keras, Transfer Learning, Jupyter, Deep Learning, OpenPose',
        link: '/projects/distracted-driver',
    },
    {
        title: 'PassGAN implementation, using GANs to generate password guesses',
        summary: 'This is an implementation of the "PassGAN: A Deep Learning Approach for Password Guessing" paper.'
            + 'I implemented and trained the model to verify the results found in the paper.'
            + 'This model utilizes the WGAN-GP architecture.'
            + 'Each of the main results that were presented in the paper were also reproduced in this project.'
            + 'Comparing the data yielded very similar results to those found by the original researchers.',
        tags: 'Python, Tensorflow, Keras, GANs, Generative Deep Learning, Jupyter',
        link: '/projects/passgan',
    },
    {
        title: 'Image Generation using Denoising U-Nets',
        summary: 'In this project, I trained a U-Net architecture model to generate small images.'
            + 'The goal for this was to create a lightweight model that could still produce good results.'
            + 'This was trained on the cifar10 dataset to generate images that followed that distribution.',
        tags: 'Python, Generative Deep Learning, TensorFlow, Keras, U-Net, NumPy, Matplotlib',
        link: '/projects/denoising-unets',
    },
    {
        title: 'Car Racing Simulation using Genetic Algorithms',
        summary: 'This is a simulation of agent controlled cars that are rewarded for driving around a race track.'
            + 'They are trained in separate generations and the best performing ones of each generation have a higher chance of reproducing into the next generation.'
            + 'The agents are rewarded based on how far around the track they make it along with how quickly they are able to accomplish this.',
        tags: 'Python, Genetic Algorithms, NumPy, PyGame',
        link: '/projects/car-racing-genetic-alg',
    },
    {
        title: 'RRT Sampling for Non-Holonomic Robotic Agents',
        summary: 'This project uses the Open Motion Planning Library along with the PyBullet physics engine to simulate a robot navigating throughout a know area'
            + 'The agent is of a snake design and follows non-holonomic constraints.'
            + 'This means that the position and possible future actions of the agent are dependent on the path that was taken to reach the current state.'
            + 'The RRT algorithm was used here to find a path for the agent to follow.',
        tags: 'Python, RRT, PyBullet, OMPL, NumPy, Jupyter',
        link: '/projects/rrt-robots',
    },
    {
        title: 'Face Recognition using Eigenfaces',
        summary: 'Eigenfaces are a method of running facial recognition and matching without the use of machine learning.'
            + 'The algorithm works by creating a subspace for each of the faces and running similarity analysis to classify a new face against the set of known faces.'
            + 'There are some drawbacks of using eigenfaces, but if done correctly useful results can still be achieved.',
        tags: 'Python, OpenCV, NumPy, Eigenfaces',
        link: '/projects/eigenfaces',
    },
    {
        title: 'Panorama Stitching using RANSAC and SIFT Features',
        summary: 'This project takes as input two images that have some overlap, and then produces a panorama image by stitching the images together.'
            + 'Corresponding key features are detected in each image using SIFT feature extraction.'
            + 'These pairs of points are used to estimate a homography that transforms the points from one image to the other.'
            + 'Many homographies are tested using the RANSAC algorithm until a good homography is likely to have been found.',
        tags: 'Python, OpenCV, scikit-image, Matplotlib, Scipy, NumPy, Computer Vision, RANSAC, SIFT',
        link: '/projects/panorama-stitching',
    },
    {
        title: 'Corner and Blob Detection',
        summary: 'The powers of corner detection and blob detection are combined in this project.'
            + 'An image is used as input and then visualized to show a set of detected corners or blobs.'
            + 'The corner detection is performed using the Harris Corner detector.'
            + 'The blob detection is performed using the Blob Detection Algorithm.'
            + 'Both of these algorithms were implemented from scratch.',
        tags: 'Python, OpenCV, Harris Corner Detector, Blob Detection, NumPy, Matplotlib',
        link: '/projects/corner-blob-detection',
    },
]

export { about, courses, techs, projects };