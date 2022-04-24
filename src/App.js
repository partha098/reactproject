
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Addcategory from './pages/Addcategory';
import Listcategory from './pages/Listcategory';
import Addproduct from './pages/Addproduct';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/add-category" element={<Addcategory/>}/>
      <Route path="/list-category" element={<Listcategory/>}/>
      <Route path="/add-product" element={<Addproduct/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
