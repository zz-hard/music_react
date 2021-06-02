import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Input, Select,Button, Carousel} from 'element-react';
import './header.scss';
import $ from 'jquery';
// import loginin from '@img/svg/login-in.svg';
import loginin from '../../../img/svg/login-in.svg';
import loginout from '../../../img/svg/login-out.svg';
import loginout2 from '../../../img/svg/login-out2.svg';


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogin:sessionStorage.getItem('token') !=null ? true:false,
            isSearch:this.props.notSearch ? true : false,
            ishindden:true,
            istest:false,
        };
    }
    componentDidMount = () =>{
        // const controller = new VideoControl();
        $("#personal").hide();
        this.handleMouse();
        if (sessionStorage.getItem('role')==='1'&&sessionStorage.getItem('role')==='2') {
            this.setState({
                istest:true,
            })
        }
        
    }
    pushAddress = (address) => {
       if(address === '登录'){
        this.props.login();
       }
       if(address === '退出'){
           this.setState({
            isLogin:false,
           })
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('picture');
       }
    }
    handleMouse = () => { 
        const _this = this;
        $("#hover").mouseover(function () {
            $("#personal").show();
        });
        $("html").click(function(){
            $("#personal").hide();
          });
    }
    personalCenter = () =>{
        
    }
    test = () =>{
        this.setState({
            istest:false,
        })
    }
    render() {
        const username = sessionStorage.getItem('username');
        const picture = sessionStorage.getItem('picture');
        return (
            <div className='header'>
                <div className="container-header">
                <Layout.Row gutter="20">
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple select-login"></div>
                    </Layout.Col>
                    <Layout.Col span="16">
                        <div className="grid-content bg-purple select-login">
                        <Layout.Row gutter="20">
                            <Layout.Col span="4">
                                <div className="grid-content bg-purple">
                                    <a className="header__nav-link" href="#/home" onClick={this.pushAddress.bind(this,'首页')}>首页 
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z"/></svg>
                                    </a>    
                                </div>
                            </Layout.Col>
                            <Layout.Col span="6">
                                <div className="grid-content bg-purple">
                                    <a className="header__nav-link" href="#/community" onClick={this.pushAddress.bind(this,'社区')}>社区 
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z"/></svg>
                                    </a>    
                                </div>
                            </Layout.Col>
                            <Layout.Col span="6">
                                <div className="grid-content bg-purple">
                                    <a className="header__nav-link" href="#/history" onClick={this.pushAddress.bind(this,'往期回顾')}>往期回顾 
                                        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.93893 3.30334C1.08141 3.30334 0.384766 2.60669 0.384766 1.75047C0.384766 0.894254 1.08141 0.196308 1.93893 0.196308C2.79644 0.196308 3.49309 0.894254 3.49309 1.75047C3.49309 2.60669 2.79644 3.30334 1.93893 3.30334Z"/></svg>
                                    </a>    
                                </div>
                            </Layout.Col>
                            {this.state.isSearch ? 
                            null
                            :
                            <Layout.Col span="8">
                                <div className="grid-content bg-purple">
                                <Input placeholder="请输入内容--ξ( ✿＞◡❛)" append={<Button type="primary" icon="search">搜索</Button>}></Input>
                                </div>
                            </Layout.Col>
                            }
                            
                        </Layout.Row>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple select-login" id='outhover'>
                            {this.state.isLogin ? 
                            <div>
                                <div className="header_user" id='hover' onClick={this.pushAddress.bind(this,'退出')}>
                                <span>{username}欢迎登录</span>
                                <img className="logout" src={loginout}  />
                                </div> 
                                <div className='personal-information' id='personal'>
                                    {this.state.istest?
                                        <a href='#/releaseConcert' className='release-concert personalName'>发布音乐会</a>
                                        :
                                        null
                                    }
                                    <a href="#/personalCenter" className='personal-center personalName' onClick={this.personalCenter}>个人中心</a>
                                    <div className='sign-out personalName' onClick={this.pushAddress.bind(this,'退出')}>
                                        <span>退出登录</span>
                                        {/* <img className="logout" src={loginout2}  /> */}
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="header_user" onClick={this.pushAddress.bind(this,'登录')} >
                               <span>登录</span>
                               <img className="login" src={loginin} />
                           </div>
                            }
                            
                            
                        </div>
                    </Layout.Col>
                </Layout.Row>

		        </div>
            </div>
        );
    }
}

export default Header;
  