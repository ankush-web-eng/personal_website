'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function CarouselComp() {
  return ( 
    <>
      <div className='max-w-[1200px] mx-auto '>
        <Carousel showArrows={false} autoPlay={true} interval={2000} infiniteLoop={true} showThumbs={false} useKeyboardArrows={true}>
            <div>
                <Image fetchPriority="high" src="/ankush_bg_image.png" className="rounded-md"  alt="ankush" width={750} height={200}/>
            </div>
            <div>
                <Image fetchPriority="high" src="/LinkedIn_cover.png" className="rounded-md" alt="ankush" width={750} height={200}/>
            </div>
            <div>
                <Image fetchPriority="high" src="/freelance.png" className="rounded-md" alt="ankush" width={750} height={200}/>
            </div>
            <div>
                <Image fetchPriority="high" src="/kaizen.png" className="rounded-md" alt="ankush" width={750} height={200}/>
            </div>
        </Carousel>
      </div>
    </>
  );
};