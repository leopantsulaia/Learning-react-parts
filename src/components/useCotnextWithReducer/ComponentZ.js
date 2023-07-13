import React, { useContext } from "react";
import { CountContext } from "./AppForContextWithReducer";

export default function ComponentZ() {
	const countContext = useContext(CountContext);
	return (
		<div>
			<h1>ComponentZ</h1>
			<button onClick={() => countContext.countDispatch("increment")}>Increment</button>
			<button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
			<button onClick={() => countContext.countDispatch("reset")}>Reset</button>
		</div>
	);
}
