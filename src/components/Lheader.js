
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

const Lheader = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  
 const h1Styles = {
    color:'rgba(217, 30, 24, 1)',
    fontWeight: 'bold',
    position: 'absolute',
    top: '8px', 
    left: '16px',
    
 }

  return (
    <div style={h1Styles}>
        <header>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Linked Legacy</ModalHeader>
        <ModalBody>
        The name of the app is inspired by a spell that does the following: “This spell helps build community and ensure a shared vision for the future. When any of the affected creatures succeeds at a Knowledge check to answer a question within its field of study or identify a monster and its special powers or vulnerabilities, as a free action the affected creature can share any information gained automatically with all targets of the spell. If any of the targets move out of the spell’s range, the spell ceases to function for all of them until they are all within close range of you again.”

          
        </ModalBody>
       
      </Modal>
      </header>
    </div>
  );
}

export default Lheader;