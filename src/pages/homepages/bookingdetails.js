import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout} from 'element-react';
import '../scss/homepages/bookingdetails.scss';
import wd from '../../img/wd.jpg';
import Header from '../../components/dashboard/header';
import Bookingdetails from '../../components/dashboard/Bookingdetails';
import MusicKind from '../../components/dashboard/musicKind';
import InnerContent from '../../components/dashboard/innerContent';

class bookingdetails extends Component {
    constructor(props){
        super(props);
        this.state={
            hotConcertData:[1,2,3,4,5,6],
            isBookingdetails:false,
            //刷新失效
            // BookingdetailsId:this.props.location.query.id,
            BookingdetailsId:sessionStorage.getItem('BookingdetailsId'),
            Img:null,
        };
    }
    componentWillMount = () => {
        console.log(this.state.BookingdetailsId);
    }
    componentWillReceiveProps = () =>{
         
      }
    login = () => {
        this.props.history.replace('/login');
    }
    openChart = () =>{
        this.props.history.push('/home/chart');
    }
    render() {
        return (
            <div className='bookingdetails'>
                <Header login={this.login}></Header>
                <img src={this.state.Img} alt=""/>
                <Bookingdetails
                id={this.state.BookingdetailsId}
                openChart={this.openChart}
                ></Bookingdetails>
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
    // homeActionCreators,
  )(bookingdetails);