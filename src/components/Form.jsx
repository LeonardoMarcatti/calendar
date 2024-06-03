import React from "react";

const Form = ({onSubmit, onCancel, day, data}) => {
   return <form action="#" method="post" onSubmit={onSubmit} >
      <div className="mb-3">
         <label htmlFor="title" className="form-label">Título</label>
         <input type="text" id="title" name="title" className="form-control" defaultValue={data && data.title} />
         <input type="text" name="day" id="day" hidden defaultValue={day}/>
         <input type="text" name="taskID" id="taskID" hidden defaultValue={data && data.taskID }/>     
      </div>
      <div className="mb-3">
         <label htmlFor="description" className="form-label">Descrição</label>
         <textarea name="description" id="description" className="form-control" defaultValue={data && data.description}></textarea>
      </div>
      <div className="mb-3">
         <label htmlFor="city" className="form-label">Cidade</label>
         <input type="text" id="city" name="city" className="form-control" defaultValue={data && data.city}/>
      </div>
      <div className="mb-3">
         <button type="submit" className="btn btn-success me-2">Salvar</button>
         <button type="reset" className="btn btn-warning" onClick={onCancel}>Cancela</button>
      </div>
   </form>
}

export default Form;