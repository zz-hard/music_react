import React, { Component } from 'react';
import { Layout, Input, Select,Button, Carousel,Notification} from 'element-react';
import './bookingdetails.scss';
import { connect } from 'react-redux';
import homeActionCreators from '../../../actions/home-action';
import $ from 'jquery';
import loginin from '../../../img/svg/login-in.svg';
import loginout from '../../../img/svg/login-out.svg';
import test  from '../../../img/home/test.jpg';


class Bookingdetails extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogin:sessionStorage.getItem('token') !=null ? true:false,
            MusicDataObj:null,
            music:null,
            introduction:null,
            picture_url:null,
        };
    }
    componentWillMount  = () =>{
        this.props.findMusicById({id:this.props.id},(data)=>{
            // console.log(data,'=================');
            const data1 = JSON.parse(data)[0];
            this.setState({
                music:data1.music,
                introduction:data1.introduction,
                picture_url:data1.picture_url,
                price:data1.price,
            })
        })
    }
    isBookingdetails = () =>{

    } 
    openChart = () => {
        if (sessionStorage.getItem('token')) {
            this.props.openChart();
            Notification({
            title: '你已成功打开座位表ξ( ✿＞◡❛)',
            message: 'ps：限定每个用户最多只能订4张票哦',
            type: 'success',
            offset: 100
            });
        }else{
            Notification({
                title: '请先登录ξ( ✿＞◡❛)',
                message: 'ps：点击左上角登录',
                type: 'warning',
                offset: 100
                });
        }
        
        
      }
    render() {
        return (
            <div className='bookingdetails'>
                <div className="container-bookingdetails">
                <Layout.Row gutter="20" className='row'>
                    <Layout.Col span="16">
                        <div className="grid-content bg-purple">
                        <img className="bookingdetails-logo" src={this.state.picture_url} />
                        </div>
                    </Layout.Col>
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <div className='concert-introduction name'>音乐会介绍：
                            <span className='concert-introduction_span'>
                            {this.state.introduction}
                            </span>
                            </div>
                            <div className='price name'>价格：
                            <span className='concert-price_span'>
                            {this.state.price}
                            </span>￥
                            </div>
                            <div className='announcer name'>发布者：
                            <span className='concert-announcer_span'>
                            zz
                            </span>
                            </div>
                            {/* <div className='book-ticket' onClick={this.open3.bind(this)}>订票</div> */}
                            <Button plain={true} onClick={this.openChart.bind(this)} className='book-ticket'>订票</Button>
                            {/* 可增加开发 */}
                            {/* <Button.Group>
                                <Button type="primary" icon="edit"></Button>
                                <Button type="primary" icon="share"></Button>
                                <Button type="primary" icon="delete"></Button>
                            </Button.Group> */}
                        </div>
                    </Layout.Col>
                </Layout.Row>

		        </div>
            </div>
        );
    }
}

// export default Bookingdetails;
// export default home;
const mapStateToProps = (state) => {
    return{
    //   loginData:state.loginData,
    }
  };
  
  // export default login;
export default connect(
    mapStateToProps,
    homeActionCreators,
  )(Bookingdetails);