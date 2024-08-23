import NestListing from "./NestListing";
import nests from '../nests.json';



function NestListings ({isHome = false}) {
    
  const nestListings = isHome ? nests.slice(0, 3) : nests;
  
  
    return(
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold
                text-indigo-500 mb-6 text-center">
                     { isHome ? 'Recent Nests' : 'All Nests'}
                </h2>        
                <div className="grid grid-cols-1 md:grid-cols-3
                    gap-6">
                    {nestListings.map((nest) => (
                      <NestListing key={nest.id} nest={nest}  />
                     )
                    )}
                </div>    
            </div>
        </section>
    )
}

export default NestListings;