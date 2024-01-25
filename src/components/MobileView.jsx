import React, { useEffect, useRef } from 'react'
import phoneOutline from "../assets/phoneOutline.png"
import ProfileForm from './ProfileForm'
import toast, { Toaster } from 'react-hot-toast'

const MobileView = () => {
  const formikRef = useRef();

  useEffect(() => {
    const handleSave = async () => {
      try {
        // Trigger form submission by manually calling submitForm
        await formikRef.current.submitForm();
      } catch (error) {
        toast.error('Failed to save profile details');
      }
    };

    // Expose the formikRef to the parent component
    formikRef.current = document.getElementById('form').__formikApi;

    // Attach handleSave to the Save button click event
    document.getElementById('saveButton').addEventListener('click', handleSave);

    // Clean up the event listener when the component unmounts
    return () => {
      document.getElementById('saveButton').removeEventListener('click', handleSave);
    };
  }, []);
  return(
    <>
    <Toaster/>
        <div id="container" className='p-2 m-3 flex gap-2 h-screen'>
          <div id="mobileWrapper" className='basis-2/5 border-2  rounded-xl bg-white p-2 m-2 flex justify-center items-center'>
            <div id="profilePreview" className='flex justify-center items-center h-full w-2/3'>
              <img src={phoneOutline} className='h-[80%] w-[20%] absolute' alt='Phone Outline'/>
            </div>
          </div>
          <div id="profileDetailsWrapper" className='basis-3/5 border-2  rounded-xl bg-white p-2 m-2'>
            <div id="headingDetails" className='h-30 w-full pt-5 pl-5 pb-2 flex flex-col gap-3'>
              <h1 className='font-bold text-3xl text-gray-800'> Profile Details </h1>
              <p className=' text-base text-gray-600'>Add your details to create a personal touch to your profile.</p>
            </div>
            <div id="form">
              <ProfileForm/>
            </div>
          </div>
        </div>
        <div id="saveButton" className=" w-[98%] flex flex-row-reverse">
        <button className='float-right p-2 mb-3 border-2 rounded-md border-purply text-purply w-24 hover:bg-purply hover:text-white font-semibold'
       >Save</button>
        </div>
    </>
  )
}

export default MobileView
