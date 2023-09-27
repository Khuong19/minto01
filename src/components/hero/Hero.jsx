import React from 'react'
import picture1 from '../../assets/hero-pic-1.png'
import picture2 from '../../assets/hero-pic-2.png'
import picture3 from '../../assets/footer-hero.png'
const Hero = () => {
  return (
        <div className=''>
            <div className="bg-white h-[800px] flex justify-evenly gap-4 items-center w-full">
                <div className="flex">
                    <img src={picture1} alt="" className='flex'/>
                </div>
                <div className="flex">
                    <img src={picture2} alt="" className='flex' />
                </div>
            </div>
            <div className='h-[150px] bg-secondary-green flex justify-center items-center'>
                <img src={picture3} alt="" />
            </div>
        </div>
  )
}

export default Hero