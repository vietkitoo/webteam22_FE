import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import useFetch from "../../hook/useFetch";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";


const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const { data, loading, error } = useFetch(`api/${path}`);


  const handleDelete = async (_id) => {
    try {
      await axios.delete(`api/${path}/${_id}`);
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Hoạt động",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}  
            >
              Xóa
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
      <hr/>
        <Link to={`/${path}/new`} className="link">
                   <span> Thêm mới </span> 
        </Link>

      </div>

      <hr/>
  
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
