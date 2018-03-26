import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { me } from '../store/user';

class Home extends Component{

  componentDidMount(){
    this.props.loadUser();
  }

  render(){
    console.log('HOME-PROPS', this.props)
    return(
      <div>
        <h1>Tekton Pizza</h1>
        {this.props.user && this.props.user.id ?
          <h3>{`Hola ${this.props.user.name}`}</h3>
          :
          <Login />
        }

      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(me())
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
