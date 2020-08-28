import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const sampleData = [
  { name: 'Some', desc: 'A thing', price: '20%' },
  { name: 'Sample', desc: 'Another thing', price: '30%' },
  { name: 'Data', desc: 'Something else', price: '50%' }
]

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function AppResults(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Primary results for: {props.state.field1Value} {props.state.field2Value}
      </Typography>
      <List disablePadding>
        {sampleData.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Results area 2
          </Typography>
          <Typography gutterBottom>Maybe something with {props.state.field1Value}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Results area 3
          </Typography>
          <Typography gutterBottom>Maybe something with {props.state.field2Value}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
