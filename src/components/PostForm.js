import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


class PostForm extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const description = this.getDescription.value;
        const data = {
            id: new Date(),
            title,
            description,
            editing: false
        }
    
            this.props.dispatch({
                type:'ADD_POST',
                data});
              this.getTitle.value = '';
              this.getDescription.value = '';
          
    }
 render(){
     return(
        <div>
          <h1>Create Post</h1>
            <Form onSubmit={this.handleSubmit}>
             <Form.Label>Title</Form.Label>
              <Form.Control required type="text" ref={(input)=>this.getTitle=input}
                placeholder="Enter Post Title" />
            <br/>
             <Form.Label>Description</Form.Label>
              <Form.Control required type="text" ref={(input)=>this.getDescription =input} cols="28" 
                placeholder="Enter Post" />
            <br/>
             <Button variant="primary" type="submit">Post</Button>
            </Form>
        </div>
     )
 }
}

export default connect()(PostForm);