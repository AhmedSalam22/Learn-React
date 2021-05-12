import React , { Component } from 'react';
import { Card, CardImg, List, CardBody, CardTitle,  CardText} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments != null) {
            const listOfComments = comments.map((comment) => {
                return (
                    <list>
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {comment.date.slice(0,10)}</li>

                    </list>
                );
            });
            return (
                <List type="unstyled">
                   {listOfComments}
                </List>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top width="20%" height="20%" src={dish.image}  alt={dish.name} /> 
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            )
        } 
        else {
            return(
                <div></div>
            )
        }
    }


}


export default DishDetail;