import React from "react";
import {useDispatch} from 'react-redux'
import { deleteDuty } from "../storage/storage";

const ScheduleItem = ({item, id, onEdit}) => {
  const dispatch = useDispatch()

  const handleDelete = (val) => {
    dispatch(deleteDuty(val))
  }

   return <div className="item">
      <div>
        <h4>{item.title}</h4>
        <h5>{item.description}</h5>
      </div>
      <div>
        <button type="button" className="btn btn-danger me-2" onClick={() => handleDelete(id)}><i className="fa-solid fa-trash"></i></button>
        <button type="button" className="btn btn-success"  onClick={() => onEdit(id)}><i className="fa-solid fa-pen-to-square"></i></button>
      </div>
   </div>
}

export default ScheduleItem