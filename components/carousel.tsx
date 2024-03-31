'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComp() {
  return ( 
    <>
      <div className='max-w-[1200px] mx-auto '>
        <Carousel  autoPlay={true} interval={2000} infiniteLoop={true} showThumbs={false} useKeyboardArrows={true}>
            <div>
                <img src="/ankush_bg_image.png" className="rounded-md" />
            </div>
            <div>
                <img src="/LinkedIn_cover.png" className="rounded-md"/>
            </div>
            <div>
                <img src="/freelance.png" className="rounded-md"/>
            </div>
            <div>
                <img src="/kaizen.png" className="rounded-md"/>
            </div>
        </Carousel>
      </div>
    </>
  );
};