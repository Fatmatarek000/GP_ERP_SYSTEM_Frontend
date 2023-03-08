import "./Editdistributor.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";

export default function Editdistributor() {
  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="container">
          <h1 className="addProductTitle">Edit Distributor</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Name</label>
              <input type="text" placeholder="hossam" />
            </div>
            <div className="addProductItem">
              <label>Email</label>
              <input type="email" placeholder="Email@gmail.com" />
            </div>
            <div className="addProductItem">
              <label>Phone number</label>
              <input type="number" placeholder="12345678910" />
            </div>
            <div className="addProductItem">
              <label>Address</label>
              <input type="text" placeholder="cairo helwan" />
            </div>
            <button className="addProductButton">update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
