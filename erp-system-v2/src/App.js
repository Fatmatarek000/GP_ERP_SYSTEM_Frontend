import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import Userlist from "./Pages/userlist/Userlist"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {  userInputs } from './formSource';
import User from "./Pages/user/User";
import ProductList from './Pages/productList/ProductList';
import Product from './Pages/product/Product';
import NewProduct from './Pages/newProduct/NewProduct';



function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<Userlist />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New  inputs={userInputs} title="Add New User"/>} />
              <Route path=":userId/edit" element={<User />}/>
            </Route>
            <Route path="products">
            <Route index element={<ProductList/>}/>
            <Route path=":productId" element={<Product/>}/>
            <Route path="newproduct" element={<NewProduct/>}/>
            </Route>
          
            
            
        
            
            
            
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
