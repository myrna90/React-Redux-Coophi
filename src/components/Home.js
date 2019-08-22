import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostForm from './PostForm';
import AllPost from './AllPost';

class Home extends React.Component{
    render(){
        return(
        <div>
         <h1>Home</h1>
           <Container>
            <Row>
              <Col xs={4}>
              <PostForm/>
              </Col>
              <Col xs={4}>
              <AllPost/>
              </Col>
            </Row>
           </Container>
        </div>
        )
    }
}

export default Home;
