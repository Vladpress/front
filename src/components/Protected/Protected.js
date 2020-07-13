import React from 'react';
import { withRouter } from "react-router";

function Protected(props) {
  function signOut() {
    localStorage.removeItem('token');
    console.log(props.history);
    props.history.push('/auth');
  }
  return (
    <div className="Protected">
        <h1>Hello from protected</h1>
        <button onClick={signOut} type="button">signOut</button> 
    </div>
  );
}

export default withRouter(Protected);
 