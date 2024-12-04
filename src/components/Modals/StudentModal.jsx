import React from "react";
import { SlClose } from "react-icons/sl";
import { motion } from "framer-motion";

const StudentModal = ({ student, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center w-screen z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl mx-4 sm:mx-6">
          <div className="pb-10">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              <SlClose className="w-6 h-6" />
            </button>
          </div>
          {/* Image, Details, Personal Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-6 space-y-6 sm:space-y-0">
            {/* Image Section */}
            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="flex-2 text-left sm:text-center">
              <h3 className="text-2xl font-semibold text-gray-800">
                {student?.name || "John Doe"}
              </h3>
              <p className="text-gray-600">
                Class: {student?.class || "10th Grade"}
              </p>
              <p className="text-gray-600">Age: {student?.age || "16"}</p>
            </div>

            {/* Personal Details Section */}
            <div className="text-left sm:text-center">
              <h4 className="text-xl font-semibold text-gray-800">
                Personal Info
              </h4>
              <p className="text-gray-600">
                Email: {student?.email || "john.doe@example.com"}
              </p>
              <p className="text-gray-600">
                Phone: {student?.phone || "123-456-7890"}
              </p>
            </div>
          </div>

          <div className="container mx-auto py-14 lg:px-20 xl:px-32 w-full">
            {/* Card Section */}
            <div className="flex flex-wrap justify-center gap-8">
              {["qq", "qq", "qq"].map((item, index) => (
                <div
                  key={index}
                  className="max-w-xs border border-gray-200 shadow-lg rounded-lg p-6 bg-white"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Item Image"
                      className="w-20 h-20 rounded-full border-4 border-indigo-100 mb-4"
                    />
                    <h2 className="text-xl font-medium text-gray-700 mb-1">
                      {item}
                    </h2>
                    <p className="text-sm text-indigo-500 mb-4">88</p>
                    <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                      <img
                        src="https://via.placeholder.com/20"
                        alt="Star"
                        className="w-5 h-5"
                      />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">ww</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentModal;
