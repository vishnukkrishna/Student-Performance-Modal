import React from "react";
import { SlClose } from "react-icons/sl";

const StudentModal = ({ student, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center w-screen z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl mx-4 sm:mx-6">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={closeModal}
            aria-label="Close Modal"
          >
            <SlClose className="w-6 h-6" />
          </button>
          {/* .................... */}
        </div>
      </div>
    </>
  );
};

export default StudentModal;
