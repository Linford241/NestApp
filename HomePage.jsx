import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import NestListings from "../components/NestListings";
import ViewAllNests from "../components/ViewAllNests";


function HomePage () {
  return (
    <>
      <Hero />
      <HomeCards />
      <NestListings isHome={true} />
      <ViewAllNests />
    </>
  )
}

export default HomePage;