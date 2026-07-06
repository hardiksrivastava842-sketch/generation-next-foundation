import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Statistics from "../components/Statistics/Statistics";
import Courses from "../components/Courses/Courses";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
    <h1 className="text-7xl text-red-600 text-center">
     HARDIK TEST
     </h1>
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <Courses />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;