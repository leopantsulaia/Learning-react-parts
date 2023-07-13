import React, { useReducer } from "react";

const initialState = {
	counterA: 0,
	counterB: 15,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, counterA: state.counterA + action.value };
		case "decrement":
			return { ...state, counterA: state.counterA - action.value };
		case "incrementB":
			return { ...state, counterB: state.counterB + action.value };
		case "decrementB":
			return { ...state, counterB: state.counterB - action.value };
		case "reset":
			return initialState;
		default:
			return state;
	}
};
export default function MyCounter1() {
	const [count, dispatch] = useReducer(reducer, initialState);
	useReducer(reducer, initialState);
	return (
		<div>
			<h1>counterA : {count.counterA}</h1>
      <h2>counterB : {count.counterB}</h2>
			<button onClick={() => dispatch({ type: "increment", value: 1 })}>Increment</button>
			<button onClick={() => dispatch({ type: "decrement", value: 1 })}>Decrement</button>
			<button onClick={() => dispatch({ type: "increment", value: 5 })}>Increment 5</button>
			<button onClick={() => dispatch({ type: "decrement", value: 5 })}>Decrement 5</button>
			<div>
				<button onClick={() => dispatch({ type: "incrementB", value: 5 })}>Increment counter 5</button>
				<button onClick={() => dispatch({ type: "decrementB", value: 5 })}>Decrement counter 5</button>
			</div>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</div>
	);
}
