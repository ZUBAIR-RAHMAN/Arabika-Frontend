import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllReports from './pages/AllReports';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/order" element={<Order />} />
        <Route path="/all-report" element={<AllReports/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
