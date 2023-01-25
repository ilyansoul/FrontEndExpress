
import './App.css';
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/homepage" element={<HomePage/>} />
     </Routes>
    </div>
  );
}

export default App;
