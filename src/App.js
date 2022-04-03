import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import About from './components/Aboutme';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <h1>KS</h1>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
