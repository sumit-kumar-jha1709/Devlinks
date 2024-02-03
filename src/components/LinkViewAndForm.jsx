import React, { useState } from 'react'
import phoneOutline from "../assets/phoneOutline.png"
import  { Toaster } from 'react-hot-toast'
import LinkForm from './LinkForm'
import { useSelector } from 'react-redux'



const LinkViewAndForm = () => {
  const [formCount, setFormCount] = useState(1);
  const maxForms = 3;

  const addNewForm = () => {
    if(formCount < maxForms ){
      setFormCount((prevCount) => prevCount + 1);
    }
  };

  const linkData = useSelector((state) => state.linkData);
  
  return(
    <>
    <Toaster/>
        <div id="container" className='p-2 m-3 flex gap-2 h-screen mb-8'>
          <div id="mobileWrapper" className='basis-2/5 border-2 rounded-xl bg-white p-2 m-2 flex justify-center items-center h-[45rem]'>
            <div id="profilePreview" className='flex justify-center items-center h-full w-2/3'>
              <img src={phoneOutline} className='h-[80%] w-[23%] absolute' alt='Phone Outline'/>
              <div className="absolute w-[29%] top-60 left-27 text-black">
                <div id="cardWrapper" className='mt-5'>
                  <div id="nameContainer" className='pt-5 flex flex-col items-center'>
                      <h2 className=' text-3xl font-bold text-gray-700'>
                        {linkData.map((link, index) => (
                          <div key={index} className="mb-4">
                            <h2 className="font-bold text-2xl text-gray-800">Link #{index + 1}</h2>
                            <p>Platform: {link.platform}</p>
                            <p>Link: {link.link}</p>
                          </div>
                        ))}
                      </h2>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="profileDetailsWrapper" className='basis-3/5 border-2 rounded-xl bg-white m-2 overflow-y-auto h-[45rem]'>
            <div id="headingDetails" className='h-30 w-full pt-5 pl-5 pb-2 flex flex-col gap-3'>
              <h1 className='font-bold text-3xl text-gray-800'> Customize your links </h1>
              <p className=' text-base text-gray-600'>Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>
            <div id="form" className="p-5">
            {[...Array(formCount)].map((_, index) => (
              <div key={index} className="mb-4">
                <h2 className="font-bold text-2xl text-gray-800">Link #{index + 1}</h2>
                <LinkForm />
              </div>
            ))}
           
            <button onClick={addNewForm} className={`bg-green-500 text-white p-2 rounded-md ${formCount === maxForms ? 'cursor-none bg-gray-500':''}`}
            disabled={formCount === maxForms}
            >
              {formCount < maxForms && (
                <h1>Add New Link</h1>
              )}
              {formCount === maxForms && (
                <h1>You have reached the maximum limit of links.</h1>
              )}
            </button>
          </div>
            </div>
          </div>
        
        
    </>
  )
}

export default LinkViewAndForm