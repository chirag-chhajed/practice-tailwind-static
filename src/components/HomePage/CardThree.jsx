import { CalendarDaysIcon,MapIcon,CreditCardIcon,PhoneArrowDownLeftIcon } from "@heroicons/react/24/solid";

const CardThree = ({img}) => {
  return (
    <div className="flex flex-col shadow w-[300px] rounded-xl gap-3">
          <div className="w-[300px] overflow-hidden rounded-xl">
            <img src={img} alt="1" />
          </div>
          <div className="flex flex-col gap-3 px-4 py-4">
            <h3 className="font-bold">BIKE / RICKSHAW</h3>
            <div>
              <span className="text-gray">$</span>
              <span className="text-4xl font-bold text-orange">10</span>
              <span className="text-gray">/day</span>
            </div>
            <p className="flex items-center gap-3"><CalendarDaysIcon className="w-4 h-4 text-orange "/>Your bike for a day</p>
            <p className="flex items-center gap-3"><MapIcon className="w-4 h-4 text-orange "/>City App</p>
            <p className="flex items-center gap-3"><CreditCardIcon className="w-4 h-4 text-orange "/>Discount on Rickshaw</p>
            <p className="flex items-center gap-3"><PhoneArrowDownLeftIcon className="w-4 h-4 text-orange "/>Guaranteed Support</p>
            <button className="px-6 py-4 font-bold transition bg-white border rounded-full border-orange text-orange hover:text-white hover:bg-orange">
              Book Now
            </button>
            
          </div>
        </div>
  )
}

export default CardThree
