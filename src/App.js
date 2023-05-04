import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home  from './Components/Home';
import RestaurantDetails from './Components/RestaurantDetails';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
  

function App() { 
  return (
 
    <Router>
      <Header/>
        <main>
          <Routes className="py-3">
            <Route path='/' element={<Home/>} />
            <Route path='/restaurants/:id' element={<RestaurantDetails/>} />    
          </Routes>
        </main>
      <Footer/>
    </Router>
        
    
  );
}

export default App;
 