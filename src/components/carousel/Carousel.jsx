import React from "react";
import laptop from '../../assets/socialMedia/Group 48098877.png'
import pic from '../../assets/Carousel/Frame 48099763.png'
import './Carousel.css'
const Carousel = () => {
  return (
    <div className="carouselSection">
        <div className="flex flex-col items-center">
            <div className="mt-10">
                <img src={laptop} alt="" />
            </div>
            <div className=" mt-10 font-Monsterrat text-center">
                <h1 className="font-black text-3xl">SOCIAL MEDIA MARKETING</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis <br></br>scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit</p>
            </div>
        </div>
        
      <div className="flex flex-col items-center w-full mt-10 pb-10">
          <img src={pic} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
