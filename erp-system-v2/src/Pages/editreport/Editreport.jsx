import "./Editreport.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";

export default function Editreport() {
  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="container">
          <h1 className="addProductTitle">Edit Report</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Products</label>
              <input type="text" placeholder="tv" />
            </div>
            <div className="addProductItem">
              <label>Sales</label>
              <input type="number" placeholder="200" />
            </div>
            <div className="addProductItem">
              <label>Orders</label>
              <input type="number" placeholder="33" />
            </div>
            <div className="addProductItem">
              <label>Total price</label>
              <input type="number" placeholder="5000 $" />
            </div>
            <div className="addProductItem">
              <label>Report Date</label>
              <input type="date" placeholder="3/3/2023" />
            </div>
            <button className="addProductButton">update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
