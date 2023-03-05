import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./App.css";

const WhatCanYouTradeSec = () => {
  const [hoverElement, setHoverElement] = useState("forex");
  return (
    <div className="whyHonorFxSec">
      <div className="whyHonorFxContainer">
        <div className="whyHonorTextWrap">
          <h2 className="welcomeText inlineBlock">What can you</h2>
          <h2 className="welcomeText orangeHeadText inlineBlock ml-10">
            Trade
          </h2>
          <h2 className="welcomeText orangeHeadText inlineBlock ml-10">?</h2>
          <div class="greyText">
            With HonorFX, You can trade on major markets across 4 assets classes
            including FX, Indices, Shares, Spot Metals and CFDs
          </div>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          className={`${hoverElement}`}
          textAlign="left"
        >
          <Grid item md={6} container direction="column" alignItems="center">
            <Grid
              item
              className={
                hoverElement === "forex" ? "descCard activeCard" : "descCard"
              }
              onMouseOver={() => setHoverElement("forex")}
            >
              <div className="descHeadText">Forex</div>
              <div
                className={
                  hoverElement === "forex"
                    ? "descriptionText whiteDescText"
                    : "descriptionText"
                }
              >
                Trade 40 currency pairs including major, minor and crosses with
                ultra-low spreads and immediate execution
              </div>
              <div className="font-16 orangeHeadText font600 mt-10">
                Learn More>>
              </div>
            </Grid>
            <Grid
              item
              className={
                hoverElement === "futures" ? "descCard activeCard" : "descCard"
              }
              onMouseOver={() => setHoverElement("futures")}
            >
              <div className="descHeadText">Futures</div>
              <div
                className={
                  hoverElement === "futures"
                    ? "descriptionText whiteDescText"
                    : "descriptionText"
                }
              >
                Trade on Metals (Gold, Silver & Copper) and Energy (Crude, Brent
                & Natural gas)
              </div>
              <div className="font-16 orangeHeadText font600 mt-10">
                Learn More>>
              </div>
            </Grid>
            <Grid
              item
              className={
                hoverElement === "stocks" ? "descCard activeCard" : "descCard"
              }
              onMouseOver={() => setHoverElement("stocks")}
            >
              <div className="descHeadText">Stocks</div>
              <div
                className={
                  hoverElement === "stocks"
                    ? "descriptionText whiteDescText"
                    : "descriptionText"
                }
              >
                Take position over 65+ shares across UK, US and European markets
                on popular shares including Amazon, Boeing, Facebook and Netflix
              </div>
              <div className="font-16 orangeHeadText font600 mt-10">
                Learn More>>
              </div>
            </Grid>
            <Grid
              item
              className={
                hoverElement === "indices" ? "descCard activeCard" : "descCard"
              }
              onMouseOver={() => setHoverElement("indices")}
            >
              <div className="descHeadText">Indices</div>
              <div
                className={
                  hoverElement === "indices"
                    ? "descriptionText whiteDescText"
                    : "descriptionText"
                }
              >
                Trade on basket of top shares representing the performance of a
                country’s economy
              </div>
              <div className="font-16 orangeHeadText font600 mt-10">
                Learn More>>
              </div>
            </Grid>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default WhatCanYouTradeSec;
