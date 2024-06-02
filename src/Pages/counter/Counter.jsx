import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { Button } from "@nextui-org/react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

// Register the necessary components for Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("rgba(255, 255, 255, 1)");
  const [chartData, setChartData] = useState([0]);

  const updateBackgroundColor = (newCount) => {
    const intensity = Math.min(1, newCount / 100);
    const newColor = `rgba(${255 - 155 * intensity}, ${255 - 155 * intensity}, 255, 1)`;
    setBgColor(newColor);
  };

  const updateChartData = (newCount) => {
    setChartData([...chartData, newCount]);
  };

  const handlePlusClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateBackgroundColor(newCount);
    updateChartData(newCount);
  };

  const handleMinusClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      updateBackgroundColor(newCount);
      updateChartData(newCount);
    }
  };

  const handleResetClick = () => {
    setCount(0);
    setBgColor("rgba(255, 255, 255, 1)");
    setChartData([0]);
  };

  const chartConfig = {
    labels: Array.from({ length: chartData.length }, (_, i) => i),
    datasets: [
      {
        label: 'Count',
        data: chartData,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(75, 192, 192, 0.6)');
          gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');
          return gradient;
        },
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: bgColor }}>
      <div className="w-full max-w-screen-md p-4 rounded-lg shadow-lg bg-white bg-opacity-80 backdrop-blur-lg">
        <div className="flex justify-between mb-4">
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onClick={handleMinusClick}
          >
            <FaMinus className="text-2xl" />
          </Button>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onClick={handleResetClick}
          >
            <GrPowerReset className="text-2xl" />
          </Button>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onClick={handlePlusClick}
          >
            <FaPlus className="text-2xl" />
          </Button>
        </div>
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold">Count: {count}</h1>
        </div>
        <div className="bg-[#f4f4f5] p-4 rounded-lg shadow-lg">
          <Line data={chartConfig} options={{ maintainAspectRatio: false, responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Counter;
