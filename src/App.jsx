import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#1d232a] text-white">
        <div className="max-w-[72rem] w-full p-4">
          <Navbar />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
