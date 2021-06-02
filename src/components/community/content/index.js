import React, { Component } from 'react';
import { Layout, Input, Select,Button, Carousel} from 'element-react';
import './communityContent.scss';
import $ from 'jquery';
import test  from '../../../img/card/1.png';

class CommunityContent extends Component {
    constructor(props){
        super(props);
        this.state={
            // hotConcertData:[1,2,3,4,5,6],
            hotConcertData:[test,test,test,test,test,test],
        };
    }
    releaseConcert = () => {
        $(".upload").slideUp();
        let txt=$(".Edit").text();
        if(txt==""){
            $(".Edit").focus();
        }else{
            $(".shuoshuo").show();
            // let html=$(".shuoshuo").html();
            // if($(".upload")[0].firstChild==$('img')[0]){
            //     $(".shuoshuo").html(html+"<div class='box'><p>"+txt+"</p>"+$(".upload").html()+"</div>");
            // }else{
            //     $(".shuoshuo").html(html+"<div class='box'><p>"+txt+"</p></div>");
            // }
        }
        $(".upload").html("");
        $(".Edit").text("");
    }
    render() {
        return (
            <div className='communityContent'>
                {/* 幻灯片 */}
                {/* //轮播图，热门推荐 */}
                <div className="container-communityContent">
                    {
                        this.props.hotConcertData.map((item, index) => {
                            return (
                                <div>
                                    <Layout.Row gutter="20" className="row">
                                        <Layout.Col span="16">
                                            <div className="grid-content bg-purple">
                                            <img className="logo" src={item.picture_url}></img>
                                            </div>
                                        </Layout.Col>
                                        <Layout.Col span="8">
                                            <div className="grid-content bg-purple">
                                             评论区：
                                             <div id="MesCon">
                                                <span className='concertName'>输入评论：</span><div className="Edit" contenteditable="true"></div>
                                            </div>
                                            <span className="fb" onClick={this.releaseConcert.bind(this,item.id)}>发布音乐会评论</span>
                                            </div>
                                        </Layout.Col>
                                    </Layout.Row>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CommunityContent;