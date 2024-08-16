import { useState, useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import PieChart2 from './components/PieChart2';
import { UserData, UserData2 } from './Data';

function App() {
	const [userData, setUserData] = useState(UserData)

	useEffect(()=>{},[])
	const handlePieChartClick = (data) => {
		console.log(data.label);
		setUserData(UserData2)
	
	};

	const RefreshData = ()=>{
		//console.log('Refreshed')
		setUserData(UserData)
	}
 

	return (
		<div className="App">
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
	);
}

export default App;
