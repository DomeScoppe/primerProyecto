import Hero from "./components/Hero";
import Products from "./components/Products";
import {Routes, Route} from 'react-router-dom'
import RestaurantsPage from "./pages/RestaurantsPage";
import { RestaurantPage } from "./pages/RestaurantsPage/RestaurantPage";

function App() {
  return (
     <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="/restaurants/:slug" element={<RestaurantPage />} />
    </Routes>
  );
}

export default App;
