import { Metadata } from "next";
import TestimonialsPage from "@/components/pages/testimonials";

export const metadata: Metadata = {
    title: "Testimonials | Kind Words",
    description: "Testimonials from my students and clients, showcasing their experiences and feedback.",
    keywords: "Testimonials, Reviews, Feedback, Kind Words"
}

export default function Page() {
    return <TestimonialsPage />
}