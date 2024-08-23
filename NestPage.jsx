import { Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import nests from '../nests.json';



function NestPage ({ nestling }) {

  
     return (
        <>
          <section>
            <div className="container m-auto py-6 px-6">
                <Link
                  to="/nests"
                  className="text-indigo-500 hover:text-indigo-600
                  flex items-center"
                >
                    <FaArrowLeft className="mr-2" />
                        Back to Nests
                    
                </Link>
            </div>
          </section>

          <section className="bg-indigo-50">
            <div className="container m-auto py-10 px-6">
                <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                  <main>
                    <div 
                      className="bg-white p-6 rounded-lg shadow-md 
                      text-center md:text-left"
                    >
                        <div className="text-gray-500 mb-4">{nestling.type}</div>
                        <h1 className="text-3xl font-bold mb-4">
                            {nestling.title}
                        </h1>
                        <div
                          className="text-gray-500 mb-4 flex align-middle
                          justify-center md:justify-start"
                        >
                            <FaMapMarker className="text-orange-700 mr-1"/>
                            <p className="text-orange-700">{nestling.location}</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadwo-md mt-6">
                       
                        <h3 className="text-indigo-800 text-lg font-bold mb-6">
                            Nest Description
                        </h3>

                        <p className="mb-4">
                         <img className="h-30 w-70 object-cover md:h-70 md:w-70" 
                            src={nestling.img} alt="Picture of the nest" />
                          {nests.description}
                        </p>

                        <h3 className="text-indigo-80 text-lg font-bold
                        mb-2">Salary</h3>

                        <p className="mb-4">{ nestling.salary } / Year</p>
                    </div>
                  </main>

                  <aside>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-6">Company Info</h3>
                        <h2 className="text-2xl">{nestling.name}</h2>

                        <p className="my-2">
                            {nestling.descr}
                        </p>

                        <hr className="my-4" />

                        <h3 className="text-xl">Contact Email:</h3>

                        <p className="my-2 bg-indigo-100 p-2 font-bold">
                            { nestling.contactEmail }
                        </p>

                        <h3 className="text-xl">Contact Phone:</h3>
                        <p className="my-2 bg-indigo-100 p-2
                        font-bold">{ nestling.contactPhone }</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                        <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                        <Link
                          to={`/edit-nest/${nestling.id}`}
                          className="bg-indigo-500 hover:bg-indigo-600
                          text-white text-center font-bold py-2 px-4 rounded-full
                          w-full focus:shadow-outline mt-4 block"
                        >Edit Nest</Link>
                        <button onClick={ () => onDeleteClick(nestling.id)}
                          className="bg-red-500 hover:bg-red-600
                          text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none
                          focus:shadow-outline mt-4 block"
                        >
                            Delete Nest
                        </button>
                    </div>
                  </aside>
                </div>
            </div>
          </section>
        </>
     )
   };
    
  
  
    

    


export default NestPage;