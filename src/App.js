import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Project from './Pages/Project/Project';
import './style.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<About />}></Route>
          <Route path="/" element={<Project />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
