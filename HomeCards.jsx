import Card from "./Card";
import { Link } from "react-router-dom";


function HomeCards () {
   return(
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <Card>
                    <h2 className="text-2xl font-bold">For Nestlings</h2>
                    <p className="mt-2 mb-4">
                        Browse our Nests and find accommodation today
                    </p>
                    <Link
                      to="/nests"
                      className="inline-block bg-black
                      text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                    >
                        Find Accommodation
                    </Link>
                </Card>
                <Card bg="bg-indigo-100">
                    <h2 className="text-2xl font-bold">For Nest Builders</h2>
                    <p className="mt-2 mb-4">
                        Display your nests to displaced nestlings
                    </p>
                    <Link
                      to="/addnests"
                      className="inline-block bg-indigo-500
                      text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                    >
                       Add Nest 
                    </Link>
                </Card>
            </div>
        </div>
    </section>
   )
}

export default HomeCards;