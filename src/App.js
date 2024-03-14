import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Favorite from './pages/favorites';
import Detail from './pages/details';

function App() {
  return (
    <div>
      <div className='min-h-screen p6 bg-white text-gray-600 text-lg'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/favorites' element={ <Favorite />} />
        <Route path='/recipe-item/:id' element={ <Detail />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
