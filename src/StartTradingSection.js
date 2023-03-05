import { Button, Grid } from "@mui/material";
import {
  Android,
  Apple,
  DesktopMacOutlined,
  Window,
} from "@mui/icons-material";
import "./App.css";

function StartTradingSection() {
  return (
    <div className="startTradeSec pb-30">
      <Grid container direction="row" alignItems="center">
        <Grid
          container
          item
          md={6}
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="startTradeWrapper"
        >
          <h2 class="whiteHeadText">Download Metatrader 5</h2>
          <h2 className="orangeHeadText secondHead">
            and experience the best of trading
          </h2>
          <Grid
            container
            direction="row"
            alignItems="center"
            className="metaTradeWrapper whiteText p-10"
            md={6}
            justifySelf="center"
          >
            <Grid item md={3}>
              <Android fontSize="large" />
              <div>Android</div>
            </Grid>
            <Grid item md={3}>
              <Apple fontSize="large" />
              <div>Apple</div>
            </Grid>
            <Grid item md={3}>
              <DesktopMacOutlined fontSize="large" />
              <div>Mac os</div>
            </Grid>
            <Grid item md={3}>
              <Window fontSize="large" />
              <div>Windows</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} alignSelf="start">
          <h2 class="whiteHeadText">Start Trading Now</h2>
          <h2 className="orangeHeadText secondHead pb-20">
            or Try Demo Account
          </h2>
          <div>
            <Button variant="contained" className="containedBtnOrange mr-10">
              Open Live Account
            </Button>
            <Button variant="outlined" className="outlinedBtnOrange">
              Open Demo Account
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default StartTradingSection;
