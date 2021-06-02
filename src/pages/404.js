import React, {Component} from 'react';
import Bg404 from '../img/404.gif';
import {Button} from 'element-react'
import './scss/404.scss';

export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {}
    static propTypes = {}

    render() {
        return (
            <div className="notFind">
                <img alt='你要的页面找不到哦ξ( ✿＞◡❛)，请点击返回上一页' src={Bg404} />
                <Button.Group className="Btn">
                    <Button type="primary" icon="d-arrow-left" className="backBtn btn" onClick={()=>{ window.history.back();}}>返回上一页</Button>
                    <Button type="primary" icon="menu" className="backHomeBtn btn" onClick={()=>{ this.props.history.replace('/home');}}>返回首页</Button>
                </Button.Group>
            </div>
        )
    }
}
