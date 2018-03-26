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
  }

  render(){
    return(
        <div>
          <Home />
          <Switch>
            <Route exact path='/nueva-orden' component={AllItems} />
          </Switch>
        </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    items: storeState.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => dispatch(fetchItems()),
  }
}

const MainContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default MainContainer;


