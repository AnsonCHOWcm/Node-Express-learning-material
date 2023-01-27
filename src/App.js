import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import HomePage from './pages/HomePage';
import Notes from './pages/Notes';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='/Notes' element={<Notes/>} />
	</Routes>
	</Router>
);
}

export default App;


