import React from 'react'
import img1 from '../images/body_image/img1.webp'
import img2 from '../images/body_image/img2.webp'
import img3 from '../images/body_image/img3.png'
import img4 from '../images/body_image/img4.webp'
import img5 from '../images/body_image/img5.webp'
import img6 from '../images/body_image/img6.webp'
import img7 from '../images/body_image/img7.webp'
import img8 from '../images/body_image/img8.webp'
import img9 from '../images/body_image/img9.webp'
function Festive(){
    return(
        <div className="">
            <div className='h-[25px] bg-gradient-to-b from-[rgb(245,245,245)] mt-[80px]'></div>
            <div className='grid grid-cols-1 gap-0 mt-4'>
          <img src={img1} className="w-[92%] mx-auto" alt="Decorative"></img>
            </div>
            <div className='grid grid-cols-1 gap-0'>
          <img src={img2} className='mt-[1px]' alt="Decorative"></img>
          
          </div>
          <div className='grid grid-cols-1 gap-0'>
          <img src={img4}></img>
          </div>
          <div className='grid grid-cols-2 gap-0'>
          <img src={img5}></img>
          <img src={img6}></img>
          </div>
          <div className='grid grid-cols-1 gap-0 mt-4'>
          <img src={img7}></img>
          </div>
          <div className='grid grid-cols-1 gap-0 mt-4'>
          <img src={img8}></img>
          </div>
          <div className='grid grid-cols-1 gap-0 mt-4'>
          <img src={img9} className='mb-[20px]' alt="Decorative"></img>
          </div>
        </div>
    )
}
export default Festive