import React from "react";
import styled, { withTheme, ThemeProps } from "styled-components/macro";
import Chart from "react-chartjs-2";
import { MoreVertical } from "react-feather";

import { orange, green, red } from "@mui/material/colors";
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  IconButton,
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
  Theme,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 168px;
  position: relative;
`;

const DoughnutInner = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -22px;
  text-align: center;
  z-index: 0;
`;

const TableRow = styled(MuiTableRow)`
  height: 42px;
`;

const TableCell = styled(MuiTableCell)`
  padding-top: 0;
  padding-bottom: 0;
`;

const GreenText = styled.span`
  color: ${() => green[400]};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const RedText = styled.span`
  color: ${() => red[400]};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const DoughnutChart = ({ theme }: ThemeProps<Theme>) => {
  const data = {
    labels: ["Social", "Search Engines", "Direct", "Other"],
    datasets: [
      {
        data: [260, 125, 54, 146],
        backgroundColor: [
          theme.palette.secondary.main,
          red[500],
          orange[500],
          theme.palette.grey[200],
        ],
        borderWidth: 5,
        borderColor: theme.palette.background.paper,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "80%",
  };

  return (
    <Card mb={6}>
      <CardHeader
        action={
          <IconButton aria-label="settings" size="large">
            <MoreVertical />
          </IconButton>
        }
        title="Weekly sales"
      />

      <CardContent>
        <ChartWrapper>
          <DoughnutInner>
            <Typography variant="h4">+27%</Typography>
            <Typography variant="caption">more sales</Typography>
          </DoughnutInner>
          <Chart type="doughnut" data={data} options={options} />
        </ChartWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Source</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Social
              </TableCell>
              <TableCell align="right">260</TableCell>
              <TableCell align="right">
                <GreenText>+35%</GreenText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Search Engines
              </TableCell>
              <TableCell align="right">125</TableCell>
              <TableCell align="right">
                <RedText>-12%</RedText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Direct
              </TableCell>
              <TableCell align="right">54</TableCell>
              <TableCell align="right">
                <GreenText>+46%</GreenText>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Other
              </TableCell>
              <TableCell align="right">146</TableCell>
              <TableCell align="right">
                <GreenText>+24%</GreenText>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default withTheme(DoughnutChart);
