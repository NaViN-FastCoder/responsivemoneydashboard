import React from 'react'
import { Doughnut  } from "react-chartjs-2";
import './PieChart.css'
function PieChart() {

    const labels = ["35%", "65%", "10%"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Monthly Earning",
        backgroundColor: ["silver","blue","pink"],
        borderColor: "silver",
        data: [35,65,10],
        borderWidth:0,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        display: false, // Hide the x-axis
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
     
      centerText: {
        display: true,
        text: 'Center Text', // Text to display in the center
        color: '#000', // Text color
        fontStyle: 'bold', // Text style
        sidePadding: 15, // Padding from the doughnut
      },
    },
  };
  return (
    <div className='chart-container'>
      <Doughnut  data={data} options={options} />
      <div className='percentage'>65% new customers</div>
    </div>
  )
}

export default PieChart