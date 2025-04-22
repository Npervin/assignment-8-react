import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Dr. Rahman", value: 1000, fill: "#2196F3" },
  { name: "Dr. Rumana", value: 1300, fill: "#FFC107" },
  { name: "Dr. Kumar Sing", value: 1000, fill: "#2196F3" },
  { name: "Dr. Kabir Hossain", value: 1800, fill: "#00BFA5" },
  { name: "Dr. Jhankar Mahbub", value: 1300, fill: "#FFC107" },
  { name: "Dr. Samiya Sultana", value: 1600, fill: "#FF7043" },
];

const MountainShape = ({ x, y, width, height, fill }) => {
  const peakX = x + width / 2;
  const peakY = y;
  const bottomY = y + height;

  return (
    <path
      d={`
          M ${x} ${bottomY}
          C ${x + width * 0.5} ${y + height * 0.75}, 
            ${peakX - width * 0.025} ${peakY + height * 0.02}, 
            ${peakX - 5} ${peakY}
          C ${peakX + width * 0.05} ${peakY + height * 0.02}, 
            ${x + width - width * 0.75} ${y + height * 0.5}, 
            ${x + width} ${bottomY}
          Z
        `}
      fill={fill}
    />
  );
};

function CustomPeakChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" shape={<MountainShape />}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CustomPeakChart;
