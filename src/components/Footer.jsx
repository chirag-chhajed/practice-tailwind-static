import logo from "../assets/logo.png";
import footerData from "../data/footerData";
import { MapPinIcon, PhoneIcon, EnvelopeIcon,CreditCardIcon } from "@heroicons/react/24/solid";

const SubFooter = ({ title, list }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold">{title}</h3>
      <ul className="list-none">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-6 px-6 py-4 text-white bg-blac md:px-10 lg:px-16">
      <div>
        <img className="h-10" src={logo} alt="logo" />
      </div>
      <div className="h-[0.5px] w-[100%] bg-black"></div>
      <div className="flex flex-col items-start w-[100%] gap-6 sm:flex-row sm:flex-wrap sm:items-center ">
        {footerData.map((item, index) => (
          <SubFooter key={index} {...item} />
        ))}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Contacts</h3>
          <ul className="list-none">
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-orange" />
              <h4>Piazza Napoleone, Lucca Tuscany</h4>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-orange" />
              <h4>+39 346 368 5708</h4>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-4 h-4 text-orange" />
              <h4>italiainlimo@gmail.com</h4>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="items-center font-bold text-center">
                Social Media
            </h3>
            <ul className="flex justify-center gap-2 list-none">
                <li><CreditCardIcon className="w-4 h-4 text-orange" /></li>
                <li><CreditCardIcon className="w-4 h-4 text-orange" /></li>
                <li><CreditCardIcon className="w-4 h-4 text-orange" /></li>
            </ul>
        </div>
      </div>
      <div className="h-[0.5px] w-[100%] bg-black"></div>
      <h3>Copyright &#169; 2022.  All rights reserved.</h3>
    </footer>
  );
};

export default Footer;
