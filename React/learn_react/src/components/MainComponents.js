import React, { Component } from 'react';
import Home from './HomeComponent';
import '../App.css';
import Menu from './MenuComponents';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';




class Main extends React.Component {
  constructor(props)  {
    super(props);
    
    this.state = {
      dishes: DISHES,
      selectedDish : null,
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
}


  render() {
    const HomePage = (props) => {
      return(
          <Home 
          />
      );
    }


    return (
      <div>
        <Header/>
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/> } />
            <Redirect to="/home" />
        </Switch>
        <div className="row">
            <div className="col-8">
                <Menu dishes={this.state.dishes} onClick ={(dishId) => this.onDishSelect(dishId)}/>
            </div>
            <div className="col-4">
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        </div>
        <Footer/>
      </div>
      
    );
  }
}
  


export default Main;
