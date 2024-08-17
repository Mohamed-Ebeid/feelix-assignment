import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement} from 'chart.js';

// Assuming you're using Chart.js v3.x, most of the core functionalities are included by default.
// You might not need to explicitly register anything unless you're extending or customizing the defaults.

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarController, BarElement);



const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(item => item.category),
        datasets: [
          {
            label: '# Value 01',
            data: data.map(item => item.value1),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: '# Value 02',
            data: data.map(item => item.value2),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Values Comparison',
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
