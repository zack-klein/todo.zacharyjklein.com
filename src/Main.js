import React from 'react';
import Base from './Base'
import Home from './Home';
import Cookies from 'js-cookie'


import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#304ffe',
    },
    error: {
      main: "#ff604f"
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#304ffe',
    },
    error: {
      main: "#ff604f"
    },
  },
});

const themes = {
  "dark": darkTheme,
  "light": lightTheme,
}

const Main = () => {

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Handle Dark Mode
  var checked = false;
  var currentTheme = "light";
  if (Cookies.get("theme") === "dark") {
    checked = true;
    currentTheme = "dark";
  };

  const [state, setState] = React.useState({
    checked: checked,
    theme: themes[currentTheme],
    resumaydayData: null,
  });

  const handleChange = (event) => {

    if (event.target.checked) {
      Cookies.set("theme", "dark");
    } else {
      Cookies.set("theme", "light");
    }
    setState({ ...state, [event.target.name]: event.target.checked, theme: themes[Cookies.get("theme")] });
  };

  return (
    <Base
      page={<Home />}
      darkModeChanger={handleChange}
      state={state}
      drawerOpener={handleDrawerOpen}
      drawerCloser={handleDrawerClose}
      currentTheme={state.theme}
      drawerOpen={open}
    />
  );
}

export default Main;
