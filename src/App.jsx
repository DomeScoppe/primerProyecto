import Hero from "./components/Hero";
import "./index.css";
import Products from "./components/Products";
import Recommendations from "./components/Recommendations";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/products/:id' element={<Products/>}/>
        <Route path='/recommendations' element={<Recommendations/>}/>
      </Routes>
  )
}

export default App;
