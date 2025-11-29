import { BrowserRouter } from "react-router-dom";
import './App.css';
import Main from './Main';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
