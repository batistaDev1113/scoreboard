import React, { useState } from 'react';

export default function AddForm({ currentPlayers, onAdd }) {
	const [
		player,
		setPlayer
	] = useState('');

	const submitForm = (e) => {
		e.preventDefault();
		if (!player) {
			alert('Please enter a player name....');
			return;
		}
		onAdd(player);
		console.log(currentPlayers);
	};

	return (
		<div className='add-form'>
			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setPlayer(e.target.value)}
					className='scoreboard addForm'
					type='text'
					placeholder='Player&#39;s Name'
					value={player}
				/>
				<button type='submit' className='scoreboard addPlayer-btn'>
					Add Player
				</button>
			</form>
		</div>
	);
}
