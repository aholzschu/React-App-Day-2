import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Favorites from './routes/Favorites/Favorites';


function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Favorites' element={<Favorites/>}/>
    </Routes>
  ) 
}  

export default App;
