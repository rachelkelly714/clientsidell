

import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';



const Charinfo = (props) => {

    




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
      width: '690px',
      padding: '20px 20px 20px 5px',
      borderRadius: '2em',
      float: 'left',
      opacity: '.8',
      alignItems: 'center',
      flexDirection: 'row',
      fontSize: '22px',
      top: '150px'

      
  
  
  }

 


    return (
        
        <Form style= {formStyles}>
          <Row>
            <Col md={6}>
              <FormGroup style = {inputStyles}>
                <Label for="character name" styles={labelStyles}>Character Name</Label>
                <Input style= {inputStyles}  name="characterName" id="characterName" placeholder="character name" />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="playername">Player Name</Label>
                <Input style = {inputStyle} name="player name" id="playername" placeholder="player name" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="alignment">Alignment</Label>
                <Input style = {inputStyle} name="alignment" id="alignment" placeholder="alignment" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="race">Race</Label>
                <Input style = {inputStyle} name="race" id="race" placeholder="race" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="size">Size</Label>
                <Input style = {inputStyle} name="size" id="size" placeholder="size" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="diety">Diety</Label>
                <Input style = {inputStyle} name="diety" id="diety" placeholder="diety" />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="class">Class</Label>
                <Input style = {inputStyle} name="class" id="diety" placeholder="class" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="level">Level</Label>
                <Input style = {inputStyle} name="level" id="level" placeholder="level" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="physical description">Physical Description</Label>
                <Input style = {inputStyle} name="physical description" id="physical description" placeholder="physical description" />
              </FormGroup>
            </Col>












          </Row>
          
          
        </Form>
       
      );
    }


export default Charinfo;