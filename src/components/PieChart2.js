// PieChart2.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart2 = ({ data }) => {
  //console.log(data)
  const chartData = {
    labels: data.map(item => item.category),
    datasets: [{
      data: data.map(item => item.value1),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    }],
  };

  return (
    <div>
      <div width={400} height={400}>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default PieChart2;