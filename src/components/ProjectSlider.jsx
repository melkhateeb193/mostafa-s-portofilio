import { SingleSlide } from "../components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projectData } from "../utils/data";

const ProjectSlider = ({ windowWidth }) => {
  const projectSlides = [];
  for (let i = 0; i < projectData.length; i += 4) {
    const groupSlide = projectData.slice(i, i + 4);
    projectSlides.push({ projects: groupSlide });
  }

  return (
    <Swiper
      spaceBetween={10}
      navigation={false}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="h-[280px] sm:h-[480px]"
    >
      {windowWidth >= 768 ? (
        <>
          {projectSlides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                  {slide.projects.map((project) => {
                    return <SingleSlide project={project} />;
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </>
      ) : (
        <>
          {projectData.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <SingleSlide project={project} />
              </SwiperSlide>
            );
          })}
        </>
      )}
    </Swiper>
  );
};

export default ProjectSlider;
