import React, { useState } from 'react';

export default function AddForm({ currentPlayers, onAdd }) {
	const [
		player,
		setPlayer
	] = useState('');

	const submitForm = (e) => {
		e.preventDefault();
		if (!player) {
			
		 	return;
		 }
		onAdd(player); // send data back to main app
		setPlayer(''); // clear input
	};

	const updatePlayer = (e) => {
		setPlayer(e.target.value);
	};

	return (
		<div className='add-form'>
			<form onSubmit={submitForm}>
				<input
					onChange={updatePlayer}
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
