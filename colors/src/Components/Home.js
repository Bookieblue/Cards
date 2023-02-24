import './Home.css';
import { Outlet, Link } from "react-router-dom";



function Home() {
  
  return (
    <div className="App">
      <div  className="Header-container">
      <h2>Welcome to the color factory</h2>
      <a href="./Layout"><h2>Add a color</h2></a>
      </div>
       <div className='Body-container'>
        <h3>Please select a Color</h3>
      </div> 
      <>
      <nav>
        <ul>
          <li>
            <Link to="/Blue">Blue</Link>
          </li>
          <li>
            <Link to="/Red">Red</Link>
          </li>
          <li>
            <Link to="/Green">Green</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </> 
    
    </div>
  );
}

export default Home;
