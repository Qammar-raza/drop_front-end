import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import moment from "moment";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import {
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { spacing } from "@mui/system";
import { TableRowColumn } from "material-ui/Table";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const CustomTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    background: ${(props) => props.theme.palette.common.black};
    color: ${(props) => props.theme.palette.common.white};
  }
  &.${tableCellClasses.body} {
    font-size: 14px;
  }
`;

const CustomTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

function SimpleTableDemo() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/vendors")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <Card mb={6}>
      <CardContent pb={1}></CardContent>
      <Paper>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Company Website</TableCell>
              <TableCell>Business Profile</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((datas, ind) => (
              <TableRow
                key={datas.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="datas">
                  {datas.company_name}
                </TableCell>
                <TableCell>{datas.company_website}</TableCell>
                <TableCell>{datas.business_profile}</TableCell>
                <TableCell>
                  {moment(datas.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </TableCell>
                <TableCell>
                  {moment(datas.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Card>
  );
}

function SimpleTableVendor() {
  return (
    <React.Fragment>
      <Helmet title="Simple Table" />
      <Typography variant="h3" gutterBottom display="inline">
        Vendor Table
      </Typography>

      {/* <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Tables
        </Link>
        <Typography>Simple Table</Typography>
      </Breadcrumbs> */}

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <SimpleTableDemo />
          {/* <CustomizedTableDemo /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SimpleTableVendor;
