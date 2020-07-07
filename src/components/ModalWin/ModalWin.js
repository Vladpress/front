import React from 'react';
import { Formik } from 'formik';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styles from "./style.css";

const useStyles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textFields: {
    marginBottom: "30px"
  }
});

const ModalWin = ({ data, classes, onClose, handleSubmit }) =>
  <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={!!data._id}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <div>
      <Formik
        initialValues={{ productName: data.productName, price: data.salePrice, img: data.img, id: data._id }}
        onSubmit={handleSubmit}
      >
        {props => {
          console.log('formik props', props.errors);
          
          return (
            <form onSubmit={props.handleSubmit} className={styles.form_modal} noValidate autoComplete="off">

              <TextField
              className={classes.textFields}
              value={props.values.productName}
              onChange={props.handleChange}
              name="productName"
              label="productName"
              variant="outlined"
              helperText={props.errors.productName}
              error={Boolean(props.errors.productName)}
              />

              <TextField
              className={classes.textFields}
              value={props.values.price}
              onChange={props.handleChange}
              name="price"
              label="Price"
              variant="outlined"
              />

              <TextField
              className={classes.textFields}
              value={props.values.img}
              onChange={props.handleChange}
              name="img"
              label="Image"
              variant="outlined"
              />

              <div className={styles.buttons_wrapper}>
                <Button onClick={onClose} variant="contained">Cancel</Button>
                <Button type="submit" variant="contained" color="primary">Ok</Button>
              </div>
            </form>
          )
        }}
      </Formik>
    </div>
  </Modal>


export default withStyles(useStyles)(ModalWin);