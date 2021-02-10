import React from 'react';
import Counter from './Counter';
// import { GiImperialCrown } from 'react-icons/gi';

export default function Player({ name, score, removePlayer }) {
	return (
		<div className='player'>
			{/* <GiImperialCrown className='crown' /> */}
			<button className='remove-player' onClick={() => removePlayer(name)}>
				x
			</button>
			<span className='player-name'>{name}</span>

			<Counter score={score} />
		</div>
	);
}
