import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data, options }) => {
  return (
    <div className="bg-[#A5AEA6] rounded-xl p-4 flex justify-center items-center">
      <div style={{ width: "300px", height: "300px" }}>
        <Pie data={data} options={options} width={200} height={200} />
      </div>
    </div>
  );
};

export default PieChart;