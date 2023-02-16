const CardTwo = ({img,title,description}) => {
  return (
    <div className="w-[300px] flex flex-col gap-2">
      <div className="w-[300px] overflow-hidden rounded-xl">
        <img src={img} alt="1" />
      </div>
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardTwo;
