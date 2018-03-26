import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import history from 'history';
import { fetchItems } from '../store/items';
// import { me } from '../store/user';
import AllItems from './AllItems';
import Login from './Login';
import Home from './Home';

class Main extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadItems();
    // this.props.loadUser();
  }

  render(){
    console.log('MAIN-PROPS', this.props)
    return(
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='items' component={AllItems} />
        </Switch>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    items: storeState.items,
    // user: storeState.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => dispatch(fetchItems()),
    // loadUser: () => dispatch(me())
  }
}

const MainContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default MainContainer;


