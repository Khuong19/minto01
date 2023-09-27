import React from 'react'
import './CardSection.css'
import onTheTable from '../../assets/cardSection/Asset-4 1.png'
import cardLogo  from '../../assets/cardSection/a.png'
import card1 from '../../assets/cardSection/Asset 5 1.png'
import card2 from '../../assets/cardSection/Asset 5 2.png'
import card3 from '../../assets/cardSection/Asset 5 3.png'
import card4 from '../../assets/cardSection/Asset 5 4.png'
const CardSection = () => {
  return (
    <div className='p-20 CardSection flex flex-col items-center'>
        <div className="mt-10">
            <img src={onTheTable} alt="" className='w-[full]'/>
        </div>
        <div className='mt-10'>
            <img src={cardLogo} alt="" />
        </div>
        <div className="flex items-center mt-10 gap-10">
            <div className='hover:scale-125 transition-all duration-300'>
                <img src={card1} alt="" />
            </div>
            <div className='hover:scale-125 transition-all duration-300'>
                <img src={card2} alt="" />  
            </div>
            <div className='hover:scale-125 transition-all duration-300'>
                <img src={card3} alt="" className='w-[252px] h-[322px]'/>
            </div >
            <div className='hover:scale-125 transition-all duration-300'>
                <img src={card4} alt="" />
            </div>
        </div>
        <div className='text-center mt-20 font-Lato '>
            <h2 className='font-black text-3xl'>MASCOT DESIGN</h2>
            <br></br>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis <br></br>scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit</p>
        </div>
    </div>
  )
}

export default CardSection