import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

async function getTodos (payload) {
   try {
     const resp = await fetch('https://api.zacharyjklein.com/zacks_todos/', {
         method: 'GET',
     });
     return resp.json()
   } catch (err) {
     console.log(err);
     return []
     }
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Zachary J. Klein
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Todos() {
  const [state, setState] = React.useState({
    todos: [],
    showTodos: false,
    showAddTodo: false,
    addTodoDialogOpen: false,
    newTodo: '',
    newTodoAuthor: '',
    newTodoCategory: 'Fun',
  });

  const handleClickOpen = () => {
    console.log("handled open");
    setState({ ...state, addTodoDialogOpen: true});
  };

  const handleClose = () => {
    setState({ ...state, addTodoDialogOpen: false});
  };

  const addTodoButton = (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<AddCircleIcon />}
      size="medium"
      onClick={handleClickOpen}
    >
      Add To Do
    </Button>
  )

  const showAddTodo = {
    true: addTodoButton,
    false: <React.Fragment />
  }
  async function toggleShowTodos () {
    var todos = await getTodos();
    setState({ ...state, showTodos: !state.showTodos, todos: todos, showAddTodo: !state.showAddTodo });
  };

  async function toggleTodo (id) {
    const encodedId = encodeURIComponent(id);
    console.log(`Target is ${id}`);
    try {
      await fetch(
        `https://api.zacharyjklein.com/zacks_todos/toggle_complete?id=${encodedId}`,
        {method: 'POST'}
      );
      var todos = await getTodos();
      setState({ ...state, todos: todos });
      return true;
    } catch (err) {
      return false;
    }
  };

  async function deleteTodo (id) {
    const encodedId = encodeURIComponent(id);
    console.log(`Target is ${id}`);
    try {
      await fetch(
        `https://api.zacharyjklein.com/zacks_todos/delete?id=${encodedId}`,
        {method: 'POST'}
      );
      var todos = await getTodos();
      setState({ ...state, todos: todos });
      return true;
    } catch (err) {
      return false;
    }
  };

  async function addTodo (todo, author, category) {
    const encodedTodo = encodeURIComponent(todo);
    const encodedAuthor = encodeURIComponent(author);
    const encodedCategory = encodeURIComponent(category);
    try {
      await fetch(
        `https://api.zacharyjklein.com/zacks_todos/add_todo?todo=${encodedTodo}&author=${encodedAuthor}&category=${encodedCategory}`,
        {method: 'POST'}
      );
      var todos = await getTodos();
      setState({ ...state, todos: todos, addTodoDialogOpen: false });
      return true;
    } catch (err) {
      return false;
    }
  };

  const changeNewTodo = (event) => {
    setState({ ...state, newTodo: event.target.value });
  };

  const changeNewTodoAuthor = (event) => {
    setState({ ...state, newTodoAuthor: event.target.value });
  };

  const changeNewTodoCategory = (event) => {
    setState({ ...state, newTodoCategory: event.target.value });
  };

  async function handleSubmit() {
    addTodo(state.newTodo, state.newTodoAuthor, state.newTodoCategory);
  };

  const addTodoDialog = (
    <div>
      <Dialog open={state.addTodoDialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a To Do</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="To Do"
            fullWidth
            onChange={changeNewTodo}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your name"
            fullWidth
            onChange={changeNewTodoAuthor}
          />
          <br></br><br></br>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.newTodoCategory}
            onChange={changeNewTodoCategory}
            fullWidth
          >
            <MenuItem value={"Development"}>Development</MenuItem>
            <MenuItem value={"Fun"}>Fun</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
            <MenuItem value={"Work"}>Work</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  const loadTodosButton = (
    <React.Fragment>
      <Button color="primary" onClick={toggleShowTodos} variant="contained">
        {
          state.showTodos ?
          <Typography>
            {"Hide To Do's"}
          </Typography>
          :
          <Typography>
            {"Show To Do's"}
          </Typography>
        }
      </Button>
    </React.Fragment>
  )

  const todosTable = (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>To Do</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.todos.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
              {
                row.done ?
                  <IconButton onClick={() => toggleTodo(row.id)} aria-label="delete">
                    <ClearIcon color="secondary"/>
                  </IconButton>
                :
                  <IconButton onClick={() => toggleTodo(row.id)} aria-label="delete">
                    <DoneIcon color="primary"/>
                  </IconButton>
              }
              </TableCell>
              <TableCell component="th" scope="row">
                {row.todo}
              </TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => deleteTodo(row.id)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  const showTodos = {
    true: todosTable,
    false: <React.Fragment />,
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            {"Zack's To Do's"}
          </Typography>
          <Button href="https://zacharyjklein.com" color="primary" variant="outlined" className={classes.link}>
            Back to zacharyjklein.com
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        {addTodoDialog}
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Zack's To Do's
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Every developer's first project.
        </Typography>
        <br></br><br></br>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          {loadTodosButton}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {showTodos[state.showTodos]}
        </Grid>
      </Container>
      {/* Add to do box */}
      <Container maxWidth="md" component="main">
        <Typography align="center">
          {showAddTodo[state.showAddTodo]}
        </Typography>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
