import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Resume from "./components/Resume";
import BlogSection from "./components/Blogs";

const App = () => {

  const basePath = "/Parivesh-Portfolio"
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Navbar is outside the Routes component to make it common on every page */}
        <Navbar />

        <Routes>
          {/* Define Routes for each component */}
          <Route path={basePath} element={
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Hero />
            </div>
          } />
          <Route path={`${basePath}/about`} element={<div className='relative z-0'>
            <About />
            <Tech />
            <StarsCanvas />
          </div>
          } />
          <Route path={`${basePath}/experience`} element={<Experience />} />
          
          <Route path={`${basePath}/work`} element={
            <div className='relative z-0'>
            <StarsCanvas />
            <Works />
            </div>
            } />
          <Route path={`${basePath}/resume`} element={<Resume />} />
          {/* <Route path={`${basePath}/blogs`} element={<BlogSection />} /> */}
          <Route path={`${basePath}/contact`} element={
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          } />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

