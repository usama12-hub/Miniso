
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Number from './Navbar_1/Number';
import Link1 from './Navbar_1/Link1';
import Link2 from './Navbar_1/Link2';
import Link3 from './Navbar_1/Link3';
import Wishlist from './Navbar_2/Wishlist';
import Search from './Navbar_2/Wishlist';
import Setting from './Navbar_2/Setting';
import Cart from './Navbar_2/Cart';
import Home from './Navbar_3/Home';
import NEW_ARRIVALS from './Navbar_3/NEW_ARRIVALS';
import SNACKS_AND_BISCUITS from './Navbar_3/SNACKS_AND_BISCUITS';
import LOTSO from './Navbar_3/LOTSO';
import BARBIE from './Navbar_3/BARBIE';
import WE_BARE_BEARS from './Navbar_3/WE_BARE_BEARS';
import CATEGORIES from './Navbar_3/CATEGORIES';
import LOYALTY from './Navbar_3/LOYALTY';
import CONTACT_US from './Navbar_3/CONTACT_US';

import All from './All/All';
import Detail from './Carts/Detail';



function App() {
  
  return (
    <div className="App"> 
       <All/>
       
 
     <Routes>
      <Route path='/number'element={<Number/>}></Route> 
      <Route path='/link1'element={<Link1/>}></Route>
      <Route path='/link2'element={<Link2/>}></Route>
      <Route path='/link3'element={<Link3/>}></Route>

      <Route path='/search'element={<Search/>}></Route>
      <Route path='/wishlist'element={<Wishlist/>}></Route>
      <Route path='/setting'element={<Setting/>}></Route>
      <Route path='/cart'element={<Cart/>}></Route>

      <Route path='/home'element={<Home/>}></Route>
      <Route path='/a'element={<NEW_ARRIVALS/>}></Route>
      
      <Route path='/b'element={<SNACKS_AND_BISCUITS/>}></Route>
      <Route path='/c'element={<LOTSO/>}></Route>
      <Route path='/d'element={<BARBIE/>}></Route>
      <Route path='/e'element={<WE_BARE_BEARS/>}></Route>
      <Route path='/f'element={<CATEGORIES/>}></Route>
      <Route path='/i'element={<LOYALTY/>}></Route>
      <Route path='/j'element={<CONTACT_US/>}></Route>


      <Route path='/cart9/:id'element={<Detail/>}></Route>

     </Routes>
    </div>
  
  )
}

export default App;
