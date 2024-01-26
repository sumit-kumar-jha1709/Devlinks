import React, {   useState } from 'react'
import phoneOutline from "../assets/phoneOutline.png"
import ProfileForm from './ProfileForm'
import  { Toaster } from 'react-hot-toast'

const MobileView = () => {
  
  const [formData, setFormData] = useState({
    profilePhoto: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  
  return(
    <>
    <Toaster/>
        <div id="container" className='p-2 m-3 flex gap-2 h-screen'>
          <div id="mobileWrapper" className='basis-2/5 border-2 h-full rounded-xl bg-white p-2 m-2 flex justify-center items-center'>
            <div id="profilePreview" className='flex justify-center items-center h-full w-2/3'>
              <img src={phoneOutline} className='h-[80%] w-[25%] absolute' alt='Phone Outline'/>
              <div className="absolute w-[29%] top-60 left-27 text-black">
                <div id="cardWrapper" className='mt-5'>
                  <div id="imageContainer" className='w-full flex justify-center'>
                  {formData.profilePhoto && <img src={formData.profilePhoto } alt="avatar" className='h-24 w-24 rounded-full border-4 border-purply'/>}
                  </div>
                  <div id="nameContainer" className='pt-5 flex flex-col items-center'>
                      <h2 className=' text-3xl font-bold text-gray-700'>{formData.firstName} {formData.lastName}</h2>
                      <p className='text-sm text-gray-500'>{formData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="profileDetailsWrapper" className='basis-3/5 border-2 h-full rounded-xl bg-white p-2 m-2'>
            <div id="headingDetails" className='h-30 w-full pt-5 pl-5 pb-2 flex flex-col gap-3'>
              <h1 className='font-bold text-3xl text-gray-800'> Profile Details </h1>
              <p className=' text-base text-gray-600'>Add your details to create a personal touch to your profile.</p>
            </div>
            <div id="form">
              <ProfileForm setFormData={setFormData}/>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default MobileView