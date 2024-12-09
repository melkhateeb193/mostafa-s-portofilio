const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <img
        src="/bulb.png"
        alt=""
        height={200}
        width={260}
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
