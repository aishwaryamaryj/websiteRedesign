import { Grid } from "@mui/material";
import "./App.css";

function HonorFxFeatures() {
  return (
    <div className="honorFxFeaturesSec">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="featureCardWrapper p-10"
      >
        <Grid item md={2} className="featureCard">
          <Grid item container direction="row" alignItems="center">
            <div className="featureBigText orangeHeadText mr-20">0.2</div>
            <div className="featureSmallText whiteText">Spread as low as</div>
          </Grid>
        </Grid>
        <Grid item md={2} className="featureCard pl-10">
          <Grid item container direction="row" alignItems="center">
            <div className="featureBigText orangeHeadText mr-20">2</div>
            <div className="featureSmallText whiteText">
              Financial Regulators
            </div>
          </Grid>
        </Grid>
        <Grid item md={2} className="featureCard pl-10">
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item md={4}>
              <div className="featureBigText orangeHeadText mr-20">0</div>
            </Grid>
            <Grid item md={8} className="featureSmallText whiteText">
              Fees on withdrawal & deposit
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2} className="featureCard pl-10">
          <Grid item container direction="row" alignItems="center">
            <div className="featureBigText orangeHeadText mr-20">275+</div>
            <div className="featureSmallText whiteText">
              Instruments to trade
            </div>
          </Grid>
        </Grid>
        <Grid item md={2} className="featureCard pl-10">
          <Grid item container direction="row" alignItems="center">
            <div className="featureBigText orangeHeadText mr-20">16</div>
            <div className="featureSmallText whiteText">Payment methods</div>
          </Grid>
        </Grid>
        <Grid item md={2} className="pl-10">
          <Grid item container direction="row" alignItems="center">
            <div className="featureBigText orangeHeadText mr-20">24/5</div>
            <div className="featureSmallText whiteText">Customer service</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HonorFxFeatures;
