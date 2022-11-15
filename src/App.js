import './styles/css/bootstrap.min.css';
<<<<<<< HEAD
import Login from './page/login/login';
import Home from './page/home/home';
import Regishotel from './page/register-hotel/regishotel';
=======
import Login from './page/login';
import Home from './page/home';
import Regishotel from './page/regishotel';
import Regispartner from './page/regispartner';
import Support from './page/support';
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
          <Route path="/register-hotel" element = {<Regishotel />} ></Route>
          <Route path="/register-partner" element = {<Regispartner />} ></Route>
          <Route path="/support" element = {<Support />} ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
