import React from "react";
import Counter from "./components/useStatePractice.js/Counter";
import Counter2 from "./components/useStatePractice.js/Counter2";
import Counter3 from "./components/useStatePractice.js/Counter3";
import HookStateArray from "./components/useStatePractice.js/HookStateArray";
import ExplainEffect from "./components/useEffectPractice/EffectEx1";
import EffectEx2 from "./components/useEffectPractice/EffectEx2";
import EffectEx3 from "./components/useEffectPractice/EffectEx3";
import MouseContainer from "./components/useEffectPractice/EffectEx4";
import FetchMultiplePosts from "./components/dataFetching/FetchMultiplePosts1";
import FetchSinglePost from "./components/dataFetching/FetchSinglePost";
import X from "./components/useContext/X";
import "./App.css";
import MyCounter1 from "./components/useReducer/MyCounter1";
import MyCounter2 from "./components/useReducer/MyCounter2";
import MyCounter3 from "./components/useReducer/MyCounter3";
import App2 from "./components/useCotnextWithReducer/AppForContextWithReducer";
import UseStateDataFetch from "./components/useStateAndUseReducer/UseStateDataFetch";
import UseReducerDataFetch from "./components/useStateAndUseReducer/UseReducerDataFetch";
import MyMemoCounter from "./components/useMemoPractice/MyMemoCounter";
import FocusInput from "./components/useRefPractice/FocusInput";
import Timer from "./components/useRefPractice/Timer";

export const PriceContext = React.createContext();
export const ItemContext = React.createContext();

function App() {
	return (
		<div className="App">
			{/* <Counter />
			<Counter2 />
			<Counter3 />
			<HookStateArray />
			<ExplainEffect />
			<EffectEx2 />
			<EffectEx3 />
			<MouseContainer />
			<FetchMultiplePosts />
			<FetchSinglePost />
			<PriceContext.Provider value={"$200"}>
				<ItemContext.Provider value={"Samsung"}>
					<X />
				</ItemContext.Provider>
			</PriceContext.Provider>
			<MyCounter1/>
			<MyCounter2/>
			<MyCounter3/>
			<App2 />
			<UseStateDataFetch />
			<UseReducerDataFetch />
			<MyMemoCounter/> */}
			<FocusInput/>
			<Timer/>
		</div>
	);
}

export default App;
