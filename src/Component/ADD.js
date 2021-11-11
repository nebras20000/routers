import React, { useState } from 'react'
import {Modal,Button} from "react-bootstrap"

function ADD({addfilm}) {
    const [show, setShow] = useState(false);

    const [newfilm, setnewfilm] = useState({
        title:"",
        description:"",
        posterUrl:"",
        rate:""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
       add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label> title</label> 
            <input onChange={(e)=> setnewfilm({...newfilm,title:e.target.value})} />
            <label> description</label> 
            <input  onChange={(e)=> setnewfilm({...newfilm,description:e.target.value})} />
            <label> posterUrl</label> 
            <input onChange={(e)=> setnewfilm({...newfilm,posterUrl:e.target.value})}/>
            <label> rate</label> 
            <input  onChange={(e)=> setnewfilm({...newfilm,rate:e.target.value})} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>addfilm(newfilm)}>
           ADD
          </Button>
        </Modal.Footer>
      </Modal>
            
        </div>
    )
}

export default ADD
