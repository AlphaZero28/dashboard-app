import './App.css';
import Table from './components/Table';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Table />
      </Router>

    </div>
  );
}

export default App;
