import RootLayout from "../layouts/RootLayout";
import HomeCardOne from "../data/HomeCardOne";
import HomeCardTwo from "../data/HomeCardTwo";

import CardOne from "../components/HomePage/CardOne";
import CardTwo from "../components/HomePage/CardTwo";
import CardThree from "../components/HomePage/CardThree";
import CustomerSection from "../layouts/CustomerCard";

const HomePage = () => {
  return (
    <RootLayout>
      <section className=" flex flex-col justify-center items-center bg-[url('/cactus.jpg')] bg-cover bg-center h-[90vh] text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-center font-segoe">
            Enjoy in the best way!
          </h1>
          <h2 className="text-xl font-bold text-center">
            Enjoy our services for your trip anytime
          </h2>
        </div>
        {/* <div>
          <input type="date" name="" id="" />
        <input type="time" className="text-slate-900" name="" id="" />
        </div> */}
      </section>
      <section className="p-6">
        <h2 className="text-2xl font-bold ">
          Explore Our Popular Destinations
        </h2>
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:place-items-center lg:grid-cols-3 xl:grid-cols-4 xl:gap-2">
          {HomeCardOne.map((card, index) => (
            <CardOne key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-6 sm:justify-around sm:flex-row">
          <img className="w-[300px]" src="/HomeCard1/5.png" alt="5" />
          <div className="flex flex-col gap-4 w-[300px]">
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
        <div className="bg-[#FEC48F] flex justify-center items-center py-8">
          <div className="w-[350px] px-4 py-2 flex flex-col gap-4 items-center bg-white bg-opacity-30 rounded-2xl">
            <h3 className="text-3xl font-bold text-center">
              Get Special Offers for Organizations
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              repellat. Minus ut fuga beatae repellat nulla aperiam possimus
              recusandae ullam.
            </p>
            <button className="px-6 py-2 text-white bg-orange rounded-3xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-4 p-6 py-4 sm:grid sm:grid-cols-2 sm:place-items-center lg:grid-cols-3 xl:grid-cols-4">
        {HomeCardTwo.map((card, index) => (
          <CardTwo key={index} {...card} />
        ))}
      </section>
      <section className="p-6">
        <h2 className="mb-4 text-2xl font-bold">The Most Popular Packages</h2>
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:place-items-center lg:grid-cols-3 xl:grid-cols-4">
          <CardThree img={"/HomeCard3/1.png"} />
          <CardThree img={"/HomeCard3/2.png"} />
          <CardThree img={"/HomeCard3/3.png"} />
          <CardThree img={"/HomeCard3/4.png"} />
        </div>
      </section>
      <CustomerSection/>
      
    </RootLayout>
  );
};

export default HomePage;
