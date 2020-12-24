import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { character } from "../../../../helpers/resourcesMaping";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: "black",
    marginTop: "50px",
  },
  Paper: {
    display: "inline-flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const characterParts = Object.keys(character);
  let partsCount = 0;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const changeCharacter = (key, src) => {
    props.setSelectedCharacters({ ...props.selectedCharachter, [key]: src });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {characterParts &&
            characterParts.length > 0 &&
            // eslint-disable-next-line
            characterParts.map((part) => {
              if (part !== "shadow")
                return <Tab label={part} {...a11yProps(partsCount++)} />;
            })}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classes.Paper}>
            {Object.keys(character.body).map((body) => {
              return (
                <Paper
                  elevation={3}
                  style={{
                    backgroundImage: `url(${character.body[body]})`,
                    backgroundSize: "cover",
                  }}
                  onClick={() =>
                    changeCharacter("body", `${character.body[body]}`)
                  }
                />
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={classes.Paper}>
            {Object.keys(character.clothes).map((clothes) => {
              return (
                <Paper
                  elevation={3}
                  style={{
                    backgroundImage: `url(${character.clothes[clothes]})`,
                    backgroundSize: "cover",
                  }}
                  onClick={() =>
                    changeCharacter("clothes", `${character.clothes[clothes]}`)
                  }
                />
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className={classes.Paper}>
            {Object.keys(character.eyes).map((eyes) => {
              return (
                <Paper
                  elevation={3}
                  style={{
                    backgroundImage: `url(${character.eyes[eyes]})`,
                    backgroundSize: "cover",
                  }}
                  onClick={() =>
                    changeCharacter("eyes", `${character.eyes[eyes]}`)
                  }
                />
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <div className={classes.Paper}>
            {Object.keys(character.hair).map((hair) => {
              return (
                <Paper
                  elevation={3}
                  style={{
                    backgroundImage: `url(${character.hair[hair]})`,
                    backgroundSize: "cover",
                    marginTop: "10px",
                  }}
                  onClick={() =>
                    changeCharacter("hair", `${character.hair[hair]}`)
                  }
                />
              );
            })}
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
