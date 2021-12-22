import "./App.css";
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import AccountComponent from "./pages/AccountComponent";
import CardsComponent from "./pages/CardsComponent";
// import ProtectedRoute from './ProtectedRoute';
import useAuth from "./useAuth";

function App() {
 
  return (
    <div className="ui container">
      <h2>Protected Routes Tutorial</h2>
      <Router>
        <ul>
          <li>
            <Link to="/" >Home Page</Link>
          </li>
          <li>
            <Link to="/accounts" >Accounts (protected)</Link>
          </li>
          <li>
            <Link to="/cards" >Cards(unProtected)</Link>
          </li>
        </ul>
      
          <Routes>
            <Route path="/" exact element={ <HomeComponent/>} ></Route>
            <Route path="/accounts"  element={ <AccountComponent/>} ></Route>
            <Route path="/cards"  element={< CardsComponent/>} ></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;