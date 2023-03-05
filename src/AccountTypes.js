import { Button, Grid } from "@mui/material";
import "./App.css";

function AccountTypes() {
  return (
    <div className="accountSecContainer">
      <div className="accountsTextContainer">
        <h2 className="welcomeText whiteText inlineBlock">Accounts</h2>
        <h2 className="welcomeText orangeHeadText inlineBlock ml-10">
          We Provide
        </h2>
        <div class="greyText accountTextArea">
          HonorFX provides true ECN connectivity, so our clients have direct
          access to other participants in equity and currency markets using best
          conditions for their trading experience. Choose a trading account that
          suits your trading style
        </div>
      </div>
      <div className="accountsCardContainer">
        <Grid
          container
          display="column"
          justifyContent="center"
          alignItems="center"
        >
          <table className="accountTable">
            <tr>
              <th className="tableHeadRowElem"></th>
              <th className="tableHeadRowElem">Leverage</th>
              <th className="tableHeadRowElem">Min.Deposit</th>
              <th className="tableHeadRowElem">Spread from</th>
              <th className="tableHeadRowElem">Commission</th>
              <th className="tableHeadRowElem">SWAPS</th>
              <th className="tableHeadRowElem">Platform</th>
            </tr>
            <tr>
              <td className="accountCardHead standard">Standard</td>
              <td>1:500</td>
              <td>$100</td>
              <td>1.5</td>
              <td>No</td>
              <td>Yes</td>
              <td>MT5</td>
            </tr>
            <tr>
              <td className="accountCardHead premium">Premium</td>
              <td>1:500</td>
              <td>$100</td>
              <td>1.8</td>
              <td>No</td>
              <td>Yes</td>
              <td>MT5</td>
            </tr>
            <tr>
              <td className="accountCardHead ecn">ECN</td>
              <td>1:200</td>
              <td>$10,000</td>
              <td>0.2</td>
              <td>$7 per lot</td>
              <td>Yes</td>
              <td>MT5</td>
            </tr>
          </table>
        </Grid>
      </div>
      <Button variant="contained" className="containedBigBtnStyle">
        Compare Accounts
      </Button>
    </div>
  );
}

export default AccountTypes;
