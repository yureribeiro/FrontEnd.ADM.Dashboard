import { Box } from "@mui/material";
import { DataGrid, GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, }, 
    { field: "registrarId", headerName: "registrarID", },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell", },
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", },
    { field: "phone", headerName: "Phone Number", flex: 1, },
    { field: "email", headerName: "Email", flex: 1, },
    { field: "adress", headerName: "Adress", flex: 1, },
    { field: "city", headerName: "City", flex: 1, },
    { field: "zipCode", headerName: "ZipCode", flex: 1, },
  ];

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts for Future Referents" />
      <Box m="40px 0 0 0" height="65vh" 
          sx={{ "& .MuiDataGrid-root": { border: "none" },
                "& .MuiDataGrid-cell": { borderBottom: "none" },
                "& .name-column--cell": { color: colors.greenAccent[300] },
                "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
                "& .MuiDataGrid-virtualScroller": { backgroudColor: colors.primary[400] },
                "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
                "& .MuiDataGrid-tolbarContainer .MuiBotton-text": { color: `${colors.grey[100]} !important` },
                }}>
        <DataGrid 
        rows={mockDataContacts} 
        columns={columns} 
        components={{ Tollbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;