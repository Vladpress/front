import React from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import API from "../../utils/fetch";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: "8px auto",
    },
  },
  form: {
    width: '340px',
    height: '240px',
    margin: "auto",
    background: "#e2f9ff",
    padding: "20px",
    borderRadius: '5px',
    border: '1px solid #cedaff',
    marginTop: '100px'
  },
  control: {
    width: '100%',
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    '& button': {
      marginLeft: '20px'
    }
  },
  h1: {
    color: '#77beda',
    textAlign: 'center'
  }
}));

function Auth(props) {
  const classes = useStyles();
  const handleSubmit = async (values) => {
    try {
      const res = await API.post('/auth', values);
      console.log(res.data);
      localStorage.setItem('token', res.data);
      props.history.push('/protected');
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <Formik
      initialValues={{ email: "bla@gmail.com", password: "1111" }}
      onSubmit={handleSubmit}
    >
      {props => {
        return (
          <form onSubmit={props.handleSubmit} className={classes.root + " " + classes.form} noValidate autoComplete="off">
            <h1 className={classes.h1}>Login please</h1>
            <FormControl className={classes.control} variant="outlined">
              <InputLabel htmlFor="component-outlined1">Email</InputLabel>
              <OutlinedInput id="component-outlined1" name="email" value={props.values.email} onChange={props.handleChange} label="Name" />
            </FormControl>
            <FormControl className={classes.control} variant="outlined">
              <InputLabel htmlFor="component-outlined2">Password</InputLabel>
              <OutlinedInput id="component-outlined2" name="password" value={props.values.password} onChange={props.handleChange} label="Name" />
            </FormControl>
            <div className={classes.buttons}>
              <Button variant="outlined" color="primary">
                Cancel
        </Button>
              <Button type="submit" variant="outlined" color="primary">
                Submit
        </Button>
            </div>
          </form>
        )
      }}
    </Formik>
  );
}

export default withRouter(Auth);