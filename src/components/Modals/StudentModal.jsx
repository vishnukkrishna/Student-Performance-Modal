import React from "react";
import { SlClose } from "react-icons/sl";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Registering necessary Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import PieChart from "../Charts/PieChart";
import BarChart from "../Charts/BarChart";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const StudentModal = ({ student, isOpen, closeModal }) => {
  // If modal is not open, return null (do not render)
  if (!isOpen) return null;

  // Framer Motion Variants for Modal and Backdrop Animation
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring" },
    },
    exit: { y: "100vh", opacity: 0 },
  };

  // Prepare data for Bar Chart
  const labels = Object.keys(student?.marks || {}).map(
    (key) => key.charAt(0).toUpperCase() + key.slice(1)
  );
  const marksData = Object.values(student?.marks || {});

  const barData = {
    labels,
    datasets: [
      {
        label: `${student.first_name} ${student.last_name} - Marks out of 100`,
        data: marksData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Red
          "rgba(54, 162, 235, 0.6)", // Blue
          "rgba(255, 206, 86, 0.6)", // Yellow
          "rgba(75, 192, 192, 0.6)", // Green
          "rgba(153, 102, 255, 0.6)", // Purple
          "rgba(255, 159, 64, 0.6)", // Orange
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Red
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 206, 86, 1)", // Yellow
          "rgba(75, 192, 192, 1)", // Green
          "rgba(153, 102, 255, 1)", // Purple
          "rgba(255, 159, 64, 1)", // Orange
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Student Marks (Out of 100)",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "black",
      },
    },
    scales: {
      x: { beginAtZero: true, max: 100 },
    },
  };

  // Prepare data for Pie Chart (Attendance Data)
  const pieLabels = Object.keys(student.attendance);
  const pieData = {
    labels: pieLabels,
    datasets: [
      {
        label: "Attendance Percentage",
        data: Object.values(student.attendance).map((value) =>
          parseFloat(value)
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Monthly Attendance Percentage",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "black",
      },
    },
  };

  // Calculate overall marks progress score (average of all marks)
  const marks = Object.values(student?.marks || {});
  const overallMarksProgress =
    marks.length > 0
      ? marks.reduce((total, mark) => total + mark, 0) / marks.length
      : 0;

  // Calculate activity progress for the circular chart (average progress)
  const activityProgress = student?.activity_progress || {};
  const progressLabels = Object.keys(activityProgress);
  const progressData = Object.values(activityProgress).map((val) =>
    parseFloat(val)
  );

  const overallProgress =
    progressData.length > 0
      ? progressData.reduce((sum, value) => sum + value, 0) /
        progressData.length
      : 0;

  return (
    <motion.div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center w-screen z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backdropVariants}
    >
      <motion.div
        className="relative bg-[#334151] p-6 rounded-xl shadow-lg w-full max-w-5xl mx-4 sm:mx-6 flex flex-col gap-[10px]"
        variants={modalVariants}
      >
        <button
          className="absolute top-4 right-4 sm:top-2 sm:right-2 outline-double bg-gray-700 text-white hover:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition duration-300 group"
          onClick={closeModal}
        >
          <SlClose className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,30%] gap-[15px]">
          {/* Student Info Section */}
          <div className="flex flex-col md:flex-row gap-[30px] bg-[#A5AEA6] rounded-[12px] p-[10px]">
            <div className="flex flex-shrink-0 justify-center items-center mb-4 md:mb-0">
              <img
                src={student?.image}
                alt="Student Image"
                className="rounded-full w-[150px] h-[150px] object-cover mx-auto md:mx-0"
              />
            </div>
            <div className="flex flex-col w-full justify-between gap-[2px]">
              <div className="p-4">
                <h2 className="font-bold text-lg uppercase text-center md:text-left">
                  {student?.first_name} {student?.last_name}
                </h2>
                {/* Student Info */}
                <div className="flex flex-col md:flex-row mt-1 sm:mt-4 lg:mt-4">
                  <div className="flex flex-col w-full md:w-1/2">
                    <p className="text-gray-800">
                      Age:{" "}
                      <span className="font-semibold text-gray-900">
                        {student?.age}
                      </span>
                    </p>
                    <p className="text-gray-800">
                      Gender:{" "}
                      <span className="font-semibold text-gray-900">
                        {student?.gender}
                      </span>
                    </p>
                    <p className="text-gray-800">
                      Class:{" "}
                      <span className="font-semibold text-gray-900">
                        {student?.class}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <p className="text-gray-800">
                      Father name:{" "}
                      <span className="font-semibold text-gray-900">
                        {student?.parental_information?.father?.name}
                      </span>
                    </p>
                    <p className="text-gray-800">
                      Mother name:{" "}
                      <span className="font-semibold text-gray-900">
                        {student?.parental_information?.mother?.name}
                      </span>
                    </p>
                    <p className="text-gray-800">
                      Phone no:{" "}
                      <span className="font-semibold text-gray-900">
                        {student?.parental_information?.father?.contact}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* Buttons for Certificate and Score Card */}
              <div className="flex flex-row gap-[10px] mt-1 justify-around">
                <motion.button
                  className="group relative h-10 w-32 overflow-hidden rounded-2xl bg-[#334151] text-base font-bold text-white"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Certificate
                </motion.button>
                <motion.button
                  className="group relative h-10 w-32 overflow-hidden rounded-2xl bg-[#334151] text-base font-bold text-white"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Score Card
                </motion.button>
              </div>
            </div>
          </div>

          {/* Overall Performance Section */}
          <div className="bg-[#A5AEA6] rounded-[8px] p-6 flex flex-col items-center">
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
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
          {/* Pie Chart */}
          <PieChart data={pieData} options={pieOptions} />

          {/* Bar Chart */}
          <BarChart data={barData} options={barOptions} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StudentModal;
