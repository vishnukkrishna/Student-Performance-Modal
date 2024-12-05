// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data, options }) => {
  return (
    <div className="bg-[#adb3b9] rounded-[12px] p-[10px] flex justify-center items-center">
      <div className="w-full sm:w-[500px] sm:h-[300px] h-[250px] pt-4 mx-auto">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
