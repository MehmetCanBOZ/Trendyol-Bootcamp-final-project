import './App.scss';
import SpiderSolitaire from './Pages/SpiderSolitaire/SpiderSolitaire';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/game" element={<SpiderSolitaire />}/>
     </Routes>
   </Router>
  );
}

export default App;
