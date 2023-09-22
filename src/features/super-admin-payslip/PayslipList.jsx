import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import Checkbox from "@mui/material/Checkbox";
import menu from "../../assets/menu.svg";
import Arrow from "../../assets/Arrow-payslip.png";
import "./PayslipList.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const data = [
  {
    Title: "Payslip-1",
    User: "Amanda Omar",
    Month: "July 2023",
    Salary: "INR: 20,000",
    Earnings: "INR: 20,000",
    Deductions: "INR: 1,000",
    NetPay: "INR: 23,400",
  },
  {
    Title: "Payslip-2",
    User: "Vijay",
    Month: "July 2023",
    Salary: "INR: 20,000",
    Earnings: "INR: 20,000",
    Deductions: "INR: 1,000",
    NetPay: "INR: 23,400",
  },
  {
    Title: "Payslip-3",
    User: "Uppli",
    Month: "July 2023",
    Salary: "INR: 20,000",
    Earnings: "INR: 20,000",
    Deductions: "INR: 1,000",
    NetPay: "INR: 23,400",
  },
  {
    Title: "Payslip-4",
    User: "Amanda Omar",
    Month: "July 2023",
    Salary: "INR: 20,000",
    Earnings: "INR: 20,000",
    Deductions: "INR: 1,000",
    NetPay: "INR: 23,400",
  },
];
const PayslipList = () => {
  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event) => {
    rowperpageChange(+event.target.value);
    pagechange(0);
  };

  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpageChange] = useState(5);

    return (
      <div>
        <TableContainer component={Paper}>
          <Table className="table">
            <TableHead className="thead">
              <TableRow className="thead1">
                <Checkbox className="theadcheckbox" {...label} />
                <TableCell className="tableCell">
                  Payslip
                  <img src={Arrow} alt="arrow" className="arrow" />
                </TableCell>
                <TableCell className="tableCell">
                  User name <img src={Arrow} alt="arrow" className="arrow" />
                </TableCell>
                <TableCell className="tableCell">
                  Payslip month{" "}
                  <img src={Arrow} alt="arrow" className="arrow" />
                </TableCell>
                <TableCell className="tableCell">
                  Basic Salary <img src={Arrow} alt="arrow" className="arrow" />
                </TableCell>
                <TableCell>Total Earnings</TableCell>
                <TableCell>Total Deductions</TableCell>
                <TableCell>Net Pay</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowperpage, page * rowperpage + rowperpage)
                .map((row, index) => (
                  <TableRow className="tablerow" key={index}>
                    <Checkbox className="Checkbox" {...label} />
                    <TableCell className="titlecontent">
                      {row.Title}
                      <img src={menu} alt="menu" className="menu" />
                    </TableCell>
                    <TableCell className="clientcontent">{row.User}</TableCell>
                    <TableCell className="datecontent">{row.Month}</TableCell>
                    <TableCell className="datecontent">{row.Salary}</TableCell>
                    <TableCell className="datecontent">
                      {row.Earnings}
                    </TableCell>
                    <TableCell className="datecontent">
                      {row.Deductions}
                    </TableCell>
                    <TableCell className="datecontent">{row.NetPay}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowperpage}
          page={page}
          count={data.length}
          component="div"
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
        ></TablePagination>
      </div>
    );
  };
export default PayslipList;