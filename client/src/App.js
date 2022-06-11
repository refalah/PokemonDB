import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Details from "./pages/Details";
import MyPokemon from "./pages/MyPokemon";

function App() {
  return (
    <>
      <Router>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pokemon/:id" element={<Details />} />
          <Route exact path="/my-pokemon" element={<MyPokemon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
