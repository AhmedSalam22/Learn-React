import React  from 'react';
import { Card, CardImg, List, CardBody, CardTitle,  CardText} from 'reactstrap';


function RenderDish({dish}) {

}


    function RenderComments({comments}) {
        if (comments != null) {
            const listOfComments = comments.map((comment) => {
                return (
                    <list>
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>

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

    const DishDetail = (props) => {
        const dish = props.dish;
        if (dish != null) {
            return (
                <div className="container position-sticky fixed-top">
                    <div className="row">
                        <div className="col-12">
                            <Card>
                                <CardImg top width="20%" height="20%" src={dish.image}  alt={dish.name} /> 
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12">
                            <h4>Comments</h4>
                            <RenderComments comments={dish.comments}/>
                        </div>
                        <div className="col-12"></div>
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





export default DishDetail;