

import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';



const Gear = (props) => {

    




    const inputStyles = {

        position: 'center',
        alignItems: 'center',
        marginLeft: '30px',
        marginRight: '50px',
    
        
        
      
    }

    const inputStyle = {
        position: 'center',
        alignItems: 'center',
        marginLeft: '30px',
    

    }

    const labelStyles = {
        position: 'center',
        textAlign: 'center',
      
    }

    const formStyles = {
      backgroundColor: 'rgb(226, 188, 18)',
      width: '390px',
      padding: '20px 20px 20px 5px',
      borderRadius: '2em',
      opacity: '.8',
      alignItems: 'center',
      flexDirection: 'row',
      fontSize: '22px',
      position: 'absolute',
      top: '1300px',
      height: '400',
      marginLeft: '600px'
      
      
  
  
  }

 


    return (
        
        <Form style= {formStyles}>
            <p>Gear</p>
          <Row>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Input style= {inputStyles}  name="gear" id="gear"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Input style= {inputStyles}  name="gear" id="gear"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Input style= {inputStyles}  name="gear" id="gear"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Input style= {inputStyles}  name="gear" id="gear"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Input style= {inputStyles}  name="gear" id="gear"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Input style= {inputStyles}  name="gear" id="gear"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Input style= {inputStyles}  name="gear" id="gear"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Input style= {inputStyles}  name="gear" id="gear"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Input style= {inputStyles}  name="gear" id="gear"/>
              </FormGroup>
            </Col>












          </Row>
          
          
        </Form>
       
      );
    }


export default Gear;