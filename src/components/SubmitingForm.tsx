import React from 'react'
import CircularText from './CircularText'

const SubmitingForm = () => {
  return(
    <div className='min-h-screen flex items-center justify-center'>
      <CircularText
                text="TASK*ARE*GENERATING*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
    </div>
    )  
}

export default SubmitingForm
