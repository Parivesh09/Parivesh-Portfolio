import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Resume from "./components/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Navbar is outside the Routes component to make it common on every page */}
        <Navbar />
        
        <Routes>
          {/* Define Routes for each component */}
          <Route path="/" element={
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Hero />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/work" element={<Works />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={
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

