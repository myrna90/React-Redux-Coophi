import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Post extends React.Component{
    render(){
        return(
            <div>
              <Card style={{ width: '18rem' }}>
               <Card.Body>
                <Card.Title>{this.props.post.title}</Card.Title>
                 <Card.Text>{this.props.post.description}</Card.Text>
                <Button onClick={()=>this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})} 
                variant="info">Editar</Button>
                <Button onClick={()=>this.props.dispatch({type:'DELETE_POST', id:this.props.post.id})} 
                variant="warning">Borra</Button> 
               </Card.Body>
              </Card>   
            </div>
        )
    }
}

export default connect()(Post);
