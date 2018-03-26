import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import { me, logout } from '../store/user';

class Home extends Component{
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }
  componentDidMount(){
    this.props.loadUser();
  }

  handleLogout(){
    this.props.logout()
    this.props.history.push('/')

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
              <button id='logout-btn' onClick={this.handleLogout}>Logout</button>
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
    loadUser: () => dispatch(me()),
    logout: () => dispatch(logout())
  }
}

const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

export default HomeContainer;
