import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Navbar, Main, About, Skills, Courses, Projects, Contact } from './components';
import { DistractedDriver, Passgan, DenoisingUNets, CarRacingGeneticAlg, RRTRobots, Eigenfaces, PanoramaStitching, CornerBlobDetection } from './projects';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-slate-950 overflow-hidden min-h-screen'>
        <Navbar />
        <div className='relative px-60'>
          <Routes>
            <Route
              path='Portfolio'
              element={
                <div>
                  <Main />
                  <About />
                  <Skills />
                  <Courses />
                  <Projects />
                  <Contact />
                </div>
              }
            />
            <Route path='/projects/distracted-driver' element={<DistractedDriver />} />
            <Route path='/projects/passgan' element={<Passgan />} />
            <Route path='/projects/denoising-unets' element={<DenoisingUNets />} />
            <Route path='/projects/car-racing-genetic-alg' element={<CarRacingGeneticAlg />} />
            <Route path='/projects/rrt-robots' element={<RRTRobots />} />
            <Route path='/projects/eigenfaces' element={<Eigenfaces />} />
            <Route path='/projects/panorama-stitching' element={<PanoramaStitching />} />
            <Route path='/projects/corner-blob-detection' element={<CornerBlobDetection />} />
            <Route path='/' element={<Navigate replace to='/Portfolio' />} />
            {/*<Route path='/Portfolio' element={<Navigate replace to='/' />} />*/}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
