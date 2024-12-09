const Tooltip = ({ iconTitle }) => {
  return (
    <>
      <span className="absolute -top-6 hidden group-hover:flex bg-white text-primary px-2 py-1 rounded-[4px] text-[12px] leading-none font-semibold capitalize">
        {iconTitle}
      </span>
    </>
  );
};

export default Tooltip;
