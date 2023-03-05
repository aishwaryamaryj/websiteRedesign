import { Button, Grid } from "@mui/material";
import Slider from "react-slick";
import "./App.css";

function MainCarousel() {
  const sliderSettings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carouselLayout">
      <Slider {...sliderSettings} className="carouselLayoutWrapper">
        <div className="featureCardContainer">
          <Grid
            container
            className=""
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={8}>
              <img
                src="https://multibankfx.com/public_files/images/home/animated-home/security-of-funds/mfx-security-of-funds.webp"
                alt="logo"
                className="carouselImgStyle2"
              />
            </Grid>
            <Grid item xs={12} md={4} textAlign="left">
              <div className="carouselTextWrap">
                <div className="mb-10 ">
                  <h3 className="welcomeText orangeHeadText inlineBlock">
                    Metatrader
                  </h3>
                  <h3 className="welcomeText inlineBlock ml-10">5</h3>
                </div>
                <Grid container>
                  <Grid
                    item
                    className="blueText font-20 font500"
                    textAlign="left"
                  >
                    Download the next generation trading platform MT5 and start
                    trading through our Standard, ECN or Premium account.
                  </Grid>
                  <Button
                    variant="contained"
                    className="contained200BtnStyle mt-20"
                  >
                    Download MTS
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="featureCardContainer carouselLayoutWrapper">
          <Grid
            container
            className=""
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={8}>
              <img
                src="https://www.fxpro.com/assets/img/sections/section-platforms-and-tools/hero-banner-new-desktop.webp"
                alt="logo"
                className="carouselImgStyle1"
              />
            </Grid>
            <Grid item xs={12} md={4} textAlign="left">
              <div className="carouselTextWrap">
                <div className="mb-10">
                  <h3 className="welcomeText m-0 orangeHeadText">
                    Multi-Assets
                  </h3>
                  <h3 className="font-42 font700 m-0 pb-0">To Diversify</h3>
                  <h3 className="font-42 font700 m-0 pb-0">Your Portfolio</h3>
                </div>
                <Grid container>
                  <Grid
                    item
                    className="blueText font-20 font500"
                    textAlign="left"
                  >
                    Download the next generation trading platform MT5 and start
                    trading through our Standard, ECN or Premium account.
                  </Grid>
                  <Button
                    variant="contained"
                    className="contained200BtnStyle mt-20"
                  >
                    View our instruments
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="featureCardContainer">
          <Grid
            container
            className=""
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={8}>
              <img
                src="https://eu-images.contentstack.com/v3/assets/bltaec35894448c7261/bltdef9a063810ffde2/62dfc9a59e5b7f4a84b80132/PEP_Website_UK_EURUSD_355x344.png/?&height=750&auto=webp"
                alt="logo"
                className="carouselImgStyle1"
              />
            </Grid>
            <Grid item xs={12} md={4} textAlign="left">
              <div className="carouselTextWrap">
                <div className="mb-10 ">
                  <h3 className="welcomeText orangeHeadText inlineBlock">
                    Metatrader
                  </h3>
                  <h3 className="welcomeText inlineBlock ml-10">5</h3>
                </div>
                <Grid container>
                  <Grid
                    item
                    className="blueText font-20 font500"
                    textAlign="left"
                  >
                    Download the next generation trading platform MT5 and start
                    trading through our Standard, ECN or Premium account.
                  </Grid>
                  <Button
                    variant="contained"
                    className="contained200BtnStyle mt-20"
                  >
                    Download MTS
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </Slider>
    </div>
  );
}

export default MainCarousel;
