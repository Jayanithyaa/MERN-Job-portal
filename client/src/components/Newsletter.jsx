import React from 'react';
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6';

const Newsletter = () => {
  return (
    <div>
    <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
        <FaEnvelopeOpenText/>
        mail me for jobs</h3>
        <p className='text-primary/75 text-base mb-4' style={{ textAlign: 'justify' }}>
        Stay updated on the latest job opportunities! Receive curated job listings directly to your inbox. Do not miss out on exciting career prospects. Subscribe now!</p>

        <div className='w-full space-y-4'>
            <input type='email' name='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
            <input type='submit' value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer 
            font-semibold'/>
        </div>
    </div>

    <div className='mt-20'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
        <FaRocket/>
        Get noticed faster</h3>
        <p className='text-primary/75 text-base mb-4' style={{ textAlign: 'justify' }}>
        Accelerate your job search by uploading your resume. Stand out to employers and recruiters. Increase your chances of getting noticed and landing your dream job!
        </p>

        <div className='w-full space-y-4'>
            <input type='submit' value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer 
            font-semibold'/>
        </div>

    </div>
    </div>
  )
}

export default Newsletter