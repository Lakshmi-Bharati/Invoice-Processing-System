import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";

const StyledTable = styled(Table)({
  width: "80%",
  margin: 20,
  marginTop: 40,

  "& > thead > tr > th": {
    background: "#000",
    color: "#ffffff",
    fontSize: 18,
  },

  "& > tbody > tr > td": {
    fontSize: 16,
  },

  "& > tbody > p": {
    fontSize: 18,
    marginTop: 15,
  },
});

const Invoices = ({ invoices, removeInvoice }) => {
  return (
    <>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>Vendor</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {invoices && Array.isArray(invoices) && invoices.length > 0 ? (
            invoices.map((invoice) => (
              <TableRow>
                <TableCell>{invoice.vendor}</TableCell>
                <TableCell>{invoice.product}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.action}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => removeInvoice(invoice.id)}
                  >
                    Mark Done
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <Typography>No pending invoices</Typography>
          )}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Invoices;
