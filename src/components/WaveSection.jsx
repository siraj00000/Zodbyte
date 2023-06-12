import React from 'react'

function WaveSection() {
  return (
    <div className='w-full h-40 relative overflow-hidden wave-section'>
      <div className="wave water absolute top-0 left-0 w-full h-24 transform -scale-100"></div>
        <div className="wave water absolute top-0 left-0 w-full h-24 transform -scale-100"></div>
        <div className="wave water absolute top-0 left-0 w-full h-24 transform -scale-100"></div>
        <div className="wave water absolute top-0 left-0 w-full h-24 transform -scale-100"></div>
    </div>
  )
}

export default WaveSection
