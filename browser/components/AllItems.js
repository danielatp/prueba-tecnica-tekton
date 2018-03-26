import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchItems } from '../store/items';
import { addToOrder } from '../store/order'

class Main extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.loadItems();
  }

  toggleItems(event){
    let targetUl = document.getElementById(event.target.innerHTML)
    if(targetUl.style.display === 'none'){
      targetUl.style.display = 'block'
    }else{
      targetUl.style.display = 'none'
    }
  }

  addToOrder(event){
    const itemId = event.target.parentNode.id
    console.log('KEY', itemId)
    // this.props.addItemToOrder(itemId)
  }

  render(){
    return(
      <ul id='all-items-ul'>
        {this.props.categories.map(category => {
          return(
            <li key={category}>
              <button
                onClick={this.toggleItems}
                className='category-btn'
                >
                {category}
              </button>
              <ul id={category} className='category-ul' style={{display: 'none'}}>
                {this.props.items
                  .filter(item => item.category === category)
                  .map(item => {
                    return(
                      <li id={item.id} key={item.id}>
                        {`s/. ${item.price} - ${item.name}`}
                        <button
                          onClick={this.addToOrder}
                          className='add-btn'
                          >
                        +
                        </button>
                      </li>
                    )
                  })}
              </ul>
            </li>
          )
        })}
      </ul>
    )
  }
}

const uniq = (arr) => {
  return Array.from(new Set(arr));
}

const mapStateToProps = (storeState) => {
  return {
    items: storeState.items,
    categories: uniq(storeState.items.map(item => item.category))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => dispatch(fetchItems()),
    addItemToOrder: (itemId) => dispatch(addToOrder(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)


