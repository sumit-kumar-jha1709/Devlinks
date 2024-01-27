import React from 'react'
import { useSelector } from 'react-redux'

const Card = () => {
    const userData = useSelector((state)=>state.userData);
  return (
    <>
        <div id="cardContainer" className='h-[92%] w-full flex justify-center items-center mt-10'>
            <div id="cardWrapper" className='border-2 border-gray-300 p-10 m-10 rounded-2xl bg-white '>
            {userData.profilePhoto || userData.firstName || userData.lastName || userData.email ? (
                <>
                    <div id="imageContainer" className='w-full flex justify-center'>
                    <img src={userData.profilePhoto} alt="avatar" className='h-24 w-24 rounded-full border-4 border-purply'/>
                    </div>
                    <div id="nameContainer" className='pt-5 flex flex-col items-center'>
                    <h2 className='text-3xl font-bold text-gray-700'>{userData.firstName} {userData.lastName}</h2>
                    <p className='text-sm text-gray-500'>{userData.email}</p>
                    </div>
                </>
                ) : (
                <div className="text-center">
                    <p>Please go back to the editor and fill in the details.</p>
                </div>
                )}

                {/* <div id="socialLinks" className='pt-10 flex flex-col'>
                    <button type="button" class="text-white bg-[#24292F] hover:bg-[#333942] font-medium rounded-lg text-sm h-12 w-52 px-5 py-2.5 text-center inline-flex justify-between items-center me-2 mb-5 pb-2">
                        <div class="flex items-center">
                            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                            </svg>
                        GitHub
                        </div>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>   
                        </svg>
                    </button>

                    <button type="button" class="text-white bg-[#0077B5] hover:bg-[#0D8DB5] font-medium rounded-lg text-sm h-12 w-52 px-5 py-2.5 text-center inline-flex justify-between items-center me-2 mb-5 pb-2">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 me-2" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
                            </svg>
                                LinkedIn
                        </div>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>   
                        </svg>
                    </button>

                    <button type="button" class="text-white bg-[#FF0000] hover:bg-[#FF3333] font-medium rounded-lg text-sm h-12 w-52 px-5 py-2.5 text-center inline-flex justify-between items-center me-2 mb-2 pb-2">
                        <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                        </svg>
                                YouTube
                        </div>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>   
                        </svg>
                    </button>
                

                </div> */}
            </div>
        </div>
    </>
  )
}

export default Card