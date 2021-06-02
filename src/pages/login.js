import React, { Component } from 'react';
import { connect } from 'react-redux';
import './scss/login.scss'
import { Form, Input, Button, Notification } from 'element-react';
// import { Button } from 'antd';
import symbol from '../img/symbol-login-test.jpg'
import loginBg from '../img/Cover.jpeg';
import loginActions from '../actions/login-action';

class login extends Component {
    constructor(props){
        super(props);
        this.state={
            form: {
                name: '',
                password: '',
            },
            rules: {
                name: [
                  { required: true, message: '用户名不能为空哦ξ( ✿＞◡❛)', trigger: 'blur' }
                ],
                password: [
                  { required: true, message: '密码不能为空哦ξ( ✿＞◡❛)', trigger: 'blur' }
                ],
            }
        };
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        
    }
    componentWillReceiveProps = () =>{
      console.log('props更新');
    }
    handleSubmit(e) {
        e.preventDefault();
        this.refs.form.validate((valid) => {
          if (valid) {
            this.props.login({
              username : this.state.form.name,
              password : this.state.form.password,
          },(data) => {
            this.props.history.replace('/home');
            Notification({
                title: '欢迎哦ξ( ✿＞◡❛)',
                message: '您已登录成功',
                type: 'success',
                offset: 100
            });
            sessionStorage.getItem("username",data.username);
          });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      
      handleReset(e) {
        e.preventDefault();
        // this.refs.form.resetFields();
        this.refs.form.validate((valid) => {
          if (valid) {
            this.props.registered({
              username : this.state.form.name,
              password : this.state.form.password,
              role_id : 3,
          },(data) => {
            // this.props.history.replace('/home');
            Notification({
                title: '欢迎哦ξ( ✿＞◡❛)',
                message: '您已注册成功,欢迎登录',
                type: 'success',
                offset: 100
            });
            // sessionStorage.getItem("username",data.username);
          });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      
      onChange(key, value) {
        this.setState({
          form: Object.assign({}, this.state.form, { [key]: value })
        });
      }

    render() {
        return (
            <div className='login'>
              <img className="loginBg" src={loginBg} />
                <h2>Hi,欢迎 登录</h2>
                <div className='login-page'>
                    <div className='left'>
                        <a href="#/home" >
                        <img src={symbol} alt="首页" />
                        </a>
                    </div>
                    <div className='right'>
                        <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="80" className="login-ruleForm">
                            <Form.Item label="用户名：" prop="name">
                                <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')} icon="edit"></Input>
                            </Form.Item>
                            <Form.Item label="密码：" prop="password">
                                <Input value={this.state.form.password} onChange={this.onChange.bind(this, 'password')} icon="edit" type="password"></Input>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={this.handleSubmit.bind(this)}>登录</Button>
                                <Button onClick={this.handleReset.bind(this)}>注册</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    loginData:state.loginData,
  }
};

// export default login;
export default connect(
  mapStateToProps,
  loginActions
)(login);