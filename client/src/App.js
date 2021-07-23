import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1> The Fib Calc</h1>
        <Link to='/'>Home</Link>
        <Link to='/otherpage'>Other Page</Link>
      </header>
      <div>
        <Route exact path='/' component={Fib} />
        <Route path='/otherpage' component={OtherPage} />
      </div>
    </div>
  );
}

export default App;
