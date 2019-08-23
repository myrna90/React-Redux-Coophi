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
    console.log(data);
            this.props.dispatch({
                type:'ADD_POST',
                data});
              this.getTitle.value = '';
              this.getDescription.value = '';
          
    }
 render(){
     return(
        <div>
          <h1>Crear nuevo elemento</h1>
            <Form onSubmit={this.handleSubmit}>
             <Form.Label>Titulo</Form.Label>
              <Form.Control required type="text" ref={(input)=>this.getTitle=input}
                placeholder="Titulo elemento" />
            <br/>
             <Form.Label>Descripción</Form.Label>
              <Form.Control style={{height:"10em"}} required type="text" ref={(input)=>this.getDescription =input} cols="28" 
                placeholder="Descripción elemento" />
            <br/>
             <Button variant="info" type="submit">Crear</Button>
            </Form>
        </div>
     )
 }
}

export default connect()(PostForm);