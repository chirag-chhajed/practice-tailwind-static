import { CalendarIcon,UserGroupIcon } from "@heroicons/react/24/solid";

const CardOne = ({img,title,price,description}) => {
  return (
    <div className="flex flex-col gap-2 w-[320px] p-3">
      <div className="w-[300px] overflow-hidden rounded-xl">
        <img src={img} alt="1" />
      </div>
      <h3 className="font-bold">{title}</h3>
      <p>
        from <span className="text-orange font-bold">{price}$</span>
      </p>
      <div className="flex justify-between">
        <span>
          <CalendarIcon className="text-orange h-6 w-6" />
        </span>
        <span>
          <UserGroupIcon className="text-orange h-6 w-6" />
        </span>
      </div>
      <h4>
        {description}
      </h4>
    </div>
  );
};

export default CardOne;
