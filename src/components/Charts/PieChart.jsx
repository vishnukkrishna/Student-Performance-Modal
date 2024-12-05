import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data, options }) => {
  return (
    <div className="bg-[#adb3b9] rounded-[10px] p-4 flex justify-center items-center">
      <div style={{ width: "300px", height: "300px" }}>
        <Pie data={data} options={options} width={200} height={200} />
      </div>
    </div>
  );
};

export default PieChart;
