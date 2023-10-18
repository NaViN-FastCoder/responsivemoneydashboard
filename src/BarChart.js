import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import './BarChart.css'
const BarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Monthly Earning",
        backgroundColor: "blue",
        borderColor: "silver",
        data: [0, 10, 5, 2, 20, 30, 45],
        borderWidth:0,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        display: true, 
      },
      y: {
        display: false, 
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
  };
  return (
    
    <div className='chart-container'>
      <Bar data={data} options={options} className='bardata'/>
    </div>
    
  );
};

export default BarChart;