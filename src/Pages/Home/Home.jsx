import Contact from "./Contact";
import Expertise from "./Expertise";
import Faq from "./Faq";
import FeaturedGames from "./FeaturedGames";
import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedGames/>
      <Expertise/>
      <Contact />
      <Faq/>
    </>
  );
};

export default Home;
