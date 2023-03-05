import { Button, Grid, ButtonGroup } from "@mui/material";
import "./App.css";

function PrimaryHeader() {
  return (
    <div className="primaryHeader">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item alignSelf="start" className="p-10">
          <a href="/" class="header_logo">
            <img
              src="https://www.honorfx.com/assets/images/logo_color.svg"
              alt="logo"
            />
          </a>
        </Grid>
        <Grid item className="p-20">
          <ButtonGroup variant="text" aria-label="text button group">
            {/* <Button className="menuStyle">About Us</Button> */}
            <Button className="menuStyle"> Account Types</Button>
            <Button className="menuStyle">Trading Platform</Button>
            <Button className="menuStyle">Payment Methods</Button>
            <Button className="menuStyle"> Markets</Button>
            <Button className="menuStyle">Promotions</Button>
            <Button className="menuStyle">Partnerships</Button>
            <Button className="menuStyle">Tools</Button>
            {/* <Button className="menuStyle">Contact Us</Button> */}
          </ButtonGroup>
        </Grid>
        <Grid item className="p-20">
          <Button variant="outlined" className="outlinedBtnOrange mr-10">
            Login
          </Button>
          <Button variant="contained" className="containedBtnOrange">
            Open Account
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default PrimaryHeader;
