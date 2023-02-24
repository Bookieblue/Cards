import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Blue from './Components/Blue';
import Red from './Components/Red';
import Green from './Components/Green';
import Layout from './Components/Layout';


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route exact path="/Red" element={<Red />} />
          <Route exact path="/Green" element={<Green />} />
          <Route exact path="/Blue" element={<Blue />} />
          <Route exact path="/Layout" element={<Layout/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
