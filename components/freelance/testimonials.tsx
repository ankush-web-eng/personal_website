"use client";
import { useEffect, useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonial/get");
        const result = await response.json();
        if (result.success) {
          setTestimonials(result.data.map((testimonial: any) => ({
            quote: testimonial.content,
            name: testimonial.name,
            designation: testimonial.company || testimonial.project || "",
            src: testimonial.image || "/default-image.png"
          })));
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="h-fit flex py-3 items-center justify-center w-full">
      {testimonials.length > 0 ? (
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      ) : (
        <p>Loading testimonials...</p>
      )}
    </div>
  );
}