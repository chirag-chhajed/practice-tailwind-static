// Components
import CardOne from "../components/HomePage/CardOne"
import CardTwo from "../components/HomePage/CardTwo"
import CustomerSection from "../layouts/CustomerCard"

import AboutPage from "../data/AboutPage"
import AboutServices from "../data/AboutServices"


import RootLayout from "../layouts/RootLayout"


const TourPage = () => {
  return (
    <RootLayout>
      
      <section className="p-6">
        <h2 className="text-2xl font-bold ">
          Tour Packages
        </h2>
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:place-items-center lg:grid-cols-3 xl:grid-cols-4 xl:gap-2">
          {AboutPage.map((card, index) => (
            <CardOne key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          Services
        </h2>
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:place-items-center lg:grid-cols-3 xl:grid-cols-4 xl:gap-2">
          {AboutServices.map((card,index) => <CardTwo key={index} {...card}/>)}
        </div>
      </section>
      <CustomerSection/>
      
    </RootLayout>
  )
}

export default TourPage
