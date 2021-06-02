import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Input, Select,Button, Notification,Tabs,Icon} from 'element-react';
import './scss/personalCenter.scss';
import wd from '../img/wd.jpg';
import $ from 'jquery';
import Header from '../components/personalCenter/header';
import UploadPicture from '../components/personalCenter/UploadPicture'
import Message from '../components/personalCenter/message'
import Order from '../components/personalCenter/order'
import Audit from '../components/personalCenter/audit'
import presonalActionCreators from '../actions/presonal-action';

class personalCenter extends Component {
    constructor(props){
        super(props);
        this.state={
            id:null,
            username:null,
            password:null,
            roleId:null,
            pictureUser:null,
            orderData:null,
        };
    }
    componentWillMount = () => {
        this.props.findPresonalInfo({username:sessionStorage.getItem('username')},(data)=>{
            const data1 = JSON.parse(data)[0];
            this.setState({
                id:data1.id,
                username:data1.username,
                password:data1.password,
                roleId:data1.role_id,
                pictureUser:data1.picture_user,
            });

         })
         
    }
    logout = () => {
        this.props.history.replace('/home');
    }
    login = () => {
        this.props.history.replace('/login');
    }
    saveMessage = (data) =>{
        this.props.saveOrUpdatePresonalInfo(
            {
                id:this.state.id,
                username:data.from.username?data.from.username:this.state.username,
                password:data.from.password?data.from.password:this.state.password,
                role_id:data.roleId,
                picture_user:this.state.pictureUser,
            },
            ()=>{ 
                Notification({
                    title: '修改成功ξ( ✿＞◡❛)',
                    message: '请重新登录',
                    type: 'success',
                    offset: 100
                  });
            this.login() })
    } 
    render() {
    const label = <span><Icon name="date" /> 个人信息</span>
        return (
            <div className='personalCenter'>
                {/* <Header login={this.login}></Header> */}
                <Header 
                logout={this.logout}
                ></Header>
                <div className="personalCenter-container">
                    {/* <UploadPicture pictureUser={this.state.pictureUser}></UploadPicture> */}
                    <Tabs type="border-card" activeName="1" >
                        <Tabs.Pane label={label} name="1" >
                            <Message
                            username={this.state.username}
                            password={this.state.password}
                            roleId={this.state.roleId}
                            saveMessage={this.saveMessage}
                            login={this.login}
                            ></Message>
                        </Tabs.Pane>
                        <Tabs.Pane label="订单" name="2" >
                            <Order 
                            orderData={this.state.orderData}
                            > 
                            </Order>
                        </Tabs.Pane>
                        {sessionStorage.getItem('role') === "2" ?
                        <Tabs.Pane label="审核" name="3">
                            <Audit
                            ></Audit>
                        </Tabs.Pane>
                        :
                        null
                        }
                        {/* <Tabs.Pane label="审核" name="3">审核</Tabs.Pane> */}
                        {/* <Tabs.Pane label="角色管理" name="3">角色管理</Tabs.Pane> */}
                        {/* <Tabs.Pane label="定时补偿任务" name="4">定时补偿任务</Tabs.Pane> */}
                    </Tabs>
                </div>
                
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
  )(personalCenter);