import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { amenities } from "./AmenitiesData";
import AmenitySlide from "./AmenitySlide";

function AmenitiesSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      slidesPerView={1}
      spaceBetween={0}
      centeredSlides={false}
      loop={true}
      speed={800}
      navigation
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      watchOverflow={true}
      observer={true}
      observeParents={true}
      className="amenities-swiper"
    >
      {amenities.map((item) => (
        <SwiperSlide key={item.id}>
          <AmenitySlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default AmenitiesSlider;
