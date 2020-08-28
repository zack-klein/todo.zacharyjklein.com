import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default function AppForm(props) {

  const setField1 = (event) => {
    props.updater(
      {   ...props.state, field1Value: event.target.value }
    );
  };

  const setField2 = (event) => {
    props.updater(
      {   ...props.state, field2Value: event.target.value }
    );
  };

  const onSubmit = () => {
    console.log(null);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Fill out this form:
      </Typography>
      <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={onSubmit}
      >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <TextValidator
                label="Text field 1"
                placeholder="Placeholder"
                onChange={setField1}
                name="aField"
                value={props.state.field1Value}
                validators={['required']}
                errorMessages={['This field is required!']}
                variant="outlined"
                required
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextValidator
                label="Text field 2"
                placeholder="Placeholder"
                onChange={setField2}
                name="aField2"
                value={props.state.field2Value}
                validators={['required']}
                errorMessages={['This field is required!']}
                variant="outlined"
                required
            />

        </Grid>
      </Grid>
      </ValidatorForm>
    </React.Fragment>
  );
}
