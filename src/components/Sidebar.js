import React from 'react'
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (


        // The original sidebar


        <aside className="w-44 fixed left-0 top-18 h-screen bg-zinc-800  " aria-label="Sidebar ">
        
            {/* <div className=" h-full w-full pt-5 px-2 bg-zinc-800 rounded dark:bg-gray-800"> */}
                <ul className=" flex flex-col justify-around space-y-2 w-100 pl-2 pt-3 max-h-fit">

                    <li className="nav-item flex items-center hover:bg-gray-500 h-[50px] hover:rounded-sm  ">
                        <a className="nav-link  text-white pl-1   " aria-current="page" href="/general">General</a>
                    </li>

                    
                    <li className="nav-item flex items-center  hover:bg-gray-500 active:bg-slate-100 h-[50px] hover:rounded-sm">
                        <a className="nav-link  text-white pl-1  " aria-current="page" href="/business">Business</a>
                    </li>

                    <li className="nav-item flex items-center  hover:bg-gray-500 active:bg-slate-100 h-[50px] hover:rounded-sm">
                        <a className="nav-link  text-white pl-1  " aria-current="page" href="/entertainment">Entertainment</a>
                    </li>

                    <li className="nav-item flex items-center hover:bg-gray-500 h-[50px] hover:rounded-sm  ">
                        <a className="nav-link  text-white pl-1   " aria-current="page" href="/general">General</a>
                    </li>

                    <li className="nav-item flex items-center hover:bg-gray-500 h-[50px] hover:rounded-sm  ">
                        <a className="nav-link  text-white pl-1   " aria-current="page" href="/health">Health</a>
                    </li>

                    <li className="nav-item flex items-center hover:bg-gray-500 h-[50px] hover:rounded-sm  ">
                        <a className="nav-link  text-white pl-1   " aria-current="page" href="/science">Science</a>
                    </li>


                    <li className="nav-item flex items-center hover:bg-gray-500 h-[50px] hover:rounded-sm  ">
                        <a className="nav-link  text-white pl-1   " aria-current="page" href="/sports">Sports</a>
                    </li>

                    <li className="nav-item flex items-center  hover:bg-gray-500 active:bg-slate-100 h-[50px] hover:rounded-sm">
                        <a className="nav-link  text-white pl-1  " aria-current="page" href="/technology">Technology</a>
                    </li>


                    
                    
                </ul>
            {/* </div> */}
        </aside>




    //   mobile responsive sidebar

    
        // <div className="relative flex items-center">
        //     <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">

        //         <div className="inline-block nav-item flex items-center hover:bg-gray-500 h-[50px] hover:rounded-sm  ">
        //             <a className="nav-link  text-white pl-1   " aria-current="page" href="/general">General</a>
        //         </div>
        //         <div className="inline-block nav-item flex items-center  hover:bg-gray-500 active:bg-slate-100 h-[50px] hover:rounded-sm">
        //             <a className="nav-link  text-white pl-1  " aria-current="page" href="/business">Business</a>
        //         </div>
        //         <div className="inline-block nav-item flex items-center  hover:bg-gray-500 active:bg-slate-100 h-[50px] hover:rounded-sm">
        //             <a className="nav-link  text-white pl-1  " aria-current="page" href="/entertainment">Entertainment</a>
        //         </div>
                
        //     </div>
        // </div>

    ) 
}
