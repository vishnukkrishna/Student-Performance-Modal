import React from "react";
import { motion } from "framer-motion";

// Student Card Component to display each student's summary and stats
const StudentCard = ({ student, itemVariants, buttonVariants, openModal }) => {
  return (
    <motion.div
      key={student.id}
      className="relative flex flex-col rounded-lg bg-white mb-6 shadow-2xl p-6 hover:shadow-2xl hover:scale-[2.04] hover:rotate-1 hover:bg-gray-50 transition-all duration-700 ease-in-out"
      variants={itemVariants}
    >
      {/* Student Image */}
      <div className="relative w-full flex justify-center">
        <img
          src={student.image}
          className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
          alt={`${student.first_name} ${student.last_name}`}
        />
      </div>

      {/* Student Information */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl text-slate-700 font-bold leading-normal">
          {`${student.first_name} ${student.last_name}`}
        </h3>
        <p className="text-gray-500 text-sm">{student.class}th</p>

        {/* Display Attendance, Marks, and Performance Stats */}
        <div className="w-full text-center">
          <div className="flex justify-center lg:pt-4 pt-2 pb-0">
            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                {student.attendance.May}
              </span>
              <span className="text-sm text-slate-400">Attendance</span>
            </div>
            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                {student.marks.math}
              </span>
              <span className="text-sm text-slate-400">Marks</span>
            </div>
            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                {student.activity_progress.May}
              </span>
              <span className="text-sm text-slate-400">Performance</span>
            </div>
          </div>
        </div>

        {/* Button to open the student details modal */}
        <div className="mt-4">
          <motion.button
            className="group relative h-10 w-36 overflow-hidden rounded-2xl bg-[#334151] text-lg font-bold text-white"
            variants={buttonVariants}
            onClick={() => openModal(student)}
            whileHover="hover"
            whileTap="tap"
          >
            View Details
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentCard;
