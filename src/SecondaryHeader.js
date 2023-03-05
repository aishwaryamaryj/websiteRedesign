import { Button, Grid, ButtonGroup } from "@mui/material";
import "./App.css";

function SecondaryHeader() {
  return (
    <div className="secHeader">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="p-20">
          <ButtonGroup variant="text" aria-label="text button group">
            <Button className="menuStyle">About Us</Button>
            <Button className="menuStyle">Contact Us</Button>
            <Button className="menuStyle">Language</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
}

export default SecondaryHeader;
