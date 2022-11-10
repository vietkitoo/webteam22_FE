import './styles/css/bootstrap.min.css';
import './styles/css/App.css';
import Login from './page/login/login';
import Home from './page/home/home';
<<<<<<< HEAD
import Regishotel from './page/register-hotel/regishotel';
=======
>>>>>>> 349b9f2fd00a64633e0f8b5a88674638d101c5ef
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
>>>>>>> 349b9f2fd00a64633e0f8b5a88674638d101c5ef
        </Routes>
      </BrowserRouter>,
    </main>
  );
}

export default App;
