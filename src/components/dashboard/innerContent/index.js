import React, { Component } from 'react';
import { Layout, Input, Select,Button, Carousel} from 'element-react';
import './innerContent.scss';
import test  from '../../../img/card/1.png';
import test1  from '../../../img/card/2.png';
import test2  from '../../../img/card/3.png';
import test3  from '../../../img/card/4.png';
import test4  from '../../../img/card/5.png';
import test5  from '../../../img/card/5.png'

class InnerContent extends Component {
    constructor(props){
        super(props);
        this.state={
            hotConcertData:[test,test1,test2,test3,test4,test5],
        };
    }
    componentWillMount = () => {
         
    }
    onID = (item) =>{
        this.props.onID(item);
    }
    render() {
        return (
            <div className='innerContent'>
                {/* 幻灯片 */}
                {/* //轮播图，热门推荐 */}
                <div className="medium">
                    <Carousel interval="4000" type="card">
                        {
                            this.props.hotConcertData.map((item, index) => {
                                return (
                                <Carousel.Item key={index} className='medium-card'>
                                    <img className="logo" src={item.picture_url} onClick={() => this.onID(item)}  />
                                </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default InnerContent;