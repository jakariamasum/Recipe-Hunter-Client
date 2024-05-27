import React from "react";
import { FaGraduationCap, FaBriefcase, FaLaptopCode } from "react-icons/fa";

const DevInfo = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          Developer Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-gray-50 rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <FaGraduationCap className="text-5xl text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Educational Background
            </h3>
            <p className="text-gray-600 text-center">
              Bachelor's Degree in Information and Communication Technology from
              Islamic University, Bangladesh . Completed various courses in
              software development, data structures, and algorithms.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <FaBriefcase className="text-5xl text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Experience
            </h3>
            <p className="text-gray-600 text-center">
              1+ years of experience in full-stack web development. Worked on
              various projects using React, Node.js, Express, and MongoDB.
              Proven track record in building scalable web applications.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <FaLaptopCode className="text-5xl text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Technologies
            </h3>
            <p className="text-gray-600 text-center">
              Proficient in JavaScript, React, Node.js, Express, MongoDB, HTML,
              CSS, Tailwind CSS, and more. Passionate about learning new
              technologies and improving coding skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevInfo;
