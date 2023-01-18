import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/navbar';
import { Sticky } from './views/sticky';
import { Positioning } from './views/positioning';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
        <Routes>
          <Route path='/sticky' element={<Sticky />} />
          <Route path='/positioning' element={<Positioning />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
