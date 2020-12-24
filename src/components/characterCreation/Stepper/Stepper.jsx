import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Character from "../Steps/KidCharacter/Character";
import Content from "../Steps/Content/Content";
import KidName from "../Steps/Name/KidName";
import Preview from "../Steps/Preview/Preview";
import { character } from "../../../helpers/resourcesMaping";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margim: "auto",
  },
  backButton: {
    margin: "auto",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minHeight: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const getSteps = () => {
  return ["Name", "Character", "Content"];
};

const AppStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const [name, setName] = useState("");
  const [selectedCharachter, setSelectedCharacters] = useState({
    body: character.body.brownBody,
    clothes: character.clothes.tshirt,
    hair: character.hair.brownHair,
    eyes: character.eyes.brownEyes,
  });
  const [selectedCartoons, setSelectedCartoons] = useState([]);

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <KidName name={name} setName={(newName) => setName(newName)} />;
      case 1:
        return (
          <Character
            setSelectedCharacters={(newChar) => setSelectedCharacters(newChar)}
            selectedCharachter={selectedCharachter}
          />
        );
      case 2:
        return (
          <Content
            selectedCartoons={selectedCartoons}
            setSelectedCartoons={(char) => setSelectedCartoons(char)}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel id="stepper">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              <Preview
                name={name}
                selectedCharachter={selectedCharachter}
                selectedCartoons={selectedCartoons}
              />
            </Typography>
            <Button onClick={handleReset} style={{margin:"auto", display:"table"}}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div style={{margin:"auto", display:"table"}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppStepper;
