const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000/',
      changeOrigin: true,
    })
  );
};

import HomeAdmin from './admin/page/home/Home';
import { hotelColumns, roomColumns, userColumns } from "./admin/datatablesource";
import List from './admin/page/list/List';
import New from './admin/page/new/New';
import Single from './admin/page/single/Single';
import NewRoom from './admin/page/newRoom/NewRoom';
import NewHotel from './admin/page/newHotel/NewHotel';
import LoginAdmin from './admin/page/login/Login';
import { userInputs } from "./admin/formSource";
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
