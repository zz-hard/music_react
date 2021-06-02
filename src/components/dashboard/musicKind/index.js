import React, { Component } from 'react';
import { Layout, Input, Select,Button, Carousel} from 'element-react';
import './musicKind.scss';
import $ from 'jquery';
import test  from '../../../img/home/test.jpg';
import test1  from '../../../img/card/2.png';
import test2  from '../../../img/card/3.png';
import test3  from '../../../img/card/4.png';
import test4  from '../../../img/card/5.png';
import test5  from '../../../img/card/6.png';

class MusicKind extends Component {
    constructor(props){
        super(props);
        this.state={
            // hotConcertData:[1,2,3,4,5,6],
            hotConcertData:[test,test1,test2,test3,test4,test5],
        };
    }
    enter = () => {
        console.log('点击获取当前id，进去订票详情页')
    }
    render() {
        return (
            <div className='musicKind'>
                {/* 订票分类内容 */}
                <div className="container-musicKind">
                {/* 巡回音乐会 */}
                <div className="name">巡回音乐会:</div>
                <Layout.Row gutter="20" className="row">
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple" onClick={this.enter}>
                            <img className="logo" src={test} />
                            <div>巡回音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test1} />
                            <div>Live音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test2} />
                            <div>新年音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test3} />
                            <div>新年音乐会</div>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                {/* Live音乐会 */}
                <div className="name">Live音乐会:</div>
                <Layout.Row gutter="20" className="row">
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test4} />
                            <div>巡回音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test5} />
                            <div>Live音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test1} />
                            <div>新年音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test2} />
                            <div>新年音乐会</div>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                {/* 新年音乐会 */}
                <div className="name">新年音乐会:</div>
                <Layout.Row gutter="20" className="row">
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test4} />
                            <div>巡回音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test4} />
                            <div>Live音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test} />
                            <div>新年音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test1} />
                            <div>新年音乐会</div>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                {/* 交响乐音乐会 */}
                <div className="name">交响乐音乐会:</div>
                <Layout.Row gutter="20" className="row">
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test4} />
                            <div>巡回音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test4} />
                            <div>Live音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test4} />
                            <div>新年音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test4} />
                            <div>新年音乐会</div>
                        </div>
                    </Layout.Col>
                </Layout.Row>

                {/* 校园音乐会 */}
                <div className="name">校园音乐会:</div>
                <Layout.Row gutter="20" className="row">
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test4} />
                            <div>巡回音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="8">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test5} />
                            <div>Live音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test5} />
                            <div>新年音乐会</div>
                        </div>
                    </Layout.Col>
                    <Layout.Col span="4">
                        <div className="grid-content bg-purple">
                            <img className="logo" src={test5} />
                            <div>新年音乐会</div>
                        </div>
                    </Layout.Col>
                </Layout.Row>
		        </div>
            </div>
        );
    }
}

export default MusicKind;