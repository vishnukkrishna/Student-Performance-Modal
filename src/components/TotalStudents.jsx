import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { students } from "../data/students"; // Assuming students data is imported from a separate file
import StudentModal from "./Modals/StudentModal"; // Modal component to show student details
import headerimg from "../assets/student.png";
import StudentCard from "./StudentCard";

const TotalStudents = () => {
  // State hooks for handling the selected student, search query, and modal state
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal and display details of a selected student
  const openModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  // Get the current date to display in the header section
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Filter students based on the search query (case-insensitive)
  const filteredStudents = students.filter((student) =>
    `${student.first_name} ${student.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Animation variants for the motion components
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.div
          className="bg-gradient-to-r bg-[#334151] to-blue-50 text-gray-800 p-8 rounded-xl shadow-xl flex flex-col sm:flex-col md:flex-col lg:flex-row items-center sm:justify-between mb-8 gap-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Section: Text Content */}
          <div className="flex flex-col items-center sm:items-start space-y-4 max-w-xl w-full text-center sm:text-left">
            <p className="text-sm text-gray-100">{currentDate}</p>{" "}
            {/* Display current date */}
            <h1 className="text-4xl font-extrabold text-gray-100 tracking-tight leading-tight">
              Welcome<span className="mx-2">Back!</span> Explore Student Details
            </h1>
            <p className="text-lg text-gray-100">
              Track attendance, grades, and performance easily in the portal.
            </p>
          </div>

          {/* Center Section: Image */}
          <motion.div
            className="w-56 h-56 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={headerimg}
              alt="Students"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="flex items-center justify-center w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex w-full sm:max-w-[400px] rounded-full border border-gray-400 bg-gray-100 px-4 py-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-transparent px-2 text-gray-700 outline-none"
                placeholder="Search student name or details"
              />
              <button
                type="submit"
                className="rounded-full bg-transparent px-2 py-1"
              >
                <CiSearch size={22} /> {/* Search icon */}
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Student Cards Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl mx-auto mt-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Check if there are any filtered students */}
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <StudentCard
                key={index}
                student={student}
                itemVariants={itemVariants}
                buttonVariants={buttonVariants}
                openModal={openModal}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No students found. Try searching with a different name.
            </p>
          )}
        </motion.div>
      </div>

      {/* Render the modal if it's open */}
      <div className="w-full">
        {isModalOpen && (
          <StudentModal
            student={selectedStudent}
            isOpen={isModalOpen}
            closeModal={closeModal} // Close modal function
          />
        )}
      </div>
    </div>
  );
};

export default TotalStudents;
