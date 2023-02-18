import { Link } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import FeatureCard from "../components/AboutPage/FeatureCard";
import CustomerSection from "../layouts/CustomerCard";

const About = () => {
  return (
    <RootLayout>
      <section className=" flex flex-col justify-center items-center bg-[url('/cactus.jpg')] bg-cover bg-center h-[90vh] text-white">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-center font-segoe">
            Our team cares about your full relax
          </h1>
          <h2 className="px-2 text-lg font-bold text-center sm:text-xl">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </h2>
          <button className="rounded-3xl w-[200px] py-2 text-center border-white border transition hover:bg-white hover:text-black">
            <Link>View Our Tour Packages</Link>
          </button>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center gap-6 my-6 sm:justify-evenly sm:flex-row">
          <img className="w-[300px]" src="/About/1.png" alt="5" />
          <div className="flex flex-col gap-4 w-[300px] sm:max-w-[500px]">
            <h4 className="text-sm uppercase text-gray">
              welcome to our site!
            </h4>
            <h3 className="text-lg font-bold text-black">
              We are the best company for your visit
            </h3>
            <p className="text-sm">
              After decades of experience, and a whole life in Lucca, we offer
              you the most complete tourism service in the city. In addition to
              having bikes and rickshaws to have as much fun as you want, you
              have the choice of tour guides with whom to tour and drivers for
              your every need! We offer packages in the way that you get the
              most at the lowest price. Book with us and we will always be
              available for you!
            </p>
            <div className="flex gap-2">
              <div className="text-2xl font-bold text-orange w-[100px]">
                20+
                <br />
                <span className="text-sm font-light text-gray">
                  Years Experience
                </span>
              </div>
              <div className="text-2xl font-bold text-orange w-[100px]">
                100+
                <br />
                <span className="text-sm font-light text-gray">
                  Happy Customer
                </span>
              </div>
              <div className="text-2xl font-bold text-orange w-[100px]">
                15+
                <br />
                <span className="text-sm font-light text-gray">
                  Choice of Service
                </span>
              </div>
              <div className="text-2xl font-bold text-orange w-[100px]">
                10+
                <br />
                <span className="text-sm font-light text-gray">
                  Professional Guides
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FEC48F] flex justify-center items-center py-8">
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap">
          {[1, 2, 3, 4].map((number, index) => (
            <FeatureCard key={index} img={number} />
          ))}
        </div>
      </section>
      <CustomerSection/>
    </RootLayout>
  );
};

export default About;
