import React from "react";
import { students } from "../data/students";

const TotalStudents = () => {
  return (
    <div className="min-h-screen py-6 px-4">
      <div className="container">
        <div>
          <h1 className="text-3xl font-bold w-full text-center text-gray-800">
            Welcome back, Student Details
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-xl mx-auto mt-20">
          {students.map((student) => (
            <div
              key={student.id}
              className="relative flex flex-col rounded-lg bg-white shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <div className="h-full w-full">
                <div className="relative w-full flex justify-center">
                  <img
                    src={student.image} // Corrected image reference
                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                    alt={`${student.first_name} ${student.last_name}`} // Updated alt text
                  />
                </div>
                <div className="mt-20 text-center">
                  <h3 className="text-2xl text-slate-700 font-bold leading-normal mt-24">
                    {`${student.first_name} ${student.last_name}`}{" "}
                    {/* Updated to display full name */}
                  </h3>
                  <div className="w-full text-center mt-2">
                    <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                      <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                          {student.attendance.May}{" "}
                          {/* Example: Display May attendance */}
                        </span>
                        <span className="text-sm text-slate-400">
                          Attendance
                        </span>
                      </div>
                      <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                          {student.marks.math}{" "}
                          {/* Example: Display Math marks */}
                        </span>
                        <span className="text-sm text-slate-400">Marks</span>
                      </div>
                      <div className="p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                          {student.activity_progress.May}{" "}
                          {/* Example: Display May activity progress */}
                        </span>
                        <span className="text-sm text-slate-400">
                          Performance
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs mt-4 mb-2 text-slate-400 font-bold uppercase">
                    <button className="text-blue-500 hover:text-blue-600 px-4 py-2 border border-blue-500 rounded-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalStudents;
