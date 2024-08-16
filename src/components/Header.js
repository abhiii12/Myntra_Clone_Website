import React from "react";
import myntralogo from '../images/logo_myntra.png'
function Header(){
    return(
        <div className="flex bg-[white] h-[80px] fixed top-[0px] w-[100%]">
            <div className="w-[10%] flex justify-center items-center">
            <img className="h-[37px]" src={myntralogo}></img>
            </div>
            <div className="w-[51%] flex flex-row items-center">
                <div className="px-[14px] cursor-pointer"><a className="font-bold text-xs">MEN</a></div>
                <div className="px-[14px] cursor-pointer"><a className="font-bold text-xs">WOMEN</a></div>
                <div className="px-[14px] cursor-pointer"><a className="font-bold text-xs">KIDS</a></div>
                <div className="px-[14px] cursor-pointer"><a className="font-bold text-xs">HOME & LIVING</a></div>
                <div className="px-[14px] cursor-pointer"><a className="font-bold text-xs">BEAUTY</a></div>
                <div className="px-[14px] cursor-pointer"><a className="font-bold text-xs">STUDIO</a></div>

            </div>
            <div className="w-[22%] flex justify-center items-center relative">
                <div className="absolute left-[10px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div>
                <input className="h-[45%] w-[100%] bg-[#F5F5F6] rounded pl-[40px] text-xs focus:bg-[white] focus:outline-none focus:border-[2px]" type="text" placeholder="Search for products, brands and many more"/>
            </div>
            <div className="w-[17%] flex flex-row items-center">
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
                    </div>
                    <div>
                       <p className="px-[13px] font-bold text-[12px]">Profile</p>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
                    </div>
                    <div>
                        <p className="px-[16px] font-bold text-[12px]">Whislist</p>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
                    </div>
                    <div>
                        <p className="px-[20px] font-bold text-[12px]">Bag</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header