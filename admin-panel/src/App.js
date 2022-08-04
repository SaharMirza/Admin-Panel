import './App.css';
import Home from './Pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div >      
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
