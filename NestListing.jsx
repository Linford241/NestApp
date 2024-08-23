import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";



function NestListing ({ nest }) {
  
   const [showFullDescription, setShowFullDescription] = useState(false);
   
   let description = nest.description;

   if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
   }
   
    return(
        <div className="bg-white rounded-xl shadow-md relative">
                           <div className="p-4">
                              <div className="mb-6">
                                <div className="text-gray-600
                                my-2">{nest.type}</div>
                                <h3 className="text-xl font-bold">{nest.title}</h3>
                              </div>

                              <div className="mb-5">
                              <img className="h-full w-full object-cover md:h-full md:w-full" 
                                src={nest.img} alt="Picture of the nest" />
                                {description}
                              </div>
                              
                              <button 
                              onClick={ () => 
                                setShowFullDescription((prevState) => !prevState)} 
                              className="text-indigo-500 mb-5
                              hover:text-indigo-600">
                                { showFullDescription  ? "Less" : "More" }
                              </button>
                              
                              
                              <h3 className="text-indigo-500 mb-2">{nest.salary} / Year</h3>

                              <div className="flex flex-col
                              lg:flex-row justify-between mb-4">
                                <div className="trext-orange-700 mb-3">
                                    <FaMapMarker className="inline text-bg mb-1 mr-1" />
                                    {nest.location}
                                </div>
                                <Link
                                  to={`/nests/${nest.id}`}
                                  className="h-[36px] bg-indigo-500
                                  hover:bg-indigo-600 text-white px-2 
                                  py-2 rounded-lg text-center text-sm"
                                >
                                    Read More
                                </Link>
                               </div>
                           </div>
                        </div>
    )
}

export default NestListing;