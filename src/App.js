import PrimaryHeader from "./PrimaryHeader";
import SecondaryHeader from "./SecondaryHeader";
import MainCarousel from "./MainCarousel";
import HonorFxFeatures from "./HonorFxFeatures";
import StartTradingSection from "./StartTradingSection";
import AccountTypes from "./AccountTypes";
import WhatCanYouTradeSec from "./WhatCanYouTradeSec";
import AwardSection from "./AwardSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="homeScreenMainContent">
        <header className="mainHeader">
          <PrimaryHeader />
          <SecondaryHeader />
        </header>
        <MainCarousel />
        <HonorFxFeatures />
        <StartTradingSection />
        <AccountTypes />
        <WhatCanYouTradeSec />
        <AwardSection />
      </div>
    </div>
  );
}

export default App;
