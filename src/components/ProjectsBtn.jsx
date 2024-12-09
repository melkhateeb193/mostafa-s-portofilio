import { Link } from "react-router-dom";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <>
      <Link
        to={"./projects"}
        className="relative w-[175px] h-[175px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <img
          src="/rounded-text.png"
          alt=""
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </>
  );
};

export default ProjectsBtn;
