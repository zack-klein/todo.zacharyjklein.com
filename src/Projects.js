import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import GitHubIcon from '@material-ui/icons/GitHub';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import useStyles from './styles';
import Base from './Base';
import Photo from './Photo';
import Title from './Title';

let projects = [
  {
    key: 1,
    name: 'Resumayday',
    description: "Applying for jobs online these days is a total crapshoot. Let's game the system.",
    github: 'https://github.com/zack-klein/zacharyjklein-api/blob/master/northface/resumayday.py',
    ext: "/resumayday"
  },
  {
    key: 2,
    name: 'Key Me!',
    description: 'A simple, no-nonsense tool for extracting keywords from text. Built for lazy people!',
    github: 'https://github.com/zack-klein/zacharyjklein-api/blob/master/northface/keyme.py',
    ext: "/keyme"
  },
  {
    key: 3,
    name: "Pollin' for President",
    description: 'Skeptical of polling in the 2020 Presidential Race? So am I.',
    github: 'https://github.com/zack-klein/zacharyjklein-api/blob/master/northface/pollin.py',
    ext: "/pollin"
  },
  {
    key: 4,
    name: 'Sentimenter',
    description: 'Run machine learning (sentiment analysis) on Tweets in real time.',
    github: 'https://github.com/zack-klein/zacharyjklein-api/blob/master/northface/sentimenter.py',
    ext: "/sentimenter"
  },
  {
    key: 5,
    name: 'Coronavirus Dashboard',
    description: 'Watch COVID-19 spread around the world.',
    github: 'https://github.com/zack-klein/zacharyjklein-api/blob/master/northface/corona.py',
    ext: "/corona"
  },
  {
    key: 6,
    name: "Zack's To Do's (2.0)",
    description: "Every developer's first project.",
    github: '/',
    ext: "/zackstodos2"
  },
];

export default function Projects(props) {
  const classes = useStyles()
  const items = projects.map((item, key) =>
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography color="secondary">{item.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          {item.description}
        </Typography>
      </ExpansionPanelDetails>
      <ExpansionPanelActions>
      <Button size="small" href={item.github} color="secondary">
        <GitHubIcon />
      </Button>
      <Button size="small" href={item.ext} color="secondary">
        Let's check it out!
      </Button>
    </ExpansionPanelActions>
    </ExpansionPanel>
  );
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Photo */}
          <Grid item xs={12} md={5} lg={3}>
            <Paper className={classes.paper}>
              <Photo />
            </Paper>
          </Grid>
          {/* Projects */}
          <Grid item xs={12} md={5} lg={3}>
          <Link href="/">
            <Button color="primary" startIcon={<ArrowBackIosIcon />} >
              Back
            </Button>
          </Link>
            {items}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
