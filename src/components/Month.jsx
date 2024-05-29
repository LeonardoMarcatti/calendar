import React from "react";
import Day from './Day'
import { weekDays } from "../utils/utils";
const Month = ({data}) => {

   const setEmptyDays = (val) => {
      const emptyDays = []
      for (let i = 0; i < val; i++) {
         emptyDays.push(<Day key={i}/>)
      }

      return emptyDays
   }

   const setDays = (val) => {
      const fullDays = []
      for (let i = 1; i < val.days; i++) {
         fullDays.push(<Day key={`${val.month}${i}`} day={i}/>)
      }
      return fullDays
   }

   return <div id="monthContainer" className={data && 'border'} >
      
      <div id="monthHeader">
      {
         weekDays.map(el => <h5 key={el}>{el}</h5>)
      }
      </div>
      
      {
         setEmptyDays(data.start)
      }
      {
         setDays(data)
      }
   </div>
}

export default Month