import './App.css';
import Table from './components/Table';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='login/' element={<Login />} />
          <Route path='/' element={<Table />} />
        </Routes>
        {/* <Login /> */}
      </Router>

    </div>
  );
}

export default App;
