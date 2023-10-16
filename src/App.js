import logo from "./logo.jpg";
import "./App.css";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <img src={logo} className="App-logo rounded " alt="logo" />
        <h3>👋🏾 Hello, I'm</h3>
        <h1>Nyasha Tavatya</h1>
        <h2> Junior Front-end Developer, Birmingham, UK</h2>
      </header>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
