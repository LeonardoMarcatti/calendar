import React, {useState} from "react";
import Select from '../components/UI/Select';
import {months} from '../utils/utils'
import Month from "../components/Month";

const Calendar = () => {
   const [month, setMonth] = useState(null)

   const onSelect = (event) => {
      const value = event.target.value
      const selected_month = months.find(el => el.month == value)
      setMonth(selected_month)
   }

   return <>
      <Select select={onSelect} />
      {
         month && <Month data={month} />
      }
   </>
}

export default Calendar