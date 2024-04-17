import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cart" element = {[<Header /> , <Cart/>]}></Route>
          <Route path="/" element={[<Header/> , <Home/>]}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
