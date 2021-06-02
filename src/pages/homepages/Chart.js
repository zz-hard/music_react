import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../scss/homepages/Chart.scss';
import $ from 'jquery'
import {Checkbox,Button,Notification,MessageBox,Message} from 'element-react'
import homeActionCreators from '../../actions/home-action'
import Header from '../../components/dashboard/header';
import Bookingdetails from '../../components/dashboard/Bookingdetails';
import { keys } from 'lodash';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state={
            BookingdetailsId:sessionStorage.getItem('BookingdetailsId'),
            // data: [
            //     [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1],
            //     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            //     [1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
            //     [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0],
            //     [1,1,1,1,1,1,2,0,1,1,1,1,1,1,1,0,0,0,0]
            //     ],
            data: [],
            // checked:false,
            dataOn:[],
            dataup:[],
            music:null,
            introduction:null,
            picture_url:null,
            price:null,
            musicSeat:null,
        };
    }
    componentWillMount = () => {
        let test =  "[[0,1,2,0,1], [0,0,0,0,0], [1,1,1,1,1]]";
        let str = eval(test);
        // let s = toString(this.state.data);
        // console.log(s,'================');
        
        // console.log(this.array2String(this.state.data));
        // console.log(this.state.data);

        this.props.findMusicById({id:this.state.BookingdetailsId},(data)=>{
            console.log(data,'=================');
            const data1 = JSON.parse(data)[0];
            this.setState({
                music:data1.music,
                introduction:data1.introduction,
                picture_url:data1.picture_url,
                price:data1.price,
                data:eval(data1.music_seat)
            })
        })
    }
    //二维数组tostring  eval()字符串转为二维数组
     array2String = function(arr){
        // var arr = [[1,2,3], [4,6,9], [2,3,7]];
        var s = '';
        for (var i = 0; i < arr.length; i++) {
            s += '[';
            for(var j = 0; j<arr[i].length-1; j++){
                s += arr[i][j] + ',';
            }
            s += arr[i][arr[i].length-1] + '],';
        }
        return '[' + s.substr(0, s.length-1) + ']';
    }


    login = () => {
        this.props.history.replace('/login');
    }
    //用户当前已订票,2表示
    refund = () =>{
        MessageBox.confirm('是否选择退票？点击确定到个人中心吧！', '提示', {
            type: 'warning'
          }).then(() => {
            this.props.history.push('/personalCenter');
          }).catch(() => {
            Message({
              type: 'info',
              message: '已取消'
            });
          });
    }
    //点击座位
    chartChange = (key,index,item,current) =>{
        if (current.checked) {
            $(`#${key+1}_${index+1}`).prop("checked",false);
            $(`#${key+1}_${index+1}`).attr("checked",false);
        }else{
            $(`#${key+1}_${index+1}`).prop("checked",true);
            $(`#${key+1}_${index+1}`).attr("checked",true);
        }
        this.changeStyle(key,index,item,current);
    }
    changeStyle = (key,index,item,current) =>{
        if (current.checked) {
            $(`#${key+1}_${index+1}`).css("backgroundColor", "red");
            this.state.data[key][index] = 0;
            this.state.dataOn.push({key,index});
        }else{
            $(`#${key+1}_${index+1}`).css("backgroundColor", "#989796");
            this.state.data[key][index] = 1;
            this.state.dataup.push({key,index});
        }
    }
    //提交当前点击订票位置
    confirmSeat = () =>{
        // console.log($("div[checked='checked']"));
        this.forId($("div[checked='checked']"));
        // console.log(this.forId($("div[checked='checked']")));
        const userSeatdata = this.forId($("div[checked='checked']"));
        const userSeatdataStr = this.array2String(userSeatdata);
        if (userSeatdata.length > 4) {
            Notification({
                title: '出错了',
                message: 'ps：限定每个用户最多只能订4张票哦',
                type: 'warning',
                offset: 100
              });
        }else{
            this.props.seatUpdate({
                musicId:sessionStorage.getItem("BookingdetailsId"),
                userId:3,
                seatStatus:2,
                seat:`${userSeatdataStr}`,
            },(data)=>{
                MessageBox.confirm('你已经成功预定票成功？点击确定到个人中心付款吧！', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.props.history.push('/personalCenter');
                }).catch(() => {
                    Message({
                      type: 'info',
                      message: '温馨提示请尽快付款哦'
                    });
                });
            });
        }
    }
    forId = function (item) {
        let arr = [];
        for (let index = 0; index < item.length; index++) {
            const element = item[index].getAttribute('id');
            let dataStrArr=element.split("_");  //分割成字符串数组  
            let dataIntArr=[];//保存转换后的整型字符串  
            //分割后为字符串类型的数组，需要转换为int类型
            dataIntArr=dataStrArr.map(item => {  
                return +item;  
            });
            arr.push(dataIntArr);
        }
        return arr;
    }
    render() {
        return (
            <div className='Chart'>
                <div className="screen"></div>
                {
                    this.state.data.map((items,key)=>{
                        return(
                            <div key={key} className="row">
                                {items.map((item,index)=>{
                                    return (item === 1)?
                                    <div className="optional checkbox" id={`${key+1}`+"_"+`${index+1}`} checked={false} onClick={(e)=>this.chartChange(key,index,item,e.target)}>可选</div>
                                    :
                                        (item === 2)?
                                        <div className="booked checkbox" id={`${key+1}`+"_"+`${index+1}`} onClick={(e)=>{this.refund(key,index,item,e.target)}}>已定</div>
                                        :
                                        <div className="sold checkbox" id={`${key+1}`+"_"+`${index+1}`}>已出</div>
                                })}
                            </div>
                        )
                    })
                }
                <Button className="confirmSeat" type="primary" icon="circle-check" onClick={()=>{this.confirmSeat()}}>确认选座</Button>
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
    homeActionCreators,
  )(Chart);