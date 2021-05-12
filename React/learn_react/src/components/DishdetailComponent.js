import React, { useState } from 'react';
import { Card, CardImg, List, CardBody, CardTitle,  CardText} from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

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

function RenderDishDetailCard({dish}) {
    return (
        <Card>
            <CardImg top width="20%" height="20%" src={dish.image}  alt={dish.name} /> 
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function renderWhat(option, dish) {

  if (option === 1 || option === null) {
      return (
            <RenderDishDetailCard dish={dish}/>
      );
  } else if (option === 2) {
      return ( 
            <RenderComments comments={dish.comments}/>
        );
  }
}


const DishDetail = (props) => {
    const [rSelected, setRSelected] = useState(null);

    const dish = props.dish;
    if (dish != null) {
        return (
            <div className="container position-sticky fixed-top">
                <div className="row">
                    <div className="col-12">
                        <ButtonGroup>
                            <Button color="primary" onClick={() => setRSelected(1)} active={rSelected === 1}>Detail</Button>
                            <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === 2}>Comments</Button>
                        </ButtonGroup>
                        {renderWhat(rSelected, dish)}
                    </div>
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