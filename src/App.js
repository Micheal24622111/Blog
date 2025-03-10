import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import SupportPage from "./pages/SupportPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  console.log("API URL:", apiUrl);
  console.log("API Key:", apiKey);
  
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
     
      <Link to="/home"> Home </Link>
      

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        )  : (
            <>
               <Link to="/"> Blogs </Link>
              <Link to="/createpost"> Create Post </Link>
              {/* <Link to="/supportpage"> Help </Link> */}
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
        
      </nav>
      <Routes>
      <Route path="/home" element={<LandingPage isAuth={isAuth} />} />
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/supportpage" element={<SupportPage isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;