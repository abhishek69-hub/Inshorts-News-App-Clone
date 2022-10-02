import React from 'react'

export default function NewsItem(props) {



    return (

        // the original designing


        // <div className="flex w-4/6 border border-black mx-auto mt-6 shadow-2xl rounded-md p-2 max-h-[2/5] ">
        //     <div className="flex">
        //         {/* <div className='flex justify-center item-center max-w-[45%] h-[250px] max-h-[250px]  overflow-hidden'> */}
        //             <img className='my-auto rounded-md max-w-[45%] max-h-[250px] ' src={props.imageUrl} alt="" />
        //         {/* </div> */}
        //         <div class="p-6 flex flex-col justify-start">
        //             <h5 class="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
        //             <p class="text-gray-700 text-base mb-4">
        //             {props.description}
        //             </p>
        //             <p class="text-gray-600 text-xs">{props.author} {new Date(props.date).toGMTString()}</p>
        //         </div>
        //     </div>

        // </div>




        // desiging for mobile

        <div className="flex w-5/6 border border-black mx-auto mt-6 shadow-2xl rounded-sm p-2 max-h-[2/5] sm:max-w-[466px] md:max-w-xl rounded-sm mt-4 p-2 lg:max-w-3xl xl:max-w-4xl mt-6">
            <div className="flex flex-col md:flex-row">
                {/* <div className='flex justify-center item-center max-w-[45%] h-[250px] max-h-[250px]  overflow-hidden'> */}
                    <img className='my-auto rounded-md w-full  md:max-w-[50%] xl:max-w-[40%]  ' src={props.imageUrl} alt="" />
                {/* </div> */}
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
                    <p class="text-gray-700 text-base mb-4">
                    {props.description}
                    </p>
                    <p class="text-gray-600 text-xs">{props.author} {new Date(props.date).toGMTString()}</p>
                </div>
            </div>

        </div>
    )
}
 