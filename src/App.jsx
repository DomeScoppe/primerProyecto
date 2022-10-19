import Hero from './components/Hero'
import './index.css'
import Products from "./components/Products";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/products/:id' element={<Products/>}/>
      </Routes>
  )
}

export default App;
