import React, { useState, useEffect } from "react";

export default function EffectEx2() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");
	useEffect(() => {
		document.title = `you clicked : ${count} times`;
		// console.log("useEffect is called");
	}, );

	return (
		<div>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>+</button>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
}
