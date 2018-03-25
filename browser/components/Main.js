import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchItems } from '../store/items';

class Main extends Component {
  componentDidMount(){
    this.props.loadItems();
  }

  render(){
    console.log('THIS.PROPS: ',this.props)
    return(
      <ul>
        {this.props.items.map(item => {
          return(
            <li key = {item.id}>
              {item.name}
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    items: storeState.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => dispatch(fetchItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)


