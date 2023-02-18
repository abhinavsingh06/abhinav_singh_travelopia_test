import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/list" element={<List/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
