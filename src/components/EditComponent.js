import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class EditComponent extends React.Component{
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newDescription = this.getDescription.value;
        const data = {
            newTitle,
            newDescription
        }
        this.props.dispatch({type: 'UPDATE', id: this.props.post.id, data: data})
    }
    render(){
        return(
            <div>
            <h1>Editar elemento</h1>
            <Form onSubmit={this.handleEdit}>
             <Form.Label>Titulo</Form.Label>
             <Form.Control required type="text" ref={(input)=>this.getTitle=input}
               defaultValue={this.props.post.title}  placeholder="Enter Post Edit" />
            <br/>
             <Form.Label>Descripción</Form.Label>
             <Form.Control required type="text" ref={(input)=>this.getDescription =input} 
             defaultValue={this.props.post.description} cols="28" 
                placeholder="Enter Post Edit" />
            <br/>
              <Button variant="primary" type="submit">Subir Cambio</Button>
            </Form>
            </div>
        )
    }
}

export default connect()(EditComponent);