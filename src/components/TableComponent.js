import React from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  TablePagination,
  Avatar,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0766AD",
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function TableComponent({
  headerNames,
  tableData,
  totalPages,
  currentPage,
  pageChange,
}) {
  const handleChangePage = (event, newPage) => {
    pageChange(newPage);
  };

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headerNames?.map((item, index) => (
                <StyledTableCell
                  key={item}
                  align={index <= 2 ? "left" : "center"}
                >
                  {item}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData?.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell align="left">
                  <Avatar alt={item.name} src={item.profilepicture} />
                </StyledTableCell>
                <StyledTableCell align="left">{item.name}</StyledTableCell>
                <StyledTableCell align="left">{item.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {item.location}
                </StyledTableCell>
                <StyledTableCell align="center">{item.id}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={totalPages}
        rowsPerPage={tableData?.length}
        page={currentPage - 1}
        onPageChange={handleChangePage}
        sx={{
          borderTop: "1px solid rgba(224, 224, 224, 1)",
        }}
      />
    </Paper>
  );
}
