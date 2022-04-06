import { useEffect } from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import './App.css';
import { UserRoute } from "./components/UserRoute";
import {useDispatch} from 'react-redux';
import {auth} from './firebase/firebase';
import { setUser } from "./redux/actions";

function App() {
  const dispatch =useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(setUser(authUser))
      }else {
        dispatch(setUser(null));
      }
    })
  }, [dispatch])
  return (
    <BrowserRouter>
        <Routes>
          < Route exact path="/" element={<UserRoute />} >
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter> 
  );
}

export default App;
