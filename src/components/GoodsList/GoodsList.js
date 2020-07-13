import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import API from "../../utils/fetch";
import Good from '../Good/Good';
import ModalWin from '../ModalWin/ModalWin.js';

import styles from "./style.css";

export default class GoodsList extends Component {
  state = {
    goods: [],
    editData: {},
    sameNameReject: false,
  }
  // ref = React.createRef();

  componentDidMount() {
    this.getAllGood();
  }

  getAllGood = async () => {

    try {
      const { data } = await API.get('/goods');
      this.setState({ goods: data })
    } catch (e) {
      console.log(e);
    }
  }

  handleSubmit = async (values, props) => {
    try {
      const { id, ...val } = values;
      console.log(values);
      //  !!id ? await API.post('/', val) : await API.put(`/${id}`, val); 
      let result;
      id === 'new' && (result = await API.post('/', val));
      id !== 'new' && (result = await API.put(`/${id}`, val));
      this.getAllGood();
      this.closeEditData();
    } catch (e) {
      if (e.response.status === 400) {
        props.setErrors(e.response.data)
      }
    }
  }
  // Handle submit end

  openEditModal = editData => this.setState({ editData })

  closeEditData = () => this.setState({ editData: {} });

  render() {
    const { goods, editData } = this.state;
    const { history } = this.props;
    console.log("history", history);

    return (
      <React.Fragment>
        <div className={styles.heading_wrapper}>
          <h1 className={styles.main_heading}>Goods</h1>
          <IconButton onClick={() => this.openEditModal({ _id: 'new' })} style={{ height: "50px" }} aria-label="add">
            <Icon color="primary" fontSize="small">add_circle</Icon>
          </IconButton>
        </div>
        <main className={styles.goods}>
          {!!goods && goods.map((good, index) =>
            <Good history={history} key={index} openEditModal={this.openEditModal} item={good} />
          )}
        </main>
        <ModalWin handleSubmit={this.handleSubmit} onClose={this.closeEditData} data={editData} />
      </React.Fragment>
    );
  }
}

