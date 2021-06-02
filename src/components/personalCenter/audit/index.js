import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Select,Button, Notification} from 'element-react';
import './audit.scss'; 
import presonalActionCreators from '../../../actions/presonal-action';

class Audit extends Component {
    constructor(props){
        super(props);
        this.state={
             
        };
    }
    componentWillMount   = () => {
        // console.log(11,sessionStorage.getItem('id'));
        const userId = sessionStorage.getItem('id');
        this.props.fingMusicUserById({userId:userId},(data)=>{
            console.log(data);
        })
    }
    componentWillReceiveProps = (nextProps) => {
        
   } 
      
     
    render() {
        return (
            <div className='audit'>
                {/* {} */}
            </div>
        );
    }
}

// export default Audit;
const mapStateToProps = (state) => {
    return{
     
    }
  };
  export default connect(
    mapStateToProps,
    presonalActionCreators
  )(Audit);