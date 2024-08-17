import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import PieChart2 from './components/PieChart2';
import { UserData,UserData2, apiUrl } from './Data';

function App() {
	const [loading, setLoading] = useState(true)
	const [label, setLabel] = useState('')
	const [userData, setUserData] = useState()

	useEffect(()=>{
		
	fetchData()
	},[])

	async function fetchData() {
		setUserData(UserData)
		setLoading(false)
		// try {
		// 	const response = await axios.get(`${apiUrl}/data/`, {});
		// 	//console.log(response.data)
		// 	setUserData(response.data);
		// 	setLoading(false)
		// 	setLabel('')
		// } catch (error) {
		// 	console.error('Error fetching data:', error);
		// }
	}

	async function fetchSingleData(id) {
		//setUserData(UserData2)
		// try {
		// 	setLoading(true)
		// 	const response = await axios.get(`${apiUrl}/data/${id}`);
		// 	console.log(response.data)
		// 	setUserData(response.data);
		// 	setLoading(false)
		// } catch (error) {
		// 	console.error('Error fetching data:', error);
		// 	setLoading(false)
		// 	setLabel('')
		// }
		setUserData(UserData2)
		setLoading(false)
	}

	const handlePieChartClick = (data) => {
		//console.log(data);
		setLabel(data.label)
		fetchSingleData(data.catId);
		// setUserData(UserData2)
	
	};

	const RefreshData = ()=>{
		//console.log('Refreshed')
		fetchData()
	}
 

	return (
		<>
			{
				loading ? <h1>Please wait...</h1> : 
				<div className="App">
				{label !== '' ? <h1>{label}'s Category</h1>: <h1>All Categories</h1>}
			<div style={{ width: 400}}>
				<PieChart data={userData} onClick={handlePieChartClick} />
			</div>

			<div style={{ width: 400, marginTop: 80 }}>
				<PieChart2 data={userData} />
			</div>

			<div style={{ width: 400 }}>
				<BarChart data={userData} />
			</div>
			<div style={{marginTop:80}}>
				<button onClick={RefreshData}>Refresh Chart</button>
			</div>
		</div>
			}
		</>
	);
}

export default App;
