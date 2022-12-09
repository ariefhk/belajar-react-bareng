import "./App.css";
import { NavbarComponent } from "./component";
import { Counter, Crud } from "./page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="max-w-[500px] mx-auto mt-10">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Crud />} exact />
          <Route path="/counter" element={<Counter />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
