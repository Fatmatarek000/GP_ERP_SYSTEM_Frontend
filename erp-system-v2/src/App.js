import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import List from "./Pages/list/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { productInputs, userInputs } from './formSource';
import User from "./Pages/user/User";


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
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New  inputs={userInputs} title="Add New User"/>} />
              <Route path="userId/edit" element={<User />}/>
             
           
            </Route>
        
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs}title="Add New Product" />} />
            </Route>
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
