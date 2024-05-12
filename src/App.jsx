import "./App.css";
import { MyNav } from "./components/MyNav";
import MySlider from "./components/MySlider";
import Login from "./components/TestTopics/Login";
import { Test } from "./components/TestTopics/Test";
import Counter from "./components/TestTopics/counter";
import { Products } from "./components/products/Products";

function App() {
	let testFun = () => {
		console.log( "Welcome" )
	}
	return <>
		<MyNav />
		<MySlider />
		<Products />
		<Login />
		{/* <Counter /> */}
	</>;
}

export default App;
