import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Listing from "./pages/Listing";
import Details from "./pages/Details";
import LanguageSettings from "./pages/LanguageSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/settings" element={<LanguageSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
