import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

function App() {
	const [
		players,
		setPlayers
	] = useState([
		'Yunior',
		'Oscar',
		'Joe'
	]);

	const handleRemovePlayer = (name) => {
		setPlayers((prevState) => {
			return prevState.filter((player) => player !== name);
		});
	};

	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={players.length} />
			{players.map((player) => <Player key={player} name={player} removePlayer={handleRemovePlayer} />)}
		</div>
	);
}

export default App;
