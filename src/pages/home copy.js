import React, { Component } from 'react';
import { Layout, Input, Select,Button, Carousel} from 'element-react';
import './scss/home.scss';
import wd from '../img/wd.jpg';
import $ from 'jquery';

class home extends Component {
    constructor(props){
        super(props);
        this.state={
            
        };
    }
    login = () => {
       console.log(1);
    }
    render() {
        return (
            <div className='home'>
                <div className='header'>
                    {/* //登录注册 */}
                    <div className='attest'>
                        <>&nbsp;</>
                        <div className="btn">
                            <Button type="info" size="large" onClick={this.login}>登录</Button>
                            <Button plain={true} type="info" icon="plus" size="large">注册</Button>
                        </div>
                    </div>
                    {/* //轮播图，热门推荐 */}
                    <div className="medium">
                        <Carousel interval="4000" type="card">
                            {
                                this.state.hotConcertData.map((item, index) => {
                                    return (
                                    <Carousel.Item key={index} className='medium-card'>
                                        <h3>{item}</h3>
                                    </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div className='search'>
                        <Input placeholder="请输入内容--ξ( ✿＞◡❛)" 
                        className='search-input'
                        size="large"
                        prepend={
                        <Select value="">
                            {
                                this.state.selectData.map((item, index) => <Select.Option key={index} label={item} value={index} style={{backgroundImage:"../img/backgroud.jpeg"}} />)
                            }
                        </Select>
                        } append={<Button type="primary" icon="search">搜索</Button>} />
                    </div>
                </div>
                {
                    this.state.hotConcertData.map((item, index) => {
                        return (
                        <div>1111</div>
                        )
                    })
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

export default home;