import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/navbar';
import { Sticky } from './views/sticky';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
        <Routes>
          <Route path='/sticky' element={<Sticky />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
