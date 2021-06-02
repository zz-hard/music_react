import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MessageBox, Message, Select,Button, Notification} from 'element-react';
import './order.scss'; 
import presonalActionCreators from '../../../actions/presonal-action';
import OrderfindMusic from '../orderfindMusic/index'

class Order extends Component {
    constructor(props){
        super(props);
        this.state={
            orderData:[],
            musicName:"***",
            seat:[]
        };
    }
    componentWillMount = () => {
        const _this=this;
        setTimeout(()=>{
            this.props.findOderById({userId:sessionStorage.getItem('id')},(data)=>{
                // console.log(data,JSON.parse(data));
               let arr = [];
               let arr2 = [];
               for (let index = 0; index < JSON.parse(data).length; index++) {
                   const element = JSON.parse(data)[index];
                   element.music= _this.findMusic(element.music_id);
                   element.seat=eval(element.seat);
                //    console.log(_this.findMusic(element.music_id))
                   arr.push(element);
                   arr2.push(eval(element.seat));
               }
               this.setState({
                   orderData:JSON.parse(data),
                   seat:arr2,
               })
            })
        },3000)
    }
    componentWillUpdate = () => {
       
  }
    componentWillReceiveProps = (nextProps) => {
        //  this.findOderById();
   }


   findMusic=(id)=>{
    this.props.findMusicById({id:id},(data)=>{
        const data1 = JSON.parse(data)[0];
        // console.log(data,data1,data1.music);
        return data1.music;
        // console.log(data,data1);
        // this.setState({
        //     musicName:data1.music,
        // })
    })
   }
   tocancel() {
    MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      type: 'warning'
    }).then(() => {
      Message({
        type: 'success',
        message: '删除成功!'
      });
    }).catch(() => {
      Message({
        type: 'info',
        message: '已取消删除'
      });
    });
  }
   
    toPay = () =>{
        console.log(this.state.orderData);
        const _this=this;
        MessageBox.confirm('即将打开支付窗口, 是否继续?', '提示', {
            type: 'warning'
          }).then(() => {
            _this.props.deleteOderById()
            Message({
              type: 'success',
              message: '已打开!'
            });
          }).catch(() => {
            Message({
              type: 'info',
              message: '已取消'
            });
          });
         
    }
    delete = (num) =>{
        const _this=this;
        _this.props.deleteOderById({id:num},()=>{
            
        })
        MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            type: 'warning'
          }).then(() => {
            Message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            Message({
              type: 'info',
              message: '已取消删除'
            });
          });
    }
      
     
    render() {
        return (
            <div className='order'>
                {
                this.state.orderData.map((item, index)=>{
                    return (
                        <div className="order-content">
                            <div><span>音乐会名：</span>
                            {item.music}
                            </div>
                            <div><span>所定用户：</span>
                            {item.user_id}
                            </div>
                            <div><span>当前状态：</span>
                            {item.seat_status === '1'?
                            <div>
                            <span className="statuName">已支付</span>
                            <Button onClick={this.tocancel.bind(this)}>点击可选择退订</Button>

                            </div>
                                
                            :
                            item.seat_status === '2'?
                                <div>
                                <span className="statuName">未支付</span>
                                <Button onClick={this.toPay.bind(this)}>点击去支付</Button>

                                </div>
                                :
                                <div>
                                <span className="statuName">已退订</span>
                                <Button onClick={this.delete.bind(this,item.id)}>可删除订单</Button>
                                </div>
                            } 
                            </div>
                            <div><span>所定位置：</span>{item.seat}
                            {/* {this.state.orderData.map((data, key)=>{
                                return (
                                    <div>
                                        {data.map((data1, keys)=>{
                                            return {data1}
                                        })}
                                    </div>
                                )
                            })} */}
                            </div>
                        </div>
                        )
                   })
                }
                   <div onClick={this.toPay}>点击</div>
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
  )(Order);