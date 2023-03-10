import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { categoryInputs, userInputs ,productInputs,productinventoryInputs,rawmatrialInputs,rawmatrialinventoryInputs} from './formSource';
import User from "./Pages/user/User";
import ProductList from './Pages/productList/ProductList';
import Product from './Pages/product/Product';
import NewProduct from './Pages/newProduct/NewProduct';
import Overviewofsales from './Pages/overviewforsales/Overviewofsales'
import Daily from './Pages/dailyofsales/Daily'

import Distributors from "./Pages/distributors/Distributors";
import Newdistributor from "./Pages/newdistributor/Newdistributor";
import Editdistributor from "./Pages/editdistributor/Editdistributor";
import Reports from "./Pages/reports/Reports";
import Editreport from "./Pages/editreport/Editreport";
import Newreport from "./Pages/newreport/Newreport";
import EmployeeList from "./Pages/employeelist/EmployeeList";
import Distributer from './Pages/distributer/Distributer';
import NewDistributer from './Pages/newdistributer/NewDistributer';
import EditDistributer from './Pages/editdistributer/EditDistributer.jsx';
import ProductinventoryList from './Pages/productsinventorylist/ProductinventoryList'; 
import Productinventory from './Pages/productinventory/Productinventory'; 
import NewProductinventory from './Pages/newproductinventory/NewProductinventory.jsx'; 
import CategoryList from "./Pages/categorylist/CategoryList.jsx";
import NewCategory from "./Pages/newcategory/NewCategory";
import Category from './Pages/category/Category';
import RawMatrialList from './Pages/rawmatrialList/RawMatrialList'
import Newmatrial from './Pages/newmatrial/Newmatrial';
import RawMatrial from './Pages/rawmatrial/RawMatrial.jsx';
import RawMatrialInventoryList from './Pages/rawmatrialinventorylist/RawMatrialInventoryList.jsx';
import RawMatrialinventory from './Pages/rawmatrialinventory/RawMatrialinventory';
import NewmatrialInventory from './Pages/newmatrialinventory/NewmatrialInventory.jsx';
import { EmployeeContextProvider } from "./context/employee";
import { CategoryContextProvider } from "./context/CategoryContext";
import { AllproductContextProvider } from './context/AllproductContext';
import { ProductInventoryContextProvider } from "./context/ProductInventoryContext";
import { RawMatrialContextProvider } from "./context/RawMatrialContext";
import { RawMatrialInventoryContextProvider } from "./context/RawMatrialInventoryContext";


function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="overview" element={<Overviewofsales  title="Overview of General Revenue and Profit" title2="Breakdown of Sales By Category" />} />
            <Route path="daily" element={<Daily/>} />


            <Route path="products">
            <Route index element={<ProductList/>}/>
            <Route path=":productId" element={<Product/>}/>
            <Route path="newproduct" element={<NewProduct/>}/>
            </Route>

          
          
            
           


            <Route path="employee">
              <Route index element={<EmployeeList />} />
              <Route path=":employeeId" element={<Single />} />
              <Route path="new" element={<New  inputs={userInputs} title="Add New Emloyee"/>} />
              <Route path=":userId/edit" element={<User />}/>
            </Route>
            
            <Route path="distributer">
              <Route index element={<Distributer/>} />
              <Route path=":distributerId" element={<EditDistributer/>} />
              <Route path="newDistributer" element={<NewDistributer  inputs={userInputs} title="Add New Distributer"/>} />
              
            </Route>

            <Route path="products">
            <Route index element={<ProductList/>}/>
            <Route path=":productId" element={<Product/>}/>
            <Route path="newproduct" element={<NewProduct inputs={productInputs} title="Add New Product"/>}/>
            </Route>
            <Route path="productsinventory">
            <Route index element={<ProductinventoryList />}/>
            <Route path=":productinventoryId" element={<Productinventory/>}/>
            <Route path="newproductinventory" element={<NewProductinventory inputs={productinventoryInputs} title="Add New Product To Inventory"/>}/>
            </Route>
            <Route path="category">
            <Route index element={<CategoryList />}/>
            <Route path=":categoryId" element={<Category/>}/>
            <Route path="newcategory" element={<NewCategory inputs={categoryInputs} title="Add New Category"/>}/>
            </Route>
            <Route path="rawmatrial">
            <Route index element={<RawMatrialList />}/>
            <Route path=":materialId" element={<RawMatrial />}/>
            <Route path="newrawmatrial" element={<Newmatrial inputs={rawmatrialInputs} title="Add New Raw Material"/>}/>
            </Route>
            <Route path="rawmatrialinventory">
            <Route index element={<RawMatrialInventoryList />}/>
            <Route path=":rawmatrialinventoryId" element={<RawMatrialinventory />}/>
            <Route path="newrawmatrialinventory" element={<NewmatrialInventory inputs={rawmatrialinventoryInputs} title="Add New Raw Material Inventory"/>}/>
            </Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
