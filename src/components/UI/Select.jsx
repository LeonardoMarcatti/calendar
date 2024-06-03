import React from "react";
import { months } from "../../utils/utils";


const Select = ({select}) => {
   return <div className="col-2 mb-3">
      <select name="month" id="month" className="form-control" onChange={select}>
         <option value="0"  defaultValue="0">Selecione</option>
         {
            months.map(el => <option value={el.month} key={el.month}>{el.month}</option>)
         }
      </select>
   </div>
}

export default Select
