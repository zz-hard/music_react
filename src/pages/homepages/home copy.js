import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Input, Select,Button, Carousel} from 'element-react';
import '../scss/homepages/home.scss';
import wd from '../../img/wd.jpg';
import $ from 'jquery';
import Header from '../../components/dashboard/header';
import Bookingdetails from '../../components/dashboard/Bookingdetails';
import MusicKind from '../../components/dashboard/musicKind';
import InnerContent from '../../components/dashboard/innerContent';
import homeActionCreators from '../../actions/home-action';
import ImgApi from '../../api/imgApi'

class home extends Component {
    constructor(props){
        super(props);
        this.state={
            selectData:['音乐会音乐会音乐会音乐会音乐会','音乐节','歌手'],
            // hotConcertData:[1,2,3,4,5,6],
            hotConcertData:[1,2,3,4,5,6],
            isBookingdetails:false,
            BookingdetailsId:null,
            thisItem:null,
            Img:null,
        };
    }
    componentWillMount = () => {
        this.props.findAllMusic(null,(data)=>{
            // console.log(data,JSON.parse(data)[1]);
            this.setState({
                hotConcertData:JSON.parse(data),
            })
        });
        // this.props.findImg((data)=>{
        //     this.setState({
        //         Img:data,
        //     })
        //     console.log(data);
        // });
    }
    componentWillReceiveProps = () =>{
         
      }
    login = () => {
        this.props.history.replace('/login');
    }
    onID = (item) =>{
        // console.log(item,item.id);
        this.isBookingdetails(true);
        this.setState({
            thisItem:item,
            BookingdetailsId:item.id,
        })
    }
    isBookingdetails = (flag) =>{
        this.setState({
            isBookingdetails: flag,
        })
    }
    render() {
        return (
            <div className='home'>
                <Header login={this.login}></Header>
                <img src={this.state.Img} alt=""/>
                {this.state.isBookingdetails ?
                    <Bookingdetails
                    id={this.state.BookingdetailsId}
                    isBookingdetails={this.isBookingdetails}
                    ></Bookingdetails>
                :
                <div>
                    <InnerContent
                    onID={this.onID}
                    hotConcertData={this.state.hotConcertData}
                    isBookingdetails={this.isBookingdetails}
                    ></InnerContent>
                    <MusicKind
                    isBookingdetails={this.isBookingdetails}
                    ></MusicKind>
                    {/* <div dangerouslySetInnerHTML={{__html: '<a href="#">这是一段html代码</a><a href="#">2</a><a href="#">3</a>'}}></div> */}
                    
                    <form action="/upload" method="post" enctype="multipart/form-data">
                        <input name="fileUpload" type="file" />
                        <img src="" alt=""/>
                        <button type="submit">上传</button>
                    </form>
                </div>
                }
                
                

                <div className='foot'>
                    <Layout.Row gutter="20">
                        <Layout.Col span="4">
                        &nbsp;
                        </Layout.Col>
                        <Layout.Col span="16">
                            <div><span>感谢广西科技大学启迪数字学院4年来的培养，4年来所有老师的辛苦，同学们的陪伴，给予我踏入社会的勇气。是时候了，该是时候了。再见了，老师同学们。</span></div>
                            <div><span>2021，我毕业了！！！！！</span></div>
                            <div className='foot-wd'>
                                <img src={wd} alt="" />
                            </div>
                        </Layout.Col>
                        <Layout.Col span="4">
                        &nbsp;
                        </Layout.Col>
                    </Layout.Row>
                    <div className='copyright'>版权所有@zz 2021-05 毕业设计</div>
                </div>
            </div>
        );
    }
}

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
  )(home);