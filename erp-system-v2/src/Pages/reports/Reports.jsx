import "./Reports.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import Charts from "./../../Components/Chart/Charts";

export default function Reports() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "Report ID", width: 100 },
    {
      field: "Rname",
      headerName: "Reporter Name",
      width: 200,
      renderCell: () => {
        return <div className="productListItem">name</div>;
      },
    },
    {
      field: "Reporterid",
      headerName: "Reporter ID",
      width: 250,
      renderCell: () => {
        return <div className="productListItem">123</div>;
      },
    },
    {
      field: "products",
      headerName: "Products",
      width: 200,
      renderCell: () => {
        return <div className="productListItem">name</div>;
      },
    },
    {
      field: "sales",
      headerName: "Sales",
      width: 100,
      renderCell: () => {
        return <div className="productListItem">200</div>;
      },
    },
    {
      field: "orders",
      headerName: "Orders",
      width: 100,
      renderCell: () => {
        return <div className="productListItem">33</div>;
      },
    },

    {
      field: "totalP",
      headerName: "Total Price",
      width: 200,
      renderCell: () => {
        return <div className="productListItem">12000 $</div>;
      },
    },
    {
      field: "date",
      headerName: "Report Date",
      width: 200,
      renderCell: () => {
        return <div className="productListItem">3/3/2023</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/reports/" + params.row.id}>
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
        <div>
          <Charts aspect={4 / 1} title="( Last 6 Months)" />
        </div>
        <div className="datatable">
          <div className="datatableTitle">
            Reports
            <Link to="/reports/newreports" className="link">
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
