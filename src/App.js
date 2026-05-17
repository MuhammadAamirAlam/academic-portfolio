import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDark from './pages/dark/Home';
import Works from './pages/dark/works';
import SingleProject from './pages/dark/single-project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDark />} />
        <Route path="/works" element={<Works />} />
        <Route path="/project/:projectSlug" element={<SingleProject />} />
      </Routes>
    </Router>
  );
}

export default App;
