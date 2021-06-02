import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Input, Select,Button, Notification} from 'element-react';
import presonalActionCreators from '../../../actions/presonal-action';

class OrderfindMusic extends Component {
    constructor(props){
        super(props);
        this.state={
            music:null,
            introduction:null,
            picture_url:null,
            price:null,
        };
    }
    componentWillMount = () => {
        
    }
    componentWillReceiveProps = (nextProps) => {
        this.props.findMusicById({id:this.props.musicId},(data)=>{
            const data1 = JSON.parse(data)[0];
            console.log(data,data1);
            this.setState({
                music:data1.music,
                introduction:data1.introduction,
                picture_url:data1.picture_url,
                price:data1.price,
            })
        })
   }
   
      
     
    render() {
        return (
            <div className='orderfindMusic'>
                {this.state.music}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
     
    }
  };
  export default connect(
    mapStateToProps,
    presonalActionCreators
  )(OrderfindMusic);