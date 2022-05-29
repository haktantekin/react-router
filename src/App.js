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
import User from './components/User'


function App(id) {
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
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/user/:id"  element={<User/>}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
