import './App.css';
import Login from './pages/Login';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Register from "./pages/Register.tsx";
import DeleteAccount from "./pages/DeleteAccount.tsx";

function App() {

  return (
      <Router>
          <div className="App">
              <Login />
              <Routes>
                  <Route path="/email-login" element={<Register />} />
                  <Route path="/additional-info" element={<Register />} />
                  <Route path="/" element={<DeleteAccount />} />
              </Routes>
          </div>
      </Router>
  )
}

export default App
