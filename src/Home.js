import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Photo from './Photo';
import GCloudPhoto from './GCloudPhoto';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './styles';
import Title from './Title';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';



let projects = [
  {
    id: 1,
    name: 'Resumayday',
    description: "Applying for jobs online these days is a total crapshoot. Let's game the system.",
    github: 'https://github.com/zack-klein/zacharyjklein-api/blob/master/northface/resumayday.py',
    ext: "https://resumayday.zacharyjklein.com"
  },
  {
    id: 2,
    name: 'Key Me!',
    description: 'A simple, no-nonsense tool for extracting keywords from text. Built for lazy people!',
    github: 'https://github.com/zack-klein/zacharyjklein-api/blob/master/northface/keyme.py',
    ext: "https://keyme.zacharyjklein.com"
  },
  {
    id: 3,
    name: "Polling for President",
    description: 'Skeptical of polling in the 2020 Presidential Race? So am I.',
    github: 'https://github.com/zack-klein/zacharyjklein-api/blob/master/northface/pollin.py',
    ext: "https://polling-for-president.zacharyjklein.com/"
  },
  {
    id: 4,
    name: 'Sentimenter',
    description: 'Run machine learning (sentiment analysis) on Tweets in real time.',
    github: 'https://github.com/zack-klein/zacharyjklein-api/blob/master/northface/sentimenter.py',
    ext: "https://sentimenter.zacharyjklein.com"
  },
  {
    id: 5,
    name: 'Coronavirus Dashboard',
    description: 'Watch COVID-19 spread around the world.',
    github: 'https://github.com/zack-klein/zacharyjklein-api/blob/master/northface/corona.py',
    ext: "https://coronavirus-dashboard.zacharyjklein.com/"
  },
  {
    id: 6,
    name: "Stocker",
    description: "Stalk some stocks!",
    github: 'https://github.com/zack-klein/stocker',
    ext: "https://stocker.zacharyjklein.com"
  },
  {
    id: 7,
    name: "Lending Club",
    description: "How do Americans borrow money?",
    github: 'https://github.com/zack-klein/lendingclub',
    ext: "https://lending-club.zacharyjklein.com/"
  },
  {
    id: 8,
    name: "Zack's To Do's",
    description: "Every developer's first project.",
    github: "https://github.com/zack-klein/zacks-todos",
    ext: "https://todo.zacharyjklein.com/"
  },
];



export default function Home() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    showProjects: false,
  });

  const toggleProjects = () => {
    setState({
      showProjects: !state.showProjects,
    });
  };

  const projectExpanders = projects.map((item, key) =>
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

  const projectView = (
  <Grid item xs={12} md={5} lg={5}>
    <Paper className={classes.paper}>
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<ArrowBackIosIcon />}
      onClick={toggleProjects}
    >
      Back
    </Button>
      {projectExpanders}
    </Paper>
  </Grid>
  );

  const welcomeMsg = (
    <React.Fragment>
      {/* Welcome message */}
      <Grid item xs={12} md={5} lg={5}>
        <Paper className={classes.paper}>
          <React.Fragment>
            <Title>A message from Zack:</Title>
            <Typography component="p" variant="h4">
              Welcome!
            </Typography>
            <br></br>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<EmojiObjectsIcon />}
              onClick={toggleProjects}
            >
              Check out my projects!
            </Button>
            <br></br>
            <Typography className={classes.depositContext}>
              {"My name is Zack — I'm a Data Engineer (not a web developer, as you "}
              {"can probably tell...) and I built this website to showcase some of "}
              {"the backend tools I've built. I'm a big believer in building things"}
              {" the right way. But it's hard — it takes creativity, teamwork, "}
              {"boldness, humility, and time — lots of time. I’m deeply inspired by "}
              {"people who do whatever it takes to build things the right way — even "}
              {"if that means building something tiny (or maybe nothing at all!). "}
              <br></br><br></br>
              {"I "}
              {"like to think I bring that passion and inspiration with me to the "}
              {"different things I build. I hold certifications in AWS, Snowflake, "}
              {"and Python for Machine Learning — and my primary skills are in AWS, "}
              {"Snowflake, Spark, Python, and SQL. On top of that, I'm passionate "}
              {"about writing — I studied English at Trinity University and I have "}
              {"done coursework at the University of Iowa's Writer's Workshop."}
            </Typography>
            <br></br>
            <div>
              <Typography color="textSecondary">
                {"Please note: all projects, opinions, etc. on this website "}
                {"are my own and do not reflect the thoughts, opinions, etc. "}
                {"of my employer!"}
              </Typography>
            </div>
          </React.Fragment>
          <Grid item xs={5} md={5} lg={5}>
            <GCloudPhoto />
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );

  const views = {
    false: welcomeMsg,
    true: projectView,
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Photo */}
          <Grid item xs={12} md={5} lg={5}>
            <Paper className={classes.paper}>
              <Photo />
            </Paper>
          </Grid>
          {/* Welcome message */}
          {views[state.showProjects]}
        </Grid>
      </Container>
    </main>
  );
}
