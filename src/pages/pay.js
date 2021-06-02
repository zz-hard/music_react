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
                 
            </div>
        )
    }
}
