import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import User from './components/User'
import Error404 from './components/Error404'


function App() {
  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : "" }  to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : "" }  to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className={(navData) => navData.isActive ? "active" : "" }  to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/user/:id"  element={<User/>}></Route>
            <Route path="*"  element={<Error404 />}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
