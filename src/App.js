import './styles/css/bootstrap.min.css';
import Login from './page/login/login';
import Home from './page/home/home';
import Regishotel from './page/registerhotel/regishotel';
import Regispartner from './page/regispartner/regispartner';
import Support from './page/support/support';
import Searchresult  from './page/searchresult/searchresult';
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
          <Route path="/searchresult" element = {<Searchresult  />} ></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
