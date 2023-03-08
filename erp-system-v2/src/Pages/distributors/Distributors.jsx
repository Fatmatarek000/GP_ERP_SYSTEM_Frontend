import "./Distributors.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";

export default function Distributors() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Distributor Name",
      width: 200,
      renderCell: () => {
        return <div className="productListItem">name</div>;
      },
    },
    {
      field: "email",
      headerName: "Distributor Email",
      width: 200,
      renderCell: () => {
        return <div className="productListItem">Email@gmail.com</div>;
      },
    },
    {
      field: "number",
      headerName: "Distributor Number",
      width: 200,
      renderCell: () => {
        return <div className="productListItem">12345678910</div>;
      },
    },
    {
      field: "address",
      headerName: "Distributor Address",
      width: 250,
      renderCell: () => {
        return <div className="productListItem">Address</div>;
      },
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/distributors/" + params.row.id + params.row.email}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Distributors
            <Link to="/distributors/newdistributor" className="link">
              Add New
            </Link>
          </div>

          <DataGrid
            className="datagrid"
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={9}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
