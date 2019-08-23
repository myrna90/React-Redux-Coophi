import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';


class Post extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.description}</p>
             <div>
             <Button onClick={()=>this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})} 
                variant="info">Edit</Button>
             <Button onClick={()=>this.props.dispatch({type:'DELETE_POST', id:this.props.post.id})} 
               variant="warning">Delete</Button> 
             </div>
                 
            </div>
        )
    }
}

export default connect()(Post);
