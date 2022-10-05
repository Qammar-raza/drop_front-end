import React, { useState } from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { Paper, Typography } from "@mui/material";
import { ReactComponent as Logo } from "../../vendor/logo.svg";
// import SignUpComponent from "../../components/auth/SignUp";
import { useNavigate } from "react-router-dom";
import Input from "@mui/material/Input";
// import ButtonUnstyled, { ButtonUnstyledProps } from "@mui/base/ButtonUnstyled";
// import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InputBase from "@mui/material/InputBase";
import arrowup from "../../components/sidebar/assets/arrow-top.svg";
import arrowdown from "../../components/sidebar/assets/arrow-down.svg";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./signup.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "India",
  "America",
  "Russia",
  "Switzerland",
  "Sri Lanka",
  "Maldives",
  "Great Britain",
  "Canada",
  "Saudi Arabia",
  "Ukraine",
];

const CustomButtonRoot = styled("span")`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 10px 34px;
  border-radius: 5px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: 64px;
  height: 27px;
  border-radius: 1px;
  background-color: #ff0e2a;
`;
interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}
// function CustomButton(props: ButtonUnstyledProps) {
//   return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
// }
function SignUp() {
  const [firstPage, setFirstPage] = useState(true);
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [fourthPage, setFourthPage] = useState(false);
  const [fivethPage, setFivethPage] = useState(false);
  const [sixthPage, setSixthPage] = useState(false);
  const [seventhPage, setSeventhPage] = useState(false);
  const [eigthPage, setEigthPage] = useState(false);
  const [ninethPage, setNinethPage] = useState(false);
  const [tenthPage, setTenthPage] = useState(false);
  const [eleventhPage, setEleventhPage] = useState(false);
  const [twelvethPage, setTwelvethPage] = useState(false);
  const [thirteenthPage, setThirteenthPage] = useState(false);
  const [fourteenthPage, setFourteenthPage] = useState(false);
  const [fifteenthPage, setFifteenthPage] = useState(false);
  const [sixteenthPage, setSixteenthPage] = useState(false);
  const [seventeenthPage, setSeventeenthPage] = useState(false);
  const [eighteenthPage, setEighteenthPage] = useState(false);
  const [nineteenthPage, setNineteenthPage] = useState(false);
  const [twenteenthPage, setTwenteenthPage] = useState(false);
  const [personName, setPersonName] = React.useState<string[]>([]);

  const [usProducts, setUsProducts] = React.useState<string>();

  const [errorText, setErrorText] = React.useState<string>();

  const navigate = useNavigate();
  const [age, setAge] = React.useState<string | number>("");
  const [open, setOpen] = React.useState(false);

  const handleChangeCompany = (event: any) => {
    // setAge(event.target.value);
    setErrorText("");
    setCompanyData({
      ...companyData,
      company_state: event.target.value,
    });
  };
  const handleBusinessProfile = (event: any) => {
    // setAge(event.target.value);
    setErrorText("");
    setCompanyData({
      ...companyData,
      business_profile: event.target.value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangePassword =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCompanyData({ ...companyData, [prop]: event.target.value });
    };
  const handleClickShowPassword = () => {
    setCompanyData({
      ...companyData,
      showPassword: !companyData.showPassword,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [companyData, setCompanyData] = useState({
    companyName: "",
    fullName: "",
    email: "",
    num_products: "",
    avg_process_time: "",
    avg_us_time: "",
    avg_int_time: "",
    niche: "",
    web_url: "",
    us_products: "",
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    showPassword: false,
    countries_offer: "",
    vendor_id: "",
    company_address: "",
    city_name: "",
    company_state: "",
    company_zip: "",
    business_profile: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    pinterest: "",
    youtube: "",
    role: "",
    status: "",
    created_at: "",
    updated_at: "",
  });
  const finalSubmit = () => {
    const json = {
      company_name: companyData.companyName,
      first_name: companyData.first_name,
      last_name: companyData.last_name,
      username: companyData.username,
      password: companyData.password,
      email: companyData.email,
      current_products: companyData.num_products,
      ship_for_us: companyData.us_products,
      avg_processing_time: companyData.avg_process_time,
      avg_shipping_time_us: companyData.avg_us_time,
      avg_shipping_time_in: companyData.avg_int_time,
      countries_offer: companyData.countries_offer,
      niche: companyData.niche,
      company_website: companyData.web_url,
      company_address: companyData.company_address,
      city_name: companyData.city_name,
      company_state: companyData.company_state,
      company_zip: companyData.company_zip,
      business_profile: companyData.business_profile,
      facebook: companyData.facebook,
      instagram: companyData.instagram,
      twitter: companyData.twitter,
      linkedin: companyData.linkedin,
      pinterest: companyData.pinterest,
      youtube: companyData.youtube,
      role: companyData.role,
      status: companyData.status,
    };
    fetch("http://localhost:8080/api/vendor_requests", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setTimeout(redirectFunction, 5000);
      });
  };
  const handleFirstPage = () => {
    setErrorText("");
    var reg1 = /^[A-Za-z]*$/;
    if (companyData.companyName && reg1.test(companyData.companyName)) {
      setFirstPage(false);
      setSecondPage(true);
      setThirdPage(false);
      setFourthPage(false);
      setFivethPage(false);
      setSixthPage(false);
      setSeventhPage(false);
      setEigthPage(false);
      setNinethPage(false);
      setTenthPage(false);
      setEleventhPage(false);
      setTwelvethPage(false);
      setThirteenthPage(false);
      setFourteenthPage(false);
      setFifteenthPage(false);
      setSixteenthPage(false);
      setSeventeenthPage(false);
    } else {
      setErrorText("Invalid Format");
      return false;
    }
  };
  const handleFirstNext = () => {
    setSecondPage(true);
  };
  const handleSecondPage = () => {
    setErrorText("");
    var reg1 = /^[A-Za-z]*$/;
    if (
      companyData.first_name &&
      reg1.test(companyData.first_name) &&
      companyData.last_name &&
      reg1.test(companyData.last_name)
    ) {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(true);
      setFourthPage(false);
      setFivethPage(false);
      setSixthPage(false);
      setSeventhPage(false);
      setEigthPage(false);
      setNinethPage(false);
      setTenthPage(false);
      setEleventhPage(false);
      setTwelvethPage(false);
      setThirteenthPage(false);
      setFourteenthPage(false);
      setFifteenthPage(false);
      setSixteenthPage(false);
      setSeventeenthPage(false);
    } else {
      setErrorText("Invalid Format");
      return false;
    }
  };
  const handleSecondPre = () => {
    setFirstPage(true);
  };
  const handleSecondNext = () => {
    setSecondPage(true);
  };
  const handleThirdPage = () => {
    setErrorText("");
    var reg1 = /\S+@\S+\.\S+/;
    if (companyData.email && reg1.test(companyData.email)) {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(true);
      setFivethPage(false);
      setSixthPage(false);
      setSeventhPage(false);
      setEigthPage(false);
      setNinethPage(false);
      setTenthPage(false);
      setEleventhPage(false);
      setTwelvethPage(false);
      setThirteenthPage(false);
      setFourteenthPage(false);
      setFifteenthPage(false);
      setSixteenthPage(false);
      setSeventeenthPage(false);
    } else {
      setErrorText("Invalid Format");
      return false;
    }
  };
  const handleThirdPre = () => {
    setSecondPage(true);
  };
  const handleThirdNext = () => {
    setFourthPage(true);
  };
  const handleFourthPage = () => {
    setErrorText("");
    var reg1 = /^\d+$/;
    if (companyData.num_products && reg1.test(companyData.num_products)) {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(false);
      setFivethPage(true);
      setSixthPage(false);
      setSeventhPage(false);
      setEigthPage(false);
      setNinethPage(false);
      setTenthPage(false);
      setEleventhPage(false);
      setTwelvethPage(false);
      setThirteenthPage(false);
      setFourteenthPage(false);
      setFifteenthPage(false);
      setSixteenthPage(false);
      setSeventeenthPage(false);
    } else {
      setErrorText("Invalid Format");
      return false;
    }
  };
  const handleFourthPre = () => {
    setThirdPage(true);
  };
  const handleFourthNext = () => {
    setFivethPage(true);
  };
  const handleFivethPageYes = (el: any) => {
    setErrorText("");
    setCompanyData({
      ...companyData,
      us_products: "yes",
    });
    // setUsProducts("yes");
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(true);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
    setTwelvethPage(false);
    setThirteenthPage(false);
    setFourteenthPage(false);
    setFifteenthPage(false);
    setSixteenthPage(false);
    setSeventeenthPage(false);
  };
  const handleFivethPageNo = () => {
    setErrorText("");
    setCompanyData({
      ...companyData,
      us_products: "no",
    });
    // setUsProducts("no");
    console.log(companyData.us_products);
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(true);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
    setTwelvethPage(false);
    setThirteenthPage(false);
    setFourteenthPage(false);
    setFifteenthPage(false);
    setSixteenthPage(false);
    setSeventeenthPage(false);
  };
  const handleFivethPre = () => {
    setFourthPage(true);
  };
  const handleFivethNext = () => {
    setSixthPage(true);
  };
  const handleSixthPage = () => {
    setErrorText("");
    var reg1 = /^\d+$/;
    if (
      companyData.avg_process_time &&
      reg1.test(companyData.avg_process_time)
    ) {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(false);
      setFivethPage(false);
      setSixthPage(false);
      setSeventhPage(true);
      setEigthPage(false);
      setNinethPage(false);
      setTenthPage(false);
      setEleventhPage(false);
      setTwelvethPage(false);
      setThirteenthPage(false);
      setFourteenthPage(false);
      setFifteenthPage(false);
      setSixteenthPage(false);
      setSeventeenthPage(false);
    } else {
      setErrorText("Invalid Format");
      return false;
    }
  };
  const handleSeventhPre = () => {
    setSixthPage(true);
  };
  const handleSeventhNext = () => {
    setEigthPage(true);
  };
  const handleSeventhPage = () => {
    setErrorText("");
    var reg1 = /^\d+$/;
    if (companyData.avg_us_time && reg1.test(companyData.avg_us_time)) {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(false);
      setFivethPage(false);
      setSixthPage(false);
      setSeventhPage(false);
      setEigthPage(true);
      setNinethPage(false);
      setTenthPage(false);
      setEleventhPage(false);
      setTwelvethPage(false);
      setThirteenthPage(false);
      setFourteenthPage(false);
      setFifteenthPage(false);
      setSixteenthPage(false);
      setSeventeenthPage(false);
    } else {
      setErrorText("Invalid Format");
      return false;
    }
  };
  const handleEigthPre = () => {
    setSeventhPage(true);
  };
  const handleEigthNext = () => {
    setNinethPage(true);
  };
  const handleEigthPage = () => {
    setErrorText("");
    var reg1 = /^\d+$/;
    if (companyData.avg_int_time && reg1.test(companyData.avg_int_time)) {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(false);
      setFivethPage(false);
      setSixthPage(false);
      setSeventhPage(false);
      setEigthPage(false);
      setNinethPage(true);
      setTenthPage(false);
      setEleventhPage(false);
      setTwelvethPage(false);
      setThirteenthPage(false);
      setFourteenthPage(false);
      setFifteenthPage(false);
      setSixteenthPage(false);
      setSeventeenthPage(false);
    } else {
      setErrorText("Invalid Format");
      return false;
    }
  };
  const handleNinethPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(true);
    setEleventhPage(false);
    setTwelvethPage(false);
    setThirteenthPage(false);
    setFourteenthPage(false);
    setFifteenthPage(false);
    setSixteenthPage(false);
  };
  const handleNinethPre = () => {
    setEigthPage(true);
  };
  const handleNinethNext = () => {
    setTenthPage(true);
  };
  const handleTenthPage = () => {
    setErrorText("");
    var reg1 = /^[A-Za-z]*$/;
    if (companyData.niche && reg1.test(companyData.niche)) {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(false);
      setFivethPage(false);
      setSixthPage(false);
      setSeventhPage(false);
      setEigthPage(false);
      setNinethPage(false);
      setTenthPage(false);
      setEleventhPage(true);
      setTwelvethPage(false);
      setThirteenthPage(false);
      setFourteenthPage(false);
      setFifteenthPage(false);
      setSixteenthPage(false);
      setSeventeenthPage(false);
    } else {
      setErrorText("Invalid Format");
      return false;
    }
  };
  const handleTenthPre = () => {
    setNinethPage(true);
  };
  const handleTenthNext = () => {
    setEleventhPage(true);
  };
  const handleEleventhPage = () => {
    setErrorText("");
    var reg1 =
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    if (companyData.web_url && reg1.test(companyData.web_url)) {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(false);
      setFivethPage(false);
      setSixthPage(false);
      setSeventhPage(false);
      setEigthPage(false);
      setNinethPage(false);
      setTenthPage(false);
      setEleventhPage(false);
      setTwelvethPage(true);
      setThirteenthPage(false);
      setFourteenthPage(false);
      setFifteenthPage(false);
      setSixteenthPage(false);
      setSeventeenthPage(false);
    } else {
      setErrorText("Invalid Format");
      return false;
    }
  };
  const handleEleventhPre = () => {
    setTenthPage(true);
  };
  const handleEleventhNext = () => {
    setTwelvethPage(true);
  };
  const handleTwelvethPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
    setTwelvethPage(false);
    setThirteenthPage(true);
    setFourteenthPage(false);
    setFifteenthPage(false);
    setSixteenthPage(false);
    setSeventeenthPage(false);
  };
  const handleTwelvethPre = () => {
    setEleventhPage(true);
  };
  const handleTwelvethNext = () => {
    setThirteenthPage(true);
  };
  const handleThirteenthPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
    setTwelvethPage(false);
    setThirteenthPage(false);
    setFourteenthPage(true);
    setFifteenthPage(false);
    setSixteenthPage(false);
    setSeventeenthPage(false);
  };
  const handleThirteenthPre = () => {
    setTwelvethPage(true);
  };
  const handleThirteenthNext = () => {
    setFourteenthPage(true);
  };
  const handleFourteenthPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
    setTwelvethPage(false);
    setThirteenthPage(false);
    setFourteenthPage(false);
    setFifteenthPage(true);
    setSixteenthPage(false);
    setSeventeenthPage(false);
  };
  const handleFourteenthPre = () => {
    setTwelvethPage(true);
  };
  const handleFourteenthNext = () => {
    setFourteenthPage(true);
  };
  const handleFiveteenthPage = () => {
    setErrorText("");
    if (companyData.password) {
      setFirstPage(false);
      setSecondPage(false);
      setThirdPage(false);
      setFourthPage(false);
      setFivethPage(false);
      setSixthPage(false);
      setSeventhPage(false);
      setEigthPage(false);
      setNinethPage(false);
      setTenthPage(false);
      setEleventhPage(false);
      setTwelvethPage(false);
      setThirteenthPage(false);
      setFourteenthPage(false);
      setFifteenthPage(false);
      setSixteenthPage(true);
      setSeventeenthPage(false);
    } else {
      setErrorText("Please Enter your Password");
      return false;
    }
  };
  const handleFiveteenthPre = () => {
    setFourteenthPage(true);
  };
  const handleFiveteenthNext = () => {
    setSixteenthPage(true);
  };
  const handleSixteenthPage = () => {
    setFirstPage(false);
    setSecondPage(false);
    setThirdPage(false);
    setFourthPage(false);
    setFivethPage(false);
    setSixthPage(false);
    setSeventhPage(false);
    setEigthPage(false);
    setNinethPage(false);
    setTenthPage(false);
    setEleventhPage(false);
    setTwelvethPage(false);
    setThirteenthPage(false);
    setFourteenthPage(false);
    setFifteenthPage(false);
    setSixteenthPage(false);
    setSeventeenthPage(true);
    document.body.style.backgroundColor = "#ff0e2a";
    finalSubmit();
  };
  const redirectFunction = () => {
    navigate("/");
    document.body.style.backgroundColor = "#fff";
  };
  return (
    <React.Fragment>
      {/* <Brand /> */}
      {/* <Wrapper> */}
      <Helmet title="Sign Up" />
      <div className="signup-first">
        {firstPage &&
        !secondPage &&
        !thirdPage &&
        !fourthPage &&
        !fivethPage &&
        !sixthPage &&
        !seventhPage &&
        !eigthPage &&
        !ninethPage &&
        !tenthPage &&
        !eleventhPage &&
        !twelvethPage &&
        !thirteenthPage &&
        !fourteenthPage &&
        !fifteenthPage &&
        !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>Enter Full Name of your Company</h1>
              </li>
              <li>
                <Input
                  fullWidth={true}
                  value={companyData.companyName}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      companyName: e.target.value,
                    })
                  }
                  placeholder="Type your answer here..."
                />
              </li>
              <li className="validation-text">{errorText}</li>
              <li>
                <Button className="form-btn" onClick={handleFirstPage}>
                  OK
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav-first">
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>Enter the first and last name</h1>
              </li>
              <li className="full-name">
                <Input
                  value={companyData.first_name}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      first_name: e.target.value,
                    })
                  }
                  placeholder="first name"
                />
                <Input
                  value={companyData.last_name}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      last_name: e.target.value,
                    })
                  }
                  placeholder="last name"
                />
              </li>
              <li className="validation-text">{errorText}</li>
              <li>
                <Button className="form-btn" onClick={handleSecondPage}>
                  OK
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>Enter a valid email address</h1>
              </li>
              <li>
                <Input
                  fullWidth={true}
                  value={companyData.email}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      email: e.target.value,
                    })
                  }
                  placeholder="name@example.com"
                />
              </li>
              <li className="validation-text">{errorText}</li>
              <li>
                <Button className="form-btn" onClick={handleThirdPage}>
                  OK
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>How many products do you currently have?</h1>
              </li>
              <li>
                <Input
                  fullWidth={true}
                  value={companyData.num_products}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      num_products: e.target.value,
                    })
                  }
                  placeholder="Type your answer here..."
                />
              </li>
              <li className="validation-text">{errorText}</li>
              <li>
                <Button className="form-btn" onClick={handleFourthPage}>
                  OK
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>Do you ship your products from United States?</h1>
              </li>
              <li>
                <Stack spacing={2} direction="row">
                  <Button
                    className="form-btn"
                    value={usProducts}
                    onClick={handleFivethPageYes}
                  >
                    Yes
                  </Button>
                  <Button
                    className="form-btn btn-white"
                    value={usProducts}
                    onClick={handleFivethPageNo}
                  >
                    No
                  </Button>
                  {/* <Button	
                  variant="contained"	
                  color="error"	
                  onClick={handleFivethPage}	
                >	
                  Yes	
                </Button>	
                <Button variant="outlined" color="error">	
                  No	
                </Button> */}
                </Stack>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>What's your average processing time? (be specific)</h1>
              </li>
              <li>
                <Input
                  fullWidth={true}
                  value={companyData.avg_process_time}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      avg_process_time: e.target.value,
                    })
                  }
                  placeholder="Type your answer here...(e.g: 1-2 days)"
                />
              </li>
              <li className="validation-text">{errorText}</li>
              <li>
                <Button className="form-btn" onClick={handleSixthPage}>
                  OK
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>What's your average US shipping time? (be specific)</h1>
              </li>
              <li>
                <Input
                  fullWidth={true}
                  value={companyData.avg_us_time}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      avg_us_time: e.target.value,
                    })
                  }
                  placeholder="Type your answer here...(e.g: 1-2 days)"
                />
              </li>
              <li className="validation-text">{errorText}</li>
              <li>
                <Button className="form-btn" onClick={handleSeventhPage}>
                  OK
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>
                  What's your average international shipping time? (be specific)
                </h1>
              </li>
              <li>
                <Input
                  fullWidth={true}
                  value={companyData.avg_int_time}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      avg_int_time: e.target.value,
                    })
                  }
                  placeholder="Type your answer here...(e.g: 3 days)"
                />
              </li>
              <li className="validation-text">{errorText}</li>
              <li>
                <Button className="form-btn" onClick={handleEigthPage}>
                  OK
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>What's countries do you offer shipping to?</h1>
              </li>
              <li>
                <FormControl sx={{ m: 1 }} fullWidth>
                  <InputLabel
                    id="demo-multiple-checkbox-label"
                    className="select-countries-label"
                  >
                    Select countries
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select countries" />}
                    renderValue={(selected) => selected.join(", ")}
                    className="select-countries"
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </li>
              <li>
                <Button className="form-btn" onClick={handleNinethPage}>
                  OK
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>What's niche are your products in?</h1>
              </li>
              <li>
                <Input
                  fullWidth={true}
                  value={companyData.niche}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      niche: e.target.value,
                    })
                  }
                  placeholder="Home goods, apparel, jewelry etc."
                />
              </li>
              <li className="validation-text">{errorText}</li>
              <li>
                <Button className="form-btn" onClick={handleTenthPage}>
                  OK
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>Enter in the URL for your company website.</h1>
              </li>
              <li>
                <Input
                  fullWidth={true}
                  value={companyData.web_url}
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      web_url: e.target.value,
                    })
                  }
                  placeholder="https://"
                />
              </li>
              <li className="validation-text">{errorText}</li>
              <li>
                <Button className="form-btn" onClick={handleEleventhPage}>
                  OK
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 3 },
              width: 600,
              maxWidth: "100%",
            }}
            noValidate
            className="company-details"
            autoComplete="off"
          >
            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: "32px",
                color: "#464a53",
                fontWeight: 500,
                fontFamily: "Roboto",
              }}
              variant="h2"
              component="div"
              gutterBottom
            >
              Company Details
            </Typography>
            <TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              placeholder="Company Name LLC"
              sx={{ width: 310 }}
              // InputLabelProps={{
              //   style: {
              //     fontSize: "15px",
              //     color: "#464a53",
              //     fontFamily: "Circular Std",
              //   },
              // }}
              // inputProps={{
              //   style: {
              //     fontSize: "15px",
              //     color: "#abafb3",
              //     fontFamily: "Circular Std",
              //   },
              // }}
            />
            <TextField
              id="outlined-number"
              label="Vendor ID"
              type="number"
              variant="outlined"
              placeholder="00000000-00"
              sx={{ width: 235 }}
              // InputLabelProps={{
              //   style: {
              //     fontSize: "15px",
              //     color: "#464a53",
              //     fontFamily: "Circular Std",
              //   },
              // }}
              // inputProps={{
              //   style: {
              //     fontSize: "15px",
              //     color: "#abafb3",
              //     fontFamily: "Circular Std",
              //   },
              // }}
            />
            <TextField
              sx={{ width: 570 }}
              id="outlined-basic"
              label="Company Address"
              variant="outlined"
              placeholder="123 Address Way"
              // InputLabelProps={{
              //   style: {
              //     fontSize: "15px",
              //     color: "#464a53",
              //     fontFamily: "Circular Std",
              //   },
              // }}
              // inputProps={{
              //   style: {
              //     fontSize: "15px",
              //     color: "#abafb3",
              //     fontFamily: "Circular Std",
              //   },
              // }}
            />
            <TextField
              id="outlined-basic"
              label="City Name"
              variant="outlined"
              placeholder="City Name"
              sx={{ width: 310 }}
              // InputLabelProps={{
              //   style: {
              //     fontSize: "15px",
              //     color: "#464a53",
              //     fontFamily: "Circular Std",
              //   },
              // }}
              // inputProps={{
              //   style: {
              //     fontSize: "15px",
              //     color: "#abafb3",
              //     fontFamily: "Circular Std",
              //   },
              // }}
            />
            <FormControl sx={{ width: 90 }}>
              <InputLabel
                id="demo-controlled-open-select-label"
                // sx={{
                //   fontSize: "15px",
                //   color: "#464a53",
                //   fontFamily: "Circular Std",
                // }}
              >
                State
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                label="State"
                onChange={handleChangeCompany}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-number"
              label="Zip Code"
              type="number"
              variant="outlined"
              placeholder="000000"
              sx={{ width: 123 }}
              // InputLabelProps={{
              //   style: {
              //     fontSize: "15px",
              //     color: "#464a53",
              //     fontFamily: "Circular Std",
              //   },
              // }}
              // inputProps={{
              //   style: {
              //     fontSize: "15px",
              //     color: "#abafb3",
              //     fontFamily: "Circular Std",
              //   },
              // }}
            />
            <div>
              <Button className="form-btn" onClick={handleTwelvethPage}>
                Next
              </Button>
            </div>
          </Box>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 3 },
                width: 600,
                maxWidth: "100%",
              }}
              noValidate
              className="business-profile"
              autoComplete="off"
            >
              <FormHelperText
                sx={{
                  fontSize: "10px",
                  color: "#ff2740",
                  fontWeight: "400",
                  fontFamily: "Roboto",
                }}
              >
                Optional
              </FormHelperText>
              <Typography
                sx={{
                  fontSize: "15px",
                  lineHeight: "10px",
                  color: "#464a53",
                  fontWeight: 500,
                  fontFamily: "Roboto",
                }}
              >
                Business Profile
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#b1b1b1",
                  fontWeight: 400,
                  fontFamily: "Roboto",
                }}
              >
                Does your Company qualify as any of the following targeted
                diverse businesses? Minority Owned Business (at least 51%).
              </Typography>
              <FormControl
                fullWidth
                sx={{
                  border: "1px solid #dddfe1",
                }}
              >
                <InputLabel
                  id="demo-controlled-open-select-label"
                  sx={{
                    fontSize: "15px",
                    fontFamily: "Circular Std",
                  }}
                >
                  Choose One or more
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={age}
                  label="Choose One or more"
                  onChange={handleChangeCompany}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Stack spacing={2} direction="row">
                <Button
                  // sx={{
                  //   borderRadius: "5px",
                  //   backgroundColor: "#f4f4f4",
                  //   border: "1px solid #d1d1d1",
                  // }}
                  className="grey-btn"
                >
                  Black-owned
                </Button>
                <Button
                  // sx={{
                  //   borderRadius: "5px",
                  //   backgroundColor: "#f4f4f4",
                  //   border: "1px solid #d1d1d1",
                  // }}
                  className="grey-btn"
                >
                  Veteran-owned
                </Button>
              </Stack>
              <Button className="form-btn" onClick={handleThirteenthPage}>
                Next
              </Button>
            </Box>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          fourteenthPage &&
          !fifteenthPage &&
          !sixteenthPage ? (
          <>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 3 },
                width: 600,
                maxWidth: "100%",
              }}
              noValidate
              className="social-icon"
              autoComplete="off"
            >
              <FormHelperText
                sx={{
                  fontSize: "10px",
                  color: "#ff2740",
                  fontWeight: "400",
                  fontFamily: "Roboto",
                }}
              >
                Optional
              </FormHelperText>
              <Typography
                sx={{
                  fontSize: "15px",
                  lineHeight: "10px",
                  color: "#464a53",
                  fontWeight: 500,
                  fontFamily: "Roboto",
                }}
              >
                Connect with merchants on social!
              </Typography>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Paper
                    component="form"
                    sx={{
                      // p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <IconButton>
                      <FacebookIcon
                        sx={{
                          fontSize: "40px",
                          color: "#2b2b2b",
                        }}
                      />
                    </IconButton>
                    <InputBase
                      sx={{ p: 1, border: "1px solid #dddfe1" }}
                      placeholder="Enter your URL"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper
                    component="form"
                    sx={{
                      // p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <IconButton>
                      <InstagramIcon
                        sx={{ fontSize: "40px", color: "#2b2b2b" }}
                      />
                    </IconButton>
                    <InputBase
                      sx={{ p: 1, border: "1px solid #dddfe1" }}
                      placeholder="Enter your URL"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper
                    component="form"
                    sx={{
                      // p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <IconButton>
                      <LinkedInIcon
                        sx={{ fontSize: "40px", color: "#2b2b2b" }}
                      />
                    </IconButton>
                    <InputBase
                      sx={{ p: 1, border: "1px solid #dddfe1" }}
                      placeholder="Enter your URL"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper
                    component="form"
                    sx={{
                      // p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <IconButton>
                      <TwitterIcon
                        sx={{ fontSize: "40px", color: "#2b2b2b" }}
                      />
                    </IconButton>
                    <InputBase
                      sx={{ p: 1, border: "1px solid #dddfe1" }}
                      placeholder="Enter your URL"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper
                    component="form"
                    sx={{
                      // p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <IconButton>
                      <YouTubeIcon
                        sx={{ fontSize: "40px", color: "#2b2b2b" }}
                      />
                    </IconButton>
                    <InputBase
                      sx={{ p: 1, border: "1px solid #dddfe1" }}
                      placeholder="Enter your URL"
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper
                    component="form"
                    sx={{
                      // p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                    }}
                  >
                    <IconButton>
                      <PinterestIcon
                        sx={{ fontSize: "40px", color: "#2b2b2b" }}
                      />
                    </IconButton>
                    <InputBase
                      sx={{ p: 1, border: "1px solid #dddfe1" }}
                      placeholder="Enter your URL"
                    />
                  </Paper>
                </Grid>
              </Grid>
              <Button className="form-btn" onClick={handleFourteenthPage}>
                Next
              </Button>
            </Box>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          fifteenthPage &&
          !sixteenthPage ? (
          <>
            <ul>
              <li>
                <FormControl
                  sx={{ m: 1, textAlign: "center" }}
                  fullWidth
                  variant="standard"
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={companyData.showPassword ? "text" : "password"}
                    value={companyData.password}
                    onChange={handleChangePassword("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {companyData.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </li>
              <li>
                <Button className="form-btn" onClick={handleFiveteenthPage}>
                  Next
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : !firstPage &&
          !secondPage &&
          !thirdPage &&
          !fourthPage &&
          !fivethPage &&
          !sixthPage &&
          !seventhPage &&
          !eigthPage &&
          !ninethPage &&
          !tenthPage &&
          !eleventhPage &&
          !twelvethPage &&
          !thirteenthPage &&
          !fourteenthPage &&
          !fifteenthPage &&
          sixteenthPage ? (
          <>
            <ul>
              <li>
                <h1>Congratulations! Let’s set up your profile.</h1>
              </li>
              <li>
                <Button className="form-btn" onClick={handleSixteenthPage}>
                  Next
                </Button>
              </li>
            </ul>
            <ul className="bottom-nav">
              <li className="pre-arrow">
                <img src={arrowup} />
              </li>
              <li className="next-arrow">
                <img src={arrowdown} />
              </li>
            </ul>
          </>
        ) : (
          <p className="sign-up-para">
            Thank you for submitting an application to be a Drophook supplier!
            As of right now, you’re on the waiting list of America’s most
            trusted marketplace of online distributers. You’ll receive a
            confirmation email from us shortly. As soon as a spot opens up, and
            we think you’d be a good fit, we’ll be back in touch with you.
          </p>
        )}
      </div>

      {/* <Typography component="h1" variant="h4" align="center" gutterBottom>
          Get started
        </Typography>
        <Typography component="h2" variant="body1" align="center">
          Start creating the best possible user experience for you customers
        </Typography>

        <SignUpComponent /> */}
      {/* </Wrapper> */}
    </React.Fragment>
  );
}

export default SignUp;
