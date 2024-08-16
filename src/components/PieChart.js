import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const PieChart = ({ data, onClick }) => {
	const [chartData, setChartData] = useState({
		labels: [],
		datasets: [
			{
				data: [],
				backgroundColor: [],
				//hoverBackgroundColor: [],
			},
		],
	});

	useEffect(() => {
		const labels = data.map((item) => item.name);
		const dataValues = data.map((item) => 1); // assuming each item has a value of 1
		//const backgroundColors = data.map((item) => getRandomColor());
		//const hoverBackgroundColors = data.map((item) => getRandomColor());

		setChartData({
			labels,
			datasets: [
				{
					data: dataValues,
					backgroundColor: ['#FF6384', '#36A2EB'],
					//hoverBackgroundColor: hoverBackgroundColors,
				},
			],
		});
	}, [data]);

	// const getRandomColor = () => {
	// 	const letters = '0123456789ABCDEF';
	// 	let color = '#';
	// 	for (let i = 0; i < 6; i++) {
	// 		color += letters[Math.floor(Math.random() * 16)];
	// 	}
	// 	return color;
	// };

	const handleChartClick = (event, elements) => {
		if (elements.length > 0) {
			const index = elements[0].index;
			const label = chartData.labels[index];
			//const value = chartData.datasets[0].data[index];
			onClick({ index, label });
		}
	};

	return (
		<div>
			<Pie
				data={chartData}
				options={{
					onClick: handleChartClick,
				}}
			/>
		</div>
	);
};

export default PieChart;
