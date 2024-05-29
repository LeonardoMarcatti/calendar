import React, {useState} from "react";
import Modal from './Modal'

const Day = ({day}) => {
   const [show, setShow] = useState(false)

   const showModal = () => setShow(true)
   const hideModal = () => setShow(false)

   return <>
      {
         show && <Modal>
            <h3>Modal</h3>
            <button type="button" onClick={hideModal} className="btn btn-success">OK</button>
         </Modal>
      }
      <button type="button" className="day" onClick={showModal}>
         <div>{day}</div>
      </button>
   </> 
   
   
}

export default Day