import React, { useEffect, useState } from "react";

export default function ExplainEffect() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `you clicked : ${count} times`;
	});

	return (
		<div>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>
				<h2> Click </h2>
			</button>
		</div>
	);
}
