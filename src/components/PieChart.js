import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const PieChart = ({ data, onClick }) => {
	//const [id, setId]= useState()
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
		//console.log(data)
		const labels = data.map((item) => item.category);
		const id = data.map((item)=> item.id)
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
			id

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
			//console.log(elements[0])
			const label = chartData.labels[index];
			const catId = chartData.id[index] 
			//console.log(chartData.id[index])
			//const value = chartData.datasets[0].data[index];
			onClick({label, catId });
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
