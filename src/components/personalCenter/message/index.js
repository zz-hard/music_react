import React, { Component } from 'react';
import { Form, Input, Select,Button, Notification} from 'element-react';
import './Message.scss'; 

class Message extends Component {
    constructor(props){
        super(props);
        this.state={
            isEidt:false,
            labelPosition: 'right',
            form: {
                username: null,
                password: null,
                Spassword:null,
                roleId: null
              },
              Spassword:null,
              roleId: null
        };
    }
    componentWillMount = () => {
        
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            Spassword:nextProps.password,
            roleId: nextProps.roleId
        })
   }
    onChange(key, value) {
        this.setState({
          form: Object.assign(this.state.form, { [key]: value })
        });
      }
      eidt = () =>{
          this.setState(
            prevState => ({
                isEidt : !prevState.isEidt
              })
          )
      }
      save = () =>{
        // console.log(this.state.form,1)
        const _this=this;
        if (this.state.Spassword === this.props.password) {
            _this.props.saveMessage({
                from:_this.state.form,
                roleId:this.state.roleId,
            },()=>{
                this.props.login();
                  this.setState(
                    prevState => ({
                        isEidt : !prevState.isEidt
                      })
                  )
            })
        }
      }
      
     
    render() {
        return (
            <div className='message'>
                {/* //是否修改状态 */}
                {this.state.isEidt?
                <Form labelPosition={this.state.labelPosition} labelWidth="100" model={this.state.form} className="demo-form-stacked">
                    <Form.Item label="用户名：" value="left">
                    <Input value={this.state.form.username} onChange={this.onChange.bind(this, 'username')} placeholder={this.props.username}></Input>
                    </Form.Item>
                    <Form.Item label="用户密码：">
                    <span>原密码：</span><Input value={this.state.form.Spassword} onChange={this.onChange.bind(this, 'Spassword')}  ></Input>
                    <span>新密码：</span><Input value={this.state.form.password} onChange={this.onChange.bind(this, 'password')}  ></Input>
                    </Form.Item>
                    <Form.Item label="权限：">
                        {this.props.roleId === 1?
                        <Input value={this.state.form.role} onChange={this.onChange.bind(this, 'role')} placeholder="全局管理员"></Input>
                        :
                        this.props.roleId === 2?
                        <Input value={this.state.form.role} disabled onChange={this.onChange.bind(this, 'role')} placeholder="音乐会发布者(当前权限不能修改)"></Input>
                            :
                            this.props.roleId === 3?
                            <Input value={this.state.form.role} disabled onChange={this.onChange.bind(this, 'role')} placeholder="普通用户(当前权限不能修改)"></Input>
                            :
                            null
                        }
                    </Form.Item>
                </Form>
                :
                <div>
                <div><span className="name">用户名：{this.props.username}</span></div>
                <div><span className="name">用户密码：***</span></div>
                <div><span className="name">权限：</span>
                {this.props.roleId === 1?
                        <span >全局管理员</span>
                        :
                        this.props.roleId === 2?
                        <span >音乐会发布者</span>
                            :
                            this.props.roleId === 3?
                            <span >普通用户</span>
                            :
                            null
                        }
                </div>
                </div>
                }
                {this.state.isEidt?
                <Button type="primary" icon="edit" className="btn" onClick={this.eidt}>取消修改</Button>
                :
                <Button type="primary" icon="edit" className="btn" onClick={this.eidt}>修改</Button>
                }
                <Button type="primary" className="btn" onClick={this.save}>提交修改</Button>
            </div>
        );
    }
}

export default Message;