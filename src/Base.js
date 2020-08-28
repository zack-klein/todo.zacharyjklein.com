import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Switch from '@material-ui/core/Switch';
import useStyles from './styles';
import { ThemeProvider } from '@material-ui/core/styles';

export default function Base(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <ThemeProvider theme={props.currentTheme}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, props.drawerOpen && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={props.drawerOpener}
            className={clsx(classes.menuButton, props.drawerOpen && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" noWrap className={classes.title}>
            Zachary J. Klein
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !props.drawerOpen && classes.drawerPaperClose),
        }}
        open={props.drawerOpen}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={props.drawerCloser}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
        <div>
          <Link color="inherit" href="https://github.com/zack-klein/">
            <ListItem button>
                <ListItemIcon>
                  <GitHubIcon color="secondary"/>
                </ListItemIcon>
              <ListItemText primary="Github" secondary="For the nerds."/>
            </ListItem>
          </Link>
          <Link color="inherit" href="https://www.linkedin.com/in/zacharyjklein/">
          <ListItem button>
            <ListItemIcon>
                <LinkedInIcon color="secondary"/>
              </ListItemIcon>
              <ListItemText primary="LinkedIn" secondary="Let's connect!"/>
            </ListItem>
          </Link>
          <Link color="inherit" href="https://medium.com/@klein.zachary.j">
          <ListItem button>
            <ListItemIcon>
              <LibraryBooksIcon color="secondary"/>
              </ListItemIcon>
              <ListItemText primary="Medium" secondary="What I'm reading."/>
            </ListItem>
          </Link>
        </div>
        </List>
        <Divider />
        <List>
          <Switch checked={props.state.checked} onChange={props.darkModeChanger} name="checked" />
        </List>
      </Drawer>
        {props.page}
    </ThemeProvider>
    </div>
  );
}
