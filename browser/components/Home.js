import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Navbar from './Navbar';
import { me } from '../store/user';

class Home extends Component{
  componentDidMount(){
    this.props.loadUser();
  }

  render(){
    return(
      <div id='home'>
        <h1>Tekton Pizza</h1>
        {this.props.user && this.props.user.id
        ?
          <div id='logout-display'>
            <div>
              <h3>{`Hola ${this.props.user.name.split(' ')[0]}!!`}</h3>
              <button id='logout-btn'>Logout</button>
            </div>
            <Navbar user={this.props.user}/>
          </div>
        :
          <Login />
        }
      </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(me())
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
