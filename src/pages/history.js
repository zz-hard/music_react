import React, { Component } from 'react';
import { Layout, Input, Select,Button, Carousel} from 'element-react';
import './scss/history.scss';
import wd from '../img/wd.jpg';
import $ from 'jquery';
import Header from '../components/dashboard/header';

// import video from 'https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Winston_Recall.mp4';

class History extends Component {
    constructor(props){
        super(props);
        this.state={
            selectData:['音乐会音乐会音乐会音乐会音乐会','音乐节','歌手'],
            hotConcertData:[1,2,3,4,5,6],
        };
    }
    login = () => {
        this.props.history.replace('/login');
    }
    render() {
        return (
            <div className='history'>
                <Header login={this.login}></Header>
                <div className='history-video'>
                <video  autoPlay onClick={this.changeStatus} id="popVideo" style={{borderBottomLeftRadius: '4px', borderTopLeftRadius: '4px'}}>
                    <source src='https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Winston_Recall.mp4'/>
                    {/* <source src={this.props.url}/> */}
                </video>
                </div>
                

                {/* <div className='foot'>
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
                </div> */}
            </div>
        );
    }
}

export default History;