import React from 'react'
import Card from "../components/Card"
import phoneOutline from "../assets/phoneOutline.png"

const MobileView = () => {
  return(
    <>
        <div id="container" className='p-2 m-3 flex gap-2 h-screen'>
          <div id="mobileWrapper" className='basis-2/5 border-2 shadow-lg rounded-xl bg-white p-2 m-2 flex justify-center items-center'>
            <div id="profilePreview" className='flex justify-center items-center h-full w-1/2'>
              <img src={phoneOutline} className='h-4/5 ' alt='Phone Outline'/>
              <Card id="cardName"/>
            </div>
          </div>
          <div id="profileDetailsWrapper" className='basis-3/5 border-2 shadow-lg rounded-xl bg-white p-2 m-2'>profile details</div>
        </div>
    </>
  )
}

export default MobileView