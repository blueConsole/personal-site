import Header from './components/Header'
import Navbar from './components/navigation/Navbar';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const name = 'Josephus';

  return (
    <div className='app'>
      <Navbar/>
    </div>
  );
}

export default App;
