import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Pants from './components/pants';
import Shirts from './components/shirts';
import Shoes from './components/shoes';

function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/pants'>Pants</Link>
            </li>
            <li>
              <Link to='/shirts'>Shirts</Link>
            </li>
            <li>
              <Link to='/shoes'>Shoes</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path='/' />
            <Route path='/pants' element={<Pants />} />
            <Route path='/shirts' element={<Shirts />} />
            <Route path='/shoes' element={<Shoes />} />
          </Routes>
        </main>
        <h1> hello world!</h1>
      </Router>
    </div>
  );
}

export default App;
