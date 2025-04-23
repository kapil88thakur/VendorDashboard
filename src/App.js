import logo from './logo.svg';
import './App.css';
import Login from './scenes/pages/Login';
import { Routes, Route, Navigate,useRoutes } from 'react-router-dom';
import Home from './scenes/pages/Home';
import Logout from './scenes/pages/Logout';
import Dashboard from './scenes/pages/Dashboard';
import Product from './scenes/pages/Product';
function App() {
const routes = useRoutes([
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/login', element: <Login /> },
  { path: '/logout', element: <Logout /> },
  { path: '/product', element: <Product /> },

]);

return routes;

}

export default App;
