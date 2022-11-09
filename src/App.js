import './styles/css/bootstrap.min.css';
import './styles/css/App.css';
<<<<<<< HEAD
import Login from './page/login/login';
import Home from './page/home/home';
import Regishotel from './page/register-hotel/regishotel';
=======
import Login from './page/login';
import Home from './page/home';
>>>>>>> main
import { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <main className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
<<<<<<< HEAD
          <Route path="/register-hotel" element = {<Regishotel />} ></Route>
=======
>>>>>>> main
        </Routes>
      </BrowserRouter>,
    </main>
  );
}

export default App;
