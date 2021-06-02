import React, {Component} from 'react';
import loading from './img/loading.gif'
import './pages/scss/loading.scss'

class Loading extends Component {
  render() {
    return (
      <div>
        <div className="loading">
          <img src={loading} alt="" />
        </div>
      </div>
    );
  }
}

export default Loading;