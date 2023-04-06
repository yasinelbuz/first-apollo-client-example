import { Routes, Route, Link } from "react-router-dom";
import RocketsList from "./components/rockets";
import RocketDetails from "./components/rocketDetails";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<RocketsList />} />
				<Route path='/rocketDetails/:id' element={<RocketDetails />} />
			</Routes>
		</>
	);
}

export default App;
