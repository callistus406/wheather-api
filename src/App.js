import { React, useEffect, useState } from "react";
import "@fontsource/roboto";
import "./App.css";
import { script } from "./script";
import axios from "axios";
import head from "./img/night/pexels-pixabay-36717.jpg";
// import PersistentDrawerRight from "./PersistentDrawerRight";
import TwitterIcon from "@material-ui/icons/Twitter";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
// FAB import
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import NavigationIcon from "@material-ui/icons/Navigation";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
const drawerWidth = 240;

const fabStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function NextButton() {
  const classes = fabStyles();
  return (
    <div className={classes.root}>
      <Fab
        aria-label="add"
        size="small "
        style={{ background: "#26283A", color: "white" }}
      >
        <NavigateNextIcon />
      </Fab>
    </div>
  );
}
const useStyles2 = makeStyles({
  root: {
    background: "#2b2d42",
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

let country = "Nigeria";
function App() {
  function PersistentDrawerRight(props) {
    let initialState = "";
    // let [country, setCountry] = u  seState(initialState);
    const handleAction = (e) => {
      country = e.target.textContent;
      // setCountry(e.target.textContent);
      console.log(country);
      axios({
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=4d47712ce868cdb474c3fc53d9e2183e`,
      })
        .then((res) => {
          setWeather(res.data);
          console.log(res.data);
        })

        .catch((err) => console.log(err));
    };

    const classes = useStyles();
    const theme = useTheme();
    const customStyle = useStyles2();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, customStyle.root, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Typography variant="h6" noWrap className={classes.title}>
              Weather App
            </Typography>
            <Typography variant="h6" noWrap className={classes.title}>
              {props.date}
            </Typography>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Nigeria", "Ghana", "Rwanda", "Egypt"].map((text, index) => (
              <ListItem button key={text} onClick={handleAction}>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["London", "Spain", "Italy"].map((text, index) => (
              <ListItem button key={text} onClick={handleAction}>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    // fetch(
    //   "https://api.openweathermap.org/data/2.5/forecast?q=Nigeria&appid=4d47712ce868cdb474c3fc53d9e2183e"
    // ).then((res) => {
    //   setWeather(res.data);
    //   console.log(weather);
    // });
    axios({
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=4d47712ce868cdb474c3fc53d9e2183e`,
    })
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Saturday",
    "Friday",
  ];
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function day(input) {
    let d = new Date(input);
    let dayName = days[d.getDay()];

    return dayName;
  }
  let today = new Date();
  console.log(today);
  function month(input) {
    let m = new Date(input);
    let monthName = monthArray[m.getMonth()];
    return monthName;
  }
  function Card() {
    function Box(props) {
      return (
        <div className="box">
          <h3>{day(weather.list[0].dt_txt.slice(0, 10))}</h3>

          <div className="days">
            <img
              src={`http://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`}
              alt="icon"
            />
          </div>
          <div className="tmp">
            <h4>{Math.floor(weather.list[0].main.temp - 273.15)}</h4>
            <span>
              <sup>o</sup>
            </span>
          </div>
          <p>{weather.list[0].weather[0].description}</p>
        </div>
      );
    }
    return (
      <div className="card-container">
        <div className="card-header">
          <img src={head} alt="paris" className="paris" />
          <div className="inner-container">
            <div className="temperature">
              <div className="temp-text">
                <h1>{Math.floor(weather.list[0].main.temp - 273.15)}</h1>
                <span>
                  <sup>o</sup>
                </span>
              </div>
              <p>{weather.list[0].weather[0].description}</p>
            </div>
            <div className="country-name">
              <h2>{weather.city.name}</h2>
              <div className="underline"></div>
            </div>
          </div>
          <div className="humidity-wind">
            <div className="humidity">
              <h6>HUMIDITY</h6>
              <p>{weather.list[0].main.humidity}%</p>
            </div>
            <div className="separator"></div>
            <div className="wind">
              <h6>WIND</h6>
              <p>{weather.list[0].wind.speed} K/M</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="quotes">
            <div className="daily-quotes">
              <div className="daily-quotes-logo">
                <TwitterIcon />
              </div>
              <h3>Daily Quotes</h3>
            </div>
            <div className="quote-text-container">
              <div className="quote-text">
                <div className="quote-icon"></div>
                <p>Die with memories, not dreams.</p>
              </div>
              <div className="quote-text">
                <div className="quote-icon"></div>
                <p>Every moment is a fresh beginning.</p>
              </div>
              <div className="next-btn">
                <NextButton />
              </div>
            </div>
          </div>
          <div className="quotes-separator"></div>
          <div className="weather-content">
            <div className="box">
              <h3>{day(weather.list[3].dt_txt.slice(0, 10))}</h3>

              <div className="days">
                <img
                  src={`http://openweathermap.org/img/w/${weather.list[3].weather[0].icon}.png`}
                  alt="icon"
                />
              </div>
              <div className="tmp">
                <h4>{Math.floor(weather.list[3].main.temp - 273.15)}</h4>
                <span>
                  <sup>o</sup>
                </span>
              </div>
              <div className="para">
                <p>{weather.list[3].weather[0].description}</p>
              </div>
            </div>
            {/*  */}

            <div className="box">
              <h3>{day(weather.list[11].dt_txt.slice(0, 10))}</h3>

              <div className="days">
                <img
                  src={`http://openweathermap.org/img/w/${weather.list[11].weather[0].icon}.png`}
                  alt="icon"
                />
              </div>

              <div className="tmp">
                <h4>{Math.floor(weather.list[11].main.temp - 273.15)}</h4>

                <span>
                  <sup>o</sup>
                </span>
              </div>
              <div className="para">
                <p>{weather.list[11].weather[0].description}</p>
              </div>
            </div>

            <div className="box">
              <h3>{day(weather.list[19].dt_txt.slice(0, 10))}</h3>

              <div className="days">
                <img
                  src={`http://openweathermap.org/img/w/${weather.list[19].weather[0].icon}.png`}
                  alt="icon"
                />
              </div>
              <div className="tmp">
                <h4>{Math.floor(weather.list[19].main.temp - 273.15)}</h4>
                <span>
                  <sup>o</sup>
                </span>
              </div>
              <div className="para">
                <p>{weather.list[19].weather[0].description}</p>
              </div>
            </div>

            <div className="box">
              <h3>{day(weather.list[27].dt_txt.slice(0, 10))}</h3>

              <div className="days">
                <img
                  src={`http://openweathermap.org/img/w/${weather.list[27].weather[0].icon}.png`}
                  alt="icon"
                />
              </div>
              <div className="tmp">
                <h4>{Math.floor(weather.list[27].main.temp - 273.15)}</h4>
                <span>
                  <sup>o</sup>
                </span>
              </div>
              <div className="para">
                <p>{weather.list[27].weather[0].description}</p>
              </div>
            </div>

            <div className="box">
              <h3>{day(weather.list[35].dt_txt.slice(0, 10))}</h3>

              <div className="days">
                <img
                  src={`http://openweathermap.org/img/w/${weather.list[35].weather[0].icon}.png`}
                  alt="icon"
                />
              </div>
              <div className="tmp">
                <h4>{Math.floor(weather.list[35].main.temp - 273.15)}</h4>
                <span>
                  <sup>o</sup>
                </span>
              </div>
              <div className="para">
                <p>{weather.list[35].weather[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  let customClass = undefined;

  let [toggleClass, setToggleClass] = useState("close");
  // console.log(drawer);
  let menuOpen = true;

  const trigger = () => {
    console.log(toggleClass);

    if (!menuOpen) {
      setToggleClass((toggleClass = "open"));

      menuOpen = true;
      // drawer.style.marginLeft = "-50%";
    } else {
      // console.log(menuBtn);
      setToggleClass((toggleClass = ""));

      // drawer.style.left = "101%";
      menuOpen = false;
    }
  };
  if (weather.length === 0) {
    return (
      <div>
        <h1 class="fifth">Loading...</h1>
        <div id="pulse-wrapper">
          <div id="pulse">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="p-container">
          <PersistentDrawerRight
            date={`${day(weather.list[0].dt_txt.slice(0, 14))} - ${
              today.getDate() + 1
            }  - ${month(weather.list[0].dt_txt.slice(0, 10))}`}
          />

          <Card />
        </div>
      </div>
    );
  }
}

export default App;
