import React, { Component } from 'react';
import '../App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponents';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends React.Component {
  constructor(props)  {
    super(props);
    
    this.state = {
      dishes: DISHES,
      selectedDish : null
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
}


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
                BIS
            </NavbarBrand>
          </div>
        </Navbar>
        <div className="row">
            <div className="col-8">
                <Menu dishes={this.state.dishes} onClick ={(dishId) => this.onDishSelect(dishId)}/>
            </div>
            <div className="col-4">
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        </div>
      </div>
    );
  }
}
  


export default Main;
