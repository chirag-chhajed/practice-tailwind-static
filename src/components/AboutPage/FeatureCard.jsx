const FeatureCard = ({img}) => {
  return (
    <div className="w-[250px] p-4 flex flex-col gap-4 items-center bg-white bg-opacity-30 rounded-3xl">
            <img src={`/About/svg/${img}.png`} alt="" />
            <h3 className="text-xl font-bold text-center">
            Complete Packages For All Your Wishes
            </h3>
            
          </div>
  )
}

export default FeatureCard
