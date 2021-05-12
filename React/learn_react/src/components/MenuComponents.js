import React , { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardBody, CardTitle,  CardText} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null

        };        
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    // renderDish(dish) {
    //     if (dish != null) {
    //         return (
    //             <Card>
    //                 <CardImg top width="20%" height="20%" src={dish.image}  alt={dish.name} /> 
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         )
    //     } 
    //     else {
    //         return(
    //             <div></div>
    //         )
    //     }
    // }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-4 mt-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg top width="100%" src={dish.image}  alt={dish.name} /> 
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
                
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
              
                <DishDetail dish={this.state.selectedDish} ></DishDetail>
                {/* {this.renderDish(this.state.selectedDish)} */}
                  
               
               
            </div>
        );
    }
}


export default Menu;