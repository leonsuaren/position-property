import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/navbar';
import { Sticky } from './views/sticky';
import { Positioning } from './views/positioning';
import { Relative } from './views/relative';
import { Absolute } from './views/absolute';
import { Footer } from './components/footer'
import { Fixed } from './views/fixed';
import { PracticalCases } from './views/practical-cases';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Positioning />} />
            <Route path='/position-property' element={<Positioning />} />
            <Route path='/sticky' element={<Sticky />} />
            <Route path='/relative' element={<Relative />} />
            <Route path='/absolute' element={<Absolute />} />
            <Route path='/fixed' element={<Fixed />} />
            <Route path='/practical-cases' element={<PracticalCases />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
