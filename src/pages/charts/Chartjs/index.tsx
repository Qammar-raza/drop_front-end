import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import PieChart from "./PieChart";
import RadarChart from "./RadarChart";
import PolarChart from "./PolarChart";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function Blank() {
  return (
    <React.Fragment>
      <Helmet title="Charts" />
      <Typography variant="h3" gutterBottom display="inline">
        Charts
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Typography>Charts</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <LineChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <BarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <DoughnutChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <PieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <RadarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <PolarChart />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Blank;
