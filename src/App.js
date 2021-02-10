import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddForm from './components/AddForm';

function App() {
	const [
		players,
		setPlayers
	] = useState([]);

	const handleRemovePlayer = (name) => {
		setPlayers((prevState) => {
			return prevState.filter((player) => player !== name);
		});
	};

	const addPlayer = (playerToBe) => {
		console.log(players);
		setPlayers([
			...players,
			playerToBe
		]);
	};

	return (
		<div className='scoreboard'>
			<Header title='Scoreboard' totalPlayers={players.length} />
			{players.length >= 1 ? (
				players.map((player) => <Player key={player} name={player} removePlayer={handleRemovePlayer} />)
			) : (
				<p style={style}>Sorry, no players have been added 🙇🏻‍♂️!</p>
			)}
			<AddForm currentPlayers={players} onAdd={addPlayer} />
		</div>
	);
}

const style = {
	display: 'flex',
	justifyContent: 'center',
	fontWeight: 'bold'
};

export default App;
