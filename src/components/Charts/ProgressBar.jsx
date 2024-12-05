import React from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export function ProgressBar({ className = "", progressData, marks = "" }) {
  const overallMarksProgress =
    marks.length > 0
      ? marks.reduce((total, mark) => total + mark, 0) / marks.length
      : 0;
  const overallProgress =
    progressData.length > 0
      ? progressData.reduce((sum, value) => sum + value, 0) /
        progressData.length
      : 0;
  return (
    <motion.div
      className={`%{className} bg-[#adb3b9] rounded-[10px] p-6 flex-col items-center md:block hidden`}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <h3 className="font-bold text-lg text-center mb-4">
        Overall Performance
      </h3>
      <div className="flex justify-center items-center gap-6">
        {/* Attendance Circular Progress */}
        <motion.div
          className="flex flex-col justify-center items-center"
          style={{ width: "120px", height: "120px" }}
        >
          <CircularProgressbar
            value={overallProgress}
            text={`${overallProgress.toFixed(1)}%`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#4CAF50",
              trailColor: "#D3D3D3",
              strokeWidth: 10,
              textSize: "16px",
              fontWeight: "bold",
            })}
          />
          <h2 className="text-sm font-semibold mt-2">Attendance</h2>
        </motion.div>

        {/* Marks Circular Progress */}
        <motion.div
          className="flex flex-col justify-center items-center"
          style={{ width: "120px", height: "120px" }}
        >
          <CircularProgressbar
            value={overallMarksProgress}
            text={`${overallMarksProgress.toFixed(1)}%`}
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#FF6347",
              trailColor: "#D3D3D3",
              strokeWidth: 10,
              textSize: "16px",
              fontWeight: "bold",
            })}
          />
          <h2 className="text-sm font-semibold mt-2">Marks</h2>
        </motion.div>
      </div>
    </motion.div>
  );
}
