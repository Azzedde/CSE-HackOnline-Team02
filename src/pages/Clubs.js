import React from "react";

import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ClubThumbnail1 from "../images/Cse.svg";
import { useMediaQuery } from "react-responsive";
function ClubsSwiper() {
  // const [isMobile, setIsMobile] = useState(false)
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  // //choose the screen size
  // const handleResize = () => {
  //   if (window.innerWidth < 720) {
  //       setIsMobile(true)
  //   } else {
  //       setIsMobile(false)
  //   }
  // }
  // // create an event listener
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize)
  // })
  // console.log((window.screen.width > 1024 ) );
  // console.log(window.screen.width)
  // const [slidespreview, setSlidesPreview]= useState(3.25);
  // function SlidesPreview () {
  //   if (window.screen.width > 1500 ) {
  //     setSlidesPreview(3.25)
  //   } else if (window.screen.width < 500) {
  //     setSlidesPreview(1.25)
  //   } else {
  //     setSlidesPreview(2.25)
  //   }
  //   // console.log(slidespreview);
  //   // setSlidesPreview((window.screen.width > 1500 ) ? 3.25 : (window.screen.width < 500 ) ? 1.25 : 2.25)
  //   return slidespreview;
  // }
  // console.log(slidespreview);
  return (
    <Swiper
      spaceBetween={1}
      // slidesPerView={(window.screen.width > 1500 ) ? 3.25 : (window.screen.width < 500 ) ? 1.25 : 2.25}
      slidesPerView={isMobile ? 1.3 : 3.3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ClubCard
          Thumbnail={ClubThumbnail1}
          ClubName="Nom du Club"
          details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
          VOIRPLUS="VOIR PLUS"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ClubCard
          Thumbnail={ClubThumbnail1}
          ClubName="Nom du Club"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          VOIRPLUS="VOIR PLUS"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ClubCard
          Thumbnail={ClubThumbnail1}
          ClubName="Nom du Club"
          details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
          VOIRPLUS="VOIR PLUS"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ClubCard
          Thumbnail={ClubThumbnail1}
          ClubName="Nom du Club"
          details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
          VOIRPLUS="VOIR PLUS"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ClubCard
          Thumbnail={ClubThumbnail1}
          ClubName="Nom du Club"
          details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
          VOIRPLUS="VOIR PLUS"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <ClubCard
          Thumbnail={ClubThumbnail1}
          ClubName="Nom du Club"
          details="Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit."
          VOIRPLUS="VOIR PLUS"
        />
      </SwiperSlide>
    </Swiper>
  );
}

function ClubCard(props) {
  return (
    <div className="  bg-wejahni-gray pb-4 rounded-[30px] w-[300px] ">
      <div className="object-cover ">
        <img className="w-full rounded-[30px]" src={props.Thumbnail} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="  text-center font-bold font-Inter mt-7 mb-2 lg:text-3xl text-2xl text-wejahni-blue">
          {props.ClubName}
        </h3>
        <p className="text-center font-Inter font-medium text-wejahni-blue lg:text-base md:text-sm lg:leading-5  mb-4 px-1 ">
          {props.details}
        </p>
      </div>
      <div className=" flex flex-row justify-center">
        <button className="lg:text-sm rounded-md px-3 border-2 border-wejahni-blue text-wejahni-blue font-normal mt-2 ">
          {props.VOIRPLUS}
        </button>
      </div>
    </div>
  );
}
ClubCard.propTypes = {
  Thumbnail: PropTypes.string.isRequired,
  ClubName: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  VOIRPLUS: PropTypes.string.isRequired,
};
const Clubs = () => {
  return (
    <div className="relative overflow-hidden" id="Clubs">
      <div className="">
        <div className=" flex flex-row justify-center mt-24 mb-10 ">
          <h1 className="  lg:text-5xl md:text-sm font-Inter text-wejahni-blue font-semibold underline decoration-wejahni-cyan ">
            Clubs
          </h1>
        </div>
        <h1></h1>
        <div className="flex flex-1 flex-col items-center lg:items-start ml-4">
          <p className="text-base font-normal font-Inter text-wejahni-blue pr-32 lg:text-left mb-4">
            Il est vrai qu’assister au cours, réussir ses examens, avoir de
            bonnes notes et obtenir son diplôme vous rend éligible pour trouver
            un emploi, mais pour explorer de nouveaux horizons faut integrer a
            un club !
          </p>
          <h2 className="text-xl text-center lg:text-left mb-4 font-bold text-wejahni-blue">
            Tout savoir sur les clubs universitaires en Algerie !
          </h2>
        </div>
        <div className="mt-7 ml-3">
          <ClubsSwiper />
        </div>
      </div>
    </div>
  );
};

export default Clubs;
