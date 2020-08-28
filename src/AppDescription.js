import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function AppDescription() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        The backstory
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Typography variant="subtitle1">
          {'A description of this app that goes into excruciating details about '}
          {'how the app works, why it works, and why you would want to use it.'}
        </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
