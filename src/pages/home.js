import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {}

  }

  componentWillMount = () =>{
    console.log(this.props,this.props.routes)
  }

  componentWillReceiveProps(nextProps) {
     
  }

  componentDidMount() {
     
  }

  render() {
    const {routes} = this.props;
    return (
        <div className="content">
        {
            routes.map((route, index) => (
            <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={props => <route.component {...props} routes={route.routes}/>}
            />
            ))
        }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const actions = $.extend({}, );

export default connect(
  mapStateToProps,
  actions
)(Home);
