import React from 'react'

const Casestudy = (props) => {
  return (
    <div className='h-[700px] w-full flex items-center justify-center bg-slate-500'>
        <div className='flex w-[90%] flex-col h-[90%] my-auto mx-auto md:flex-row max-w-6xl'>
            <div className='w-[5%]'></div>
            <div className="md:w-[30%] flex items-center mr-4 justify-center flex-row" >
            
                <img className='w-2/5 h-[90%]' src={props.img} alt="image" />
                

            </div>
            <div className='w-[5%]'></div>

            <div className='w-[60%] flex items-start text-start justify-around flex-col'>
                <h1 className='font-bold font-[yeezy-tstar-700]  text-3xl'>{props.main} </h1>
                <div className="flex flex-row ">
                <p className='font-bold text-xl font-[yeezy-tstar-700] mr-4'>{props.name}</p>
                <span><p className='font-tesla text-xl'>{props.logo}</p></span>
            </div>
            <div>
            <h1 className='font-bold font-[yeezy-tstar-700]  text-2xl'>{props.tag2} </h1>
            <h1 className=' font-[yeezy-tstar-700]  text-lg'>{props.tag3} </h1>
            </div>
            </div>
            
            
        </div>
      
    </div>
  )
}

export default Casestudy
 