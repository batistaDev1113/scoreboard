import React, { useState } from 'react';

export default function Counter() {
	const [
		score,
		setScore
	] = useState(0);

	// decrement score
	const decrementScore = () => {
		if (score > 0) {
			// only allow if greater than zero
			setScore((prevState) => prevState - 1);
		}
	};

	// increment score
	const incrementScore = () => {
		setScore((prevState) => {
			return prevState + 1;
		});
	};

	return (
		<div className='counter'>
			<button className='counter-action decrement' onClick={decrementScore}>
				-
			</button>
			<span className='counter-score'>{score}</span>
			<button className='counter-action increment' onClick={incrementScore}>
				+
			</button>
		</div>
	);
}
