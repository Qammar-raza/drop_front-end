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
import { useNavigate } from "react-router-dom";
import "./SampleTable.css";

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
    fetch("http://localhost:8080/api/vendor_requests")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  const [status, setStatus] = React.useState();
  const navigate = useNavigate();
  const handleChange = (event: any, el: any) => {
    setStatus(event.target.value);
    console.log(event.target.value, el, status);
    const json = { status: event.target.value };
    fetch("http://localhost:8080/api/vendor_requests/" + el, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        fetch("http://localhost:8080/api/vendor_requests/" + el, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((result1) => {
            console.log(result1);
            fetch("http://localhost:8080/api/vendor_requests?id=" + el)
              .then((res) => res.json())
              .then((json) => {
                console.log("particulat id", json);
                fetch("http://localhost:8080/api/vendors", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(json[0]),
                })
                  .then((res) => res.json())
                  .then((result2) => {
                    console.log(result2);
                    navigate("/vendor");
                  });
              });
          });
      });
  };
  console.log(status);

  return (
    <Card mb={6}>
      <CardContent pb={1}>
        {/* <Typography variant="h6" gutterBottom>
          Simple Table
        </Typography> */}
        {/* <Typography variant="body2" gutterBottom>
          A simple example with no frills.
        </Typography> */}
      </CardContent>
      <Paper>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Company Website</TableCell>
              <TableCell>Business Profile</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Actions</TableCell>
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
                <TableCell>
                  <FormControl fullWidth className="label-vendor">
                    <InputLabel id="demo-simple-select-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={status}
                      label="Status"
                      onChange={(e) => handleChange(e, datas.id)}
                    >
                      <MenuItem value="pending">Pending</MenuItem>
                      <MenuItem value="approved">Approved</MenuItem>
                      <MenuItem value="declined">declined</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                {/* <TableCell>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormControl
                        sx={{ m: 3 }}
                        component="fieldset"
                        variant="standard"
                      >
                        <FormLabel component="legend">
                          Assign responsibility
                        </FormLabel>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={pending}
                                onChange={(event) =>
                                  handleChange(event, datas.id)
                                }
                                name="pending"
                              />
                            }
                            label="pending"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={approved}
                                onChange={(event) =>
                                  handleChange(event, datas.id)
                                }
                                name="approved"
                              />
                            }
                            label="approved"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={denied}
                                onChange={(event) =>
                                  handleChange(event, datas.id)
                                }
                                name="denied"
                              />
                            }
                            label="denied"
                          />
                        </FormGroup>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>
                </TableCell>  */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Card>
  );
}

// function CustomizedTableDemo() {
//   return (
//     <Card mb={6}>
//       <CardContent pb={1}>
//         <Typography variant="h6" gutterBottom>
//           Customized Table
//         </Typography>
//         <Typography variant="body2" gutterBottom>
//           If you have been reading the overrides documentation page but you are
//           not confident jumping in, here are examples of how you can change the
//           look of a <code>TableCell</code>.
//         </Typography>
//       </CardContent>
//       <Paper>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <CustomTableCell>Dessert (100g serving)</CustomTableCell>
//               <CustomTableCell align="right">Calories</CustomTableCell>
//               <CustomTableCell align="right">Fat (g)</CustomTableCell>
//               <CustomTableCell align="right">Carbs (g)</CustomTableCell>
//               <CustomTableCell align="right">Protein (g)</CustomTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <CustomTableRow key={row.id}>
//                 <CustomTableCell component="th" scope="row">
//                   {row.name}
//                 </CustomTableCell>
//                 <CustomTableCell align="right">{row.calories}</CustomTableCell>
//                 <CustomTableCell align="right">{row.fat}</CustomTableCell>
//                 <CustomTableCell align="right">{row.carbs}</CustomTableCell>
//                 <CustomTableCell align="right">{row.protein}</CustomTableCell>
//               </CustomTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </Card>
//   );
// }

function SimpleTable() {
  return (
    <React.Fragment>
      <Helmet title="Simple Table" />
      <Typography variant="h3" gutterBottom display="inline">
        Vendor Request Table
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

export default SimpleTable;
