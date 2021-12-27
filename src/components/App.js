import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header';
import Home from "../router/Home"
import Coin from "../router/Coins"
import '../App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Coin" element={<Coin />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
