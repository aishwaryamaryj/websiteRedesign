import { Grid } from "@mui/material";
import "./App.css";
import Slider from "react-slick";

function AwardSection() {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    speed: 100,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerMode: true,
          dots: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          dots: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="platformContainer">
      <div className="accountsTextContainer whyHonorFxContainer pb-20">
        <h2 className="welcomeText whiteText inlineBlock">Award-Winning</h2>
        <h2 className="welcomeText orangeHeadText inlineBlock ml-10">
          Award-Winning
        </h2>
        <div class="greyText accountTextArea">
          The global forex industry has recognized HonorFX's accomplishments and
          has felicitated us with the highest accolades for our products and
          services.
        </div>
      </div>
      <div className="awardCarousel">
        <Slider {...sliderSettings} className="carouselLayoutWrapper">
          <div className="awardSliderWrapper">
            <Grid container direction="row">
              <Grid item>
                <img
                  src="https://www.honorfx.com/assets/images/awards/award6.png"
                  alt="logo"
                  className="awardImgStyle"
                />
              </Grid>
              <Grid item className="awardContentWrap">
                <img
                  src="https://www.honorfx.com/assets/images/awards/award-icon.png"
                  alt="logo"
                  className="awardIconStyle"
                />
                <div class="awardCardTextWrap">
                  <div class="awardCardTitle whiteText mt-10">
                    Most Trusted Trading Broker
                  </div>
                  <div class="awardCardSubtitle whiteText">Forex Expo</div>
                  <div class="awardCardLocation orangeHeadText font600">
                    2022, DUBAI
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="awardSliderWrapper">
            <Grid container direction="row">
              <Grid item>
                <img
                  src="https://www.honorfx.com/assets/images/awards/award5.png"
                  alt="logo"
                  className="awardImgStyle"
                />
              </Grid>
              <Grid item className="awardContentWrap">
                <img
                  src="https://www.honorfx.com/assets/images/awards/award-icon.png"
                  alt="logo"
                  className="awardIconStyle"
                />
                <div class="awardCardTextWrap">
                  <div class="awardCardTitle whiteText mt-10">
                    Best Trading Experience
                  </div>
                  <div class="awardCardSubtitle whiteText">
                    Wiki Finance Expo
                  </div>
                  <div class="awardCardLocation orangeHeadText font600">
                    2022, DUBAI
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="awardSliderWrapper">
            <Grid container direction="row">
              <Grid item>
                <img
                  src="https://www.honorfx.com/assets/images/awards/award1.png"
                  alt="logo"
                  className="awardImgStyle"
                />
              </Grid>
              <Grid item className="awardContentWrap">
                <img
                  src="https://www.honorfx.com/assets/images/awards/award-icon.png"
                  alt="logo"
                  className="awardIconStyle"
                />
                <div class="awardCardTextWrap">
                  <div class="awardCardTitle whiteText mt-10">
                    Best Growing Broker
                  </div>
                  <div class="awardCardSubtitle whiteText">
                    Forex Trader Summit
                  </div>
                  <div class="awardCardLocation orangeHeadText font600">
                    2021, DUBAI
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="awardSliderWrapper">
            <Grid container direction="row">
              <Grid item>
                <img
                  src="https://www.honorfx.com/assets/images/awards/award2.png"
                  alt="logo"
                  className="awardImgStyle"
                />
              </Grid>
              <Grid item className="awardContentWrap">
                <img
                  src="https://www.honorfx.com/assets/images/awards/award-icon.png"
                  alt="logo"
                  className="awardIconStyle"
                />
                <div class="awardCardTextWrap">
                  <div class="awardCardTitle whiteText mt-10">
                    Best IB Program
                  </div>
                  <div class="awardCardSubtitle whiteText">Forex Expo</div>
                  <div class="awardCardLocation orangeHeadText font600">
                    2021, DUBAI
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="awardSliderWrapper">
            <Grid container direction="row">
              <Grid item>
                <img
                  src="	https://www.honorfx.com/assets/images/awards/award3.png"
                  alt="logo"
                  className="awardImgStyle"
                />
              </Grid>
              <Grid item className="awardContentWrap">
                <img
                  src="https://www.honorfx.com/assets/images/awards/award-icon.png"
                  alt="logo"
                  className="awardIconStyle"
                />
                <div class="awardCardTextWrap">
                  <div class="awardCardTitle whiteText mt-10">
                    Fastest Growing
                  </div>
                  <div class="awardCardTitle whiteText"> Forex Broker</div>
                  <div class="awardCardSubtitle whiteText">Investment Expo</div>
                  <div class="awardCardLocation orangeHeadText font600">
                    2021, EGYPT
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AwardSection;
