import React, { Component } from 'react';
import API from "../../utils/fetch";
import Good from '../Good/Good.js';
import ModalWin from '../ModalWin/ModalWin.js';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import styles from "./style.css";

export default class GoodsList extends Component {
  state = {
    goods: [],
    editData: {},
    sameNameReject: false,
  }
  // ref = React.createRef();

  async componentDidMount() {
   this.getAllGood();
  }

  getAllGood = async () => {
    const request = await API.get('');
    this.setState({ goods: request.data })
  }

  handleSubmit = async (values, props) => {
    try {
      const { id, ...val } = values;
      console.log(values)
      let result;
      id === 'new' && (result = await API.post('/', val));
      id !== 'new' && (result = await API.put(`/${id}`, val));
      this.getAllGood();
      this.closeEditData();
    } catch(e) {
      if(e.response.status === 400) {
        props.setErrors(e.response.data)
      }

    }


    // if (id === "new") {
    //   const good = {
    //     productName: name,
    //     salePrice: price,
    //     img: img
    // }

    //   try {
    //     const request = await API.post(`/`, good);

    //     const goods = [...this.state.goods];
    //     goods.unshift(request.data);
    //     this.setState({ goods })
    //     this.closeEditData();
    //     return;
    //   }
    //   catch (e) {         
    //     props.setFieldError('name', e.message + ' Name not unique')        
    //   }
    // }    

    // try {  
    //   let good = this.state.goods.find((good) => good._id === id);
    //   good.productName = request.data.productName;
    //   good.salePrice = request.data.salePrice;
    //   good.img = request.data.img;        
    //   const request = await API.put(`/${id}`, good);
    //   const goods = [...this.state.goods];
     
    //   console.log(good);

    //   this.setState({
    //     goods
    //   });
    // }
    // catch (e) {
    //   console.log('---',e)
    //   props.setFieldError('name', e.message + ' Name not unique')
    // }
  }
  // Handle submit end

  openEditModal = editData => {

    this.setState({ editData })
  };

  closeEditData = () => this.setState({ editData: {} });

  render() {
    const { goods, editData } = this.state;
    const { history } = this.props;
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
            <Good history={history} key={index} openEditModal={this.openEditModal} {...good} handleSubmit={this.handleSubmit} />
          )}
        </main>
        <ModalWin handleSubmit={this.handleSubmit} onClose={this.closeEditData} data={editData} />
      </React.Fragment>
    );
  }
}

