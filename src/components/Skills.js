import { InputGroup, InputGroupAddon, InputGroupText, Input, Label, Form, Row } from 'reactstrap';




const Skills = (props) => {


    const labelStyles = {
        position: 'center',
        textAlign: 'center',
        color: 'white',
        marginLeft: '10px',
        padding: '20px 20px 20px 5px',
        width: '700px'

      
    }

    const ipt = {
        width: '100px',
        padding: '20px 20px 3px 5px',
        position: 'center',
        marginLeft: '100px',

    }


    const formStyles = {
        backgroundColor: 'rgba(103, 65, 114, 1)',
        width: '300px',
        padding: '20px 20px 20px 5px',
        borderRadius: '2em',
        opacity: '.8',
        flexDirection: 'row',
        fontSize: '22px',
        display: 'inline',
        float: 'right',
        position: 'absolute',
        left: '1150px'
     

    }
  


    return (
      <div>
         <Form style={formStyles}>
             <Row>
         <p>Skills</p>
        <InputGroup style={ipt}>
       
          <InputGroupAddon addonType="prepend">
          
            <InputGroupText>
            <Label for="character name" styles={labelStyles}>Athletics</Label>
              <Input  addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Acrobatics</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Sleight of Hand</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Stealth</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Arcana</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>History</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Investigation</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Nature</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Religon</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Animal Handling</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Insight</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Medicine</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Survival</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Deception</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Intimidation</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Performance</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        <InputGroup style={ipt}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
        <Label for="character name" styles={labelStyles}>Persuasion</Label>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="prof + mods" />
        </InputGroup>
        </Row>
       
        </Form>










        
      </div>
    );
  };
  
  export default Skills;