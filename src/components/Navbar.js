import React from 'react';
// import SearchNews from './SearchNews';

export default function Navbar() {

    return (

        <nav className="fixed flex flex-col bg-white w-full border border-gray-200  h-[100px] box-border">
            <div className="flex  justify-evenly items-center w-full h-[65px]">

                <img className='mx-auto w-[140px] ' src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="" />

            

            </div>
            <div className='w-full flex items-center justify-center h-[32px] bg-black'>
                <ul className='w-full h-full flex items-center justify-center overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide relative '>
                    <li className='mx-auto px-3 mx-3  rounded-sm text-white'><a className="nav-link  text-white pl-1 hover:border-b-2 border-red-600   " aria-current="page" href="/general">General</a></li>
                    <li className='mx-auto px-3 mx-3  rounded-sm text-white'><a className="nav-link  text-white pl-1 hover:border-b-2 border-red-600 " aria-current="page" href="/business">Business</a></li>
                    <li className='mx-auto px-3 mx-3  rounded-sm text-white'><a className="nav-link  text-white pl-1 hover:border-b-2 border-red-600 " aria-current="page" href="/entertainment">Entertainment</a></li>
                    <li className='mx-auto px-3 mx-3  rounded-sm text-white'><a className="nav-link  text-white pl-1 hover:border-b-2 border-red-600 " aria-current="page" href="/health">Health</a></li>
                    <li className='mx-auto px-3 mx-3  rounded-sm text-white'><a className="nav-link  text-white pl-1 hover:border-b-2 border-red-600 " aria-current="page" href="/science">Science</a></li>
                    <li className='mx-auto px-3 mx-3  rounded-sm text-white'><a className="nav-link  text-white pl-1 hover:border-b-2 border-red-600 " aria-current="page" href="/sports">Sports</a></li>
                    <li className='mx-auto px-3 mx-3  rounded-sm text-white'><a className="nav-link  text-white pl-1 hover:border-b-2 border-red-600 " aria-current="page" href="/technology">Technology</a></li>
                    
                    
                    
                </ul>

            </div>

        </nav>


        



        

    )
}
