import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";
import ProductList from "./components/product-container";

function App() {
  console.log("🚀 ~ file: index.js:11 ~ App", App);
  return (
    <>
      <ProductList />
      <hr />
      <Counter />

      <Counter value={10} />
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React @@@
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
