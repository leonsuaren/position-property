import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/navbar';
import { Sticky } from './views/sticky';
import { Positioning } from './views/positioning';
import { Relative } from './views/relative';
import { Absolute } from './views/absolute';
import { Footer } from './components/footer'
import { Fixed } from './views/fixed';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/sticky' element={<Sticky />} />
            <Route path='/positioning' element={<Positioning />} />
            <Route path='/relative' element={<Relative />} />
            <Route path='/absolute' element={<Absolute />} />
            <Route path='/fixed' element={<Fixed />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
