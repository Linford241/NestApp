import { useParams,  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import nests from '../nests.json';

function EditNestPage ( { updateNestSubmit }) {
    
    
    const [title, setTitle] = useState(nests.title);
    const [type, setType] = useState(nests.type);
    const [location, setLocation] = useState(nests.location);
    const [description, setDescription] = useState(nests.description);
    const [salary, setSalary] = useState(nests.salary);
    const [cname, setCname] = useState(nests.cname);
    const [descr, setDescr] = useState(nests.descr);
    const [contactEmail, setContactEmail] = useState(nests.contactEmail);
    const [contactPhone, setContactPhone] = useState(nests.contactPhone);
    const [img, setImg] = useState(nests.img);

    const navigate = useNavigate();
    const { id } = useParams();
    const submitForm = (e) => {
        e.preventDefault();

        const updatedNest ={
            id,
            title,
            type,
            location,
            img,
            description,
            salary,
            cname,
            descr,
            contactEmail,
            contactPhone
            
        };

        updateNestSubmit(updatedNest);

        toast.success("nest updated successfully")

        return navigate(`/nests/${id}`);
    };

    return(
        <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
            <div className="bg-white px-6 py-8 mb-4 shadwo-md 
            rounded-md border m-4 md:m-0">
                <form onSubmit={submitForm}>
                    <h2 className="text-3xl tetx-center font-semibold
                    mb-6">
                        Edit Nest Info
                    </h2>

                    <div className="mb-4">
                        <label
                          htmlFor='type'
                          className="block text-gray-700 font-bold mb-2"
                        >
                            Nest Type
                        </label>
                        <select
                          id='type'
                          name='type'
                          className='border rounded w-full py-2 px-3'
                          required
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        >
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Hostel">Hostel</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nest Name
                        </label>
                        <input 
                         type="text"
                         id="name"
                         name="name"
                         className="border rounded w-full py-2 px-3 mb-2"
                         placeholder="eg. Amen Hostel"
                         required
                         value={title}
                          onChange={(e) => setTitle(e.target.value)} />    
                    </div>
                    
                    <div className="mb-4">
                        <label
                          htmlFor="description"
                          className="block text-gray-700 font-bold mb-2"
                        >
                            Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          className="border rounded w-full py-2 px-3"
                          rows="4"
                          placeholder="eg. 3 in 1 bedroom with TV set and fridge etc"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label
                          htmlFor='type'
                          className="block text-gray-700 font-bold mb-2"
                        >
                            Price
                        </label>
                        <input
                          id="salary"
                          name="salary"
                          className="border rounded w-full py-2 px-3"
                          required
                          value={salary}
                          onChange={(e) => setSalary(e.target.value)}
                        ></input> 
                    </div>

                    <div className="mb-4">
                        <label
                         className="block text-gray-700 font-bold-bold mb-2">
                            Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          className="border rounded w-full py-2 px-3 mb-2"
                          placeholder="eg. Ayeduase New Site"
                          required
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <h3 className="text-2xl mb-5">Company Info</h3>

                    <div className="mb-4">
                        <label
                           htmlFor="cname"
                           className="block text-gray-700 font-bold mb-2"
                        >
                            Company/Agent Name
                        </label>
                        <input 
                          type="text"
                          id="cname"
                          name="cname"
                          className="border rounded w-full py-2 px-3"
                          placeholder="eg. Mr. Agyekum or Franco Hostels Limited"
                          value={cname}
                          onChange={(e) => setCname(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                           htmlFor="descr"
                           className="block text-gray-700 font-bold mb-2"
                        >
                            Company/Agent Description
                        </label>
                        <textarea
                          id="descr"
                          name="descr"
                          className="border rounded w-full py-2 px-3"
                          rows="4"
                          placeholder="What type of nest do you provide?"
                          value={descr}
                          onChange={(e) => setDescr(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                       <label
                         htmlFor="contact_email"
                         className="block text-gray-700 font-bold mb-2"
                        >
                            Contact Email
                        </label>
                        <input
                          type="email"
                          id="contact_email"
                          name="contact_email"
                          className="border roinded w-full py-2 px-3"
                          placeholder="Email address"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                          htmlFor="contact_phone"
                          className="block text-gray-700 font-bold mb-2"
                        >
                           Contact Phone
                        </label>
                        <input
                          type="tel"
                          id="contact_phone"
                          name="contact_phone"
                          className="border rounded w-full py-2 px-3"
                          placeholder="Phone Number"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-1">
                       <label
                       htmlFor="ImageStyle">
                        Upload
                       </label>
                       <input
                         type="file"
                         id="file-input"
                         name="ImageStyle"
                         onChange={(e) => setImg(e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <button 
                           className="bg-indigo-500 hover:bg-indigo-600 text-white
                           font-bold py-4 px-4 rounded-full w-full focus:outline-none
                           focus:shadow-outline"
                           type="submit"
                        >
                            Update Nest
                        </button>
                    </div>   
                </form>
            </div>
        </div>
      </section>
    );
}

export default EditNestPage;