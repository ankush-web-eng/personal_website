"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function CarouselComp() {
  return (
    <>
      <div className="w-full h-auto mx-auto ">
        <Image
          fetchPriority="high"
          // src="/ankush_bg_image.png"
          src='/anime.jpeg'
          className="rounded-md shadow-xl"
          alt="ankush"
          width={750}
          height={200}
        />
      </div>
    </>
  );
}

{
  /* <div>
                <Image fetchPriority="high" src="/LinkedIn_cover.png" className="rounded-md" alt="ankush" width={750} height={200}/>
            </div> */
}
{
  /* <div>
                <Image fetchPriority="high" src="/freelance.png" className="rounded-md" alt="ankush" width={750} height={200}/>
            </div>
            <div>
                <Image fetchPriority="high" src="/kaizen.png" className="rounded-md" alt="ankush" width={750} height={200}/>
            </div> */
}
