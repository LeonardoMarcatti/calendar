import React, {useState} from "react";
import Modal from './Modal'
import Form from "./Form";
import ScheduleItem from './ScheduleItem'
import {addDuty, updateDuty} from "../storage/storage";
import {useDispatch, useSelector} from 'react-redux'

let duty = null

const Day = ({day, id}) => {
   const [modal, setModal] = useState({show: false, form: false, day: null})
   const dispatch = useDispatch()
   const dutiesList = useSelector(state => state.duties)
   const length = dutiesList.filter(el => el.day == id).length
   const duties = dutiesList.filter(el => el.day == id)
   const addItem = (data) => dispatch(addDuty(data))
   const updateItem = (data) => dispatch(updateDuty(data))
   const showModal = (day) => setModal({show: true, day: day})
   const hideModal = () => setModal(prevState => {
      const newState = {...prevState, show: false}
      return newState
   })

   const handleSubmit = (event) => {
      event.preventDefault()
      const title = event.target.title.value
      const description = event.target.description.value
      const city = event.target.city.value
      const day = event.target.day.value
      let taskID = event.target.taskID.value
      console.log(taskID);
      
      if (taskID == '') {
         taskID = Math.random()
      }
      
      const data = {title, description, day, city, taskID}
      console.log(data);
      if (duty) {
         updateItem(data)
         console.log(1);
      } else {
         addItem(data)
         console.log(2);
      }

      hideModal()
   }

   const formModal = () => setModal(prevState => {
      const newState = {...prevState,  form: true}
      return newState
   })

   const backModal = () => setModal(prevState => {
      const newState = {...prevState, form: false}
      return newState
   })

   const getDuty = (val) => {
      duty = duties.find(el => el.taskID == val)
      formModal()
      return duty
   }

   return <>
      {
         modal.show && <Modal modalClass={modal.form?  'modalForm' : length == 0? 'modalNoTasks' : 'modalTasks' }>
            <h3>Tarefas</h3>
            {
               !modal.form && duties.length == 0 && <h6>Não há tarefas agendadas para hoje</h6>
            }

            {
               !modal.form && duties.length > 0 && duties.map(el => <ScheduleItem key={Math.random()} item={el} id={el.taskID} onEdit={() => getDuty(el.taskID)} />)
            }

            {
               !modal.form && <div className="mt-3">
                  <button type="button" onClick={formModal} className="btn btn-warning me-3">Adicionar</button>
                  <button type="button" onClick={hideModal} className="btn btn-danger">Fechar</button>
                </div>
            }
            
            {
               modal.form && <Form onSubmit={handleSubmit} onCancel={backModal} day={modal.day} data={duty} />
            }            
         </Modal>
      }
      <button type="button" className="day" onClick={() => showModal(id)} id={id}>
         <div>{day}</div>
         {
            length > 0 && <h2>{length}</h2>
         }
      </button>
   </>
   
}

export default Day