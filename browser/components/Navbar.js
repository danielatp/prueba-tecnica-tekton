import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  console.log('NAVBAR-PROPS', props)
  return(

    <div>
      {props.user.isCashier ?
        <Link to='/nueva-orden'>
          Nueva Orden
        </Link>
      :
        null
      }

    </div>
  )
}

// const mapState = (state) => {
//   return {
//   }
// }

// const mapDispatch = (dispatch) => {
//   return {
//   }
// }

export default withRouter(connect(null, null)(Navbar))
