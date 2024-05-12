import "./App.css";
import { MyNav } from "./components/MyNav";
import MySlider from "./components/MySlider";
import UseEffectComp from "./components/TestTopics/1-useEffect";
import Login from "./components/TestTopics/Login";
import { Test } from "./components/TestTopics/Test";
import Counter from "./components/TestTopics/counter";
import { Products } from "./components/products/Products";

function App() {
	let testFun = () => {
		console.log( "Welcome" )
	}
	return <>

		<Products />
		<UseEffectComp />
		{/* <Login /> */}

	</>;
}

export default App;
