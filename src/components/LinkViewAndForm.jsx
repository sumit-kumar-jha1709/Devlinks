import React from 'react'
import phoneOutline from "../assets/phoneOutline.png"
import  { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import LinkForm from './LinkForm'


const LinkViewAndForm = () => {
  const userData = useSelector((state)=>state.userData);
  
  
  return(
    <>
    <Toaster/>
        <div id="container" className='p-2 m-3 flex gap-2 h-screen mb-8'>
          <div id="mobileWrapper" className='basis-2/5 border-2 h-full  rounded-xl bg-white p-2 m-2 flex justify-center items-center'>
            <div id="profilePreview" className='flex justify-center items-center h-full w-2/3'>
              <img src={phoneOutline} className='h-[80%] w-[25%] absolute' alt='Phone Outline'/>
              <div className="absolute w-[29%] top-60 left-27 text-black">
                <div id="cardWrapper" className='mt-5'>
                  <div id="imageContainer" className='w-full flex justify-center'>
                  {userData.profilePhoto && <img src={userData.profilePhoto } alt="avatar" className='h-24 w-24 rounded-full border-4 border-purply'/>}
                  </div>
                  <div id="nameContainer" className='pt-5 flex flex-col items-center'>
                      <h2 className=' text-3xl font-bold text-gray-700'>{userData.firstName} {userData.lastName}</h2>
                      <p className='text-sm text-gray-500'>{userData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="profileDetailsWrapper" className='basis-3/5 border-2 h-full rounded-xl bg-white m-2 '>
            <div id="headingDetails" className='h-30 w-full pt-5 pl-5 pb-2 flex flex-col gap-3'>
              <h1 className='font-bold text-3xl text-gray-800'> Customize your links </h1>
              <p className=' text-base text-gray-600'>Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>
            <div id="form ">
              <LinkForm />
            </div>
          </div>
        </div>
        
    </>
  )
}

export default LinkViewAndForm
