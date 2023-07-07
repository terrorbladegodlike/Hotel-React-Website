import React, {useState} from 'react'

// Datepicker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'

// Icons
import {BsCalendar} from 'react-icons/bs'

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false)
  return (
    <div className='relative flex items-center justify-end h-full'>
      <div className='absolute z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base'/>
        </div>
      </div>
      <DatePicker 
        className='w-full h-full' 
        selected={endDate} 
        placeholderText='Check Out'
        onChange={(date) => setEndDate(date)}
      />
    </div>
  )
}

export default CheckOut