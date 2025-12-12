import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Collection from "../Components/Collection";
import Products from "../Components/Products";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";

function Home() {
  return (
    <>
      <Header />
      {/* New Hero Section (formerly About) */}
      <Hero />
      <Features />
      <Collection />
      <Testimonials />
      <Products />
    </>
  );
}

export default Home;