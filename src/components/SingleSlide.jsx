import { Link } from "react-router-dom";

import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";

const SingleSlide = ({ project }) => {
  return (
    <>
      <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
        <div className="flex items-center justify-center relative overflow-hidden group">
          <img src={project.img} alt="" width={500} height={300} />
          <div className="absolute inset-0 bg-gradient-to-l from-[#000] via-[#32074d] to-[#ae143f] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-[90px] transition-all duration-300">
            <div className="flex items-center gap-x-6 tracking-[0.2em]">
              <div className="translate-y-full group-hover:translate-y-0 transition-all duration-300 delay-100 text-xl font-medium">
                {project.title}
              </div>
              <Link
                to={project.github}
                target="_blank"
                className="translate-y-full group-hover:translate-y-0 transition-all duration-300 delay-150 hover:text-accent"
              >
                <BsGithub size={20} />
              </Link>
              <Link
                to={project.link}
                target="_blank"
                className="translate-y-full group-hover:translate-y-0 transition-all duration-300 delay-200 hover:text-accent"
              >
                <TbExternalLink size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSlide;
