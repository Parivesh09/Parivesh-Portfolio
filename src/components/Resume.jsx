import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SectionWrapper } from "../hoc";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";

const resumeLink = "https://drive.google.com/file/d/1ZbNz2b6qXu8hYHlYqLsYB2dJrK1v0X2R/view?usp=sharing";

const fadeIn = (
  direction = "up",
  type = "spring",
  delay = 0,
  duration = 0.75
) => ({
  initial: {
    y: direction === "up" ? 60 : -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
    },
  },
});

const ResumeSection = ({ title, children }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.5, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card mb-8"
  >
    <div className="bg-gray-800 rounded-[20px] py-5 px-8 flex flex-col">
      <h3 className="text-white text-[22px] font-bold mb-4">{title}</h3>
      <div className="border-l-2 pl-4 border-pink-500 text-gray-300">
        {children}
      </div>
    </div>
  </motion.div>
);

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900 text-white min-h-screen relative">
      {/* Header Section */}
      
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">PARIVESH RIMJHA</h1>
        <div className="flex justify-center gap-6 text-gray-400">
          <a
            href="mailto:pariveshrimjha20494@acropolis.in"
            className="text-pink-400 hover:text-white text-2xl"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/parivesh-rimjha-672a1b206"
            className="text-pink-400 hover:text-white text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Parivesh09"
            className="text-pink-400 hover:text-white text-2xl"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-gray-400 mt-4">Mobile: +919302998876</p>
      </header>

      {/* Career Objective */}
      <ResumeSection title="Career Objective">
        <p>
          To leverage my skills, creativity, and potential in a dynamic
          environment, contributing to organizational growth while exploring new
          opportunities for personal and professional development.
        </p>
      </ResumeSection>

      {/* Education Section */}
      <ResumeSection title="Education">
        <div className="mb-4">
          <h4 className="text-pink-400 text-[18px] font-bold">
            Acropolis Institute of Technology And Research, RGPV Indore, India
          </h4>
          <p>
            Bachelor of Computer Science and Engineering (AIML); CGPA 7.72/10
          </p>
          <p className="text-gray-500">Jun 2020 - May 2024</p>
        </div>
        <div className="mb-4">
          <h4 className="text-pink-400 text-[18px] font-bold">
            Saint Vincent Pallotti School, Indore, India
          </h4>
          <p>Higher Secondary (12th CBSE Board): 85.40%</p>
          <p className="text-gray-500">Jun 2019 - May 2020</p>
        </div>
        <div className="mb-4">
          <h4 className="text-pink-400 text-[18px] font-bold">
            Saint Vincent Pallotti School, Indore, India
          </h4>
          <p>Higher Secondary (10th CBSE Board): 77.60%</p>
          <p className="text-gray-500">Jun 2017 - May 2018</p>
        </div>
      </ResumeSection>

      {/* Skills Section */}
      <ResumeSection title="Skills">
        <p>C++, DSA, OOPs, ReactJS, NodeJs, Python, Machine Learning</p>
      </ResumeSection>

      {/* Projects & Internships Section */}
      <ResumeSection title="Projects & Internships">
        <div className="mb-4">
          <h4 className="text-pink-400 text-[18px] font-bold">
            Minor Project: Transferring Ethereum through blockchain
          </h4>
          <p>Organization: Acropolis Institute of Technology and Research</p>
          <p className="text-gray-500">Duration: 3 months</p>
          <p>Role: Frontend Developer (ReactJS)</p>
        </div>
        <div className="mb-4">
          <h4 className="text-pink-400 text-[18px] font-bold">
            Personal Project: Level-Gym Website
          </h4>
          <p>Description: It is a single page website</p>
          <p>Role: Frontend Developer (ReactJS)</p>
        </div>
        <div className="mb-4">
          <h4 className="text-pink-400 text-[18px] font-bold">
            Internship at Softcoded Pvt Ltd
          </h4>
          <p>Role: React and Node.js Developer</p>
          <p className="text-gray-500">Duration: 3 months</p>
        </div>
      </ResumeSection>

      {/* Strengths & Hobbies Section */}
      <ResumeSection title="Strengths & Hobbies">
        <p>
          <strong>Strengths:</strong> Detail-oriented, Initiative
        </p>
        <p>
          <strong>Hobbies:</strong> Basketball, Traveling, Gaming
        </p>
      </ResumeSection>

      {/* Personal Details Section */}
      <ResumeSection title="Personal Details">
        <p>
          <strong>Date of Birth:</strong> 09th September 2002
        </p>
        <p>
          <strong>Gender:</strong> Male
        </p>
        <p>
          <strong>Nationality:</strong> Indian
        </p>
        <p>
          <strong>Marital Status:</strong> Unmarried
        </p>
        <p>
          <strong>Languages Known:</strong> Hindi, English
        </p>
        <p>
          <strong>Mother Tongue:</strong> Hindi
        </p>
        <p>
          <strong>Father’s Name:</strong> Mr. Manish Rimjha
        </p>
      </ResumeSection>

      {/* References */}
      <ResumeSection title="References">
        <p>
          Prof. Namrata Tapaswi, HOD of AIML department, Acropolis Institute Of
          Technology And Research
        </p>
      </ResumeSection>

      {/* Declaration */}
      <section className="text-center mt-8">
        <p className="text-gray-400 italic">
          I hereby declare that the information furnished above is true to the
          best of my knowledge.
        </p>
        <p className="text-gray-400 mt-4">Place: Indore</p>
        <p className="text-pink-400 mt-4 font-bold">PARIVESH RIMJHA</p>
      </section>
      
      <Link
        to="https://aqua-anestassia-14.tiiny.site"
        target="_blank"
        className="text-center w-1/3 mx-auto text-white bg-green-500 hover:bg-green-700 px-4 py-2 
        rounded shadow-lg flex"
      >
        <span className="font-bold w-full flex items-center justify-center gap-1">
          Download PDF
        <BsDownload size={20} className="" />
          </span>
      </Link>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
