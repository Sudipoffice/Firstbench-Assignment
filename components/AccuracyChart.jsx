import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AccuracyChart = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Accuracy",
        data: [80, 50, 30, 60, 55, 40, 70],
        backgroundColor: "rgba(99, 102, 241, 1)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 0,
        borderRadius: 4,
        // Make bar width responsive
        barThickness: window.innerWidth < 768 ? 8 : 12,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to adjust height
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Slots",
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
          },
        },
        grid: {
          drawBorder: false,
        },
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 8 : 10,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Accuracy",
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
          },
        },
        ticks: {
          stepSize: 25,
          beginAtZero: true,
          font: {
            size: window.innerWidth < 768 ? 8 : 10,
          },
        },
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  const timeIntervals = ["10", "15", "30", "45"];


  return (
    <>
    <div className="flex justify-center items-center mb-[10px] gap-8 relative translate-y-4">
    <span className="bg-teal-200 w-4/5 z-0  h-2 absolute"></span>
        {["10", "15", "30", "45"].map((time, index) => (
          <span
            key={index}
            style={{
              color: index === 1 ? "#fff" : "#333",
              backgroundColor: index === 1 ? "#15b5a6" : "#f0f0f0",
            }}
            className="flex items-end rounded-md px-[14px] py-[5px]  cursor-pointer z-10"
          >
            <p className="text-base">{time}</p><p className="text-[10px] py-1">MIN</p>
          </span>
        ))}
      </div>
    <div className="w-full h-full m-0 ">
      <Bar data={data} options={options} />
    </div>
    </>
  );
};

export default AccuracyChart;



