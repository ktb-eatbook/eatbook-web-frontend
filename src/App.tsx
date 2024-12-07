import './App.css';
import Login from './pages/Login';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Register from "./pages/Register.tsx";
import DeleteAccount from "./pages/DeleteAccount.tsx";
import EmailLogin from "./pages/EmailLogin.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";

function App() {

  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path='/' element={<Login />} />
                  <Route path="/email-login" element={<EmailLogin />} />
                  <Route path="/additional-info" element={<Register />} />
                  <Route path="/account" element={<DeleteAccount />} />
                  <Route path='/terms' element={<TermsAndConditions />} />
              </Routes>
          </div>
      </Router>
  )
}

export default App
