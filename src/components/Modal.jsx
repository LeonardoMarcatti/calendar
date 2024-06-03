import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({children, modalClass}) => {
   const dialog = useRef();
   useEffect(() => {
     const modal = dialog.current;
     modal.showModal();
 
     return () => {
       modal.close(); // needed to avoid error being thrown
     };
   }, []);
 
   return createPortal(
     <dialog ref={dialog} id='myModal' className={`modal-dialog-scrollable ${modalClass}`}>
      {children}
     </dialog>,
     document.getElementById('modal')
   );
 }

 export default Modal