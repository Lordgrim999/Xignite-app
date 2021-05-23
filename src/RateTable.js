import React, { useEffect, useState } from "react";
import axios from "axios";
import ProgressCircle from "./ProgressCircle";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

//const BACKEND_URL = `http://localhost:${process.env.PORT}`;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const RateTable = (props) => {
  const classes = useStyles();
  const [rates, setRates] = useState("");

  useEffect(() => {
    axios
      .get("/api/rates")
      .then((ratesDescription) => {
        setRates(ratesDescription.data);
      })
      .catch((err) => {console.log(err)});
  }, []);

  if (rates !== "") {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" data-testid="type">
                {rates.Type}
              </TableCell>
              <TableCell align="right" data-testid="type">
                {rates.Date}
              </TableCell>
              <TableCell align="right" data-testid="type">
                {rates.Value}
              </TableCell>
              <TableCell align="right" data-testid="type">
                {rates.Price}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <ProgressCircle />;
  }
};
export default RateTable;
