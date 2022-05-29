import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'


function App() {
  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/users" element={<Users />}>
            </Route>
            <Route exact path="/" element={<Home />}>
            </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
