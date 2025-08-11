import { Metadata } from "next";
import FeedbacksPage from "@/components/pages/feedbacks";

export const metadata: Metadata = {
    title: "Feedbacks | Feedback",
    description: "Feedbacks from my followers during events and webinars",
    keywords: "Feedbacks, Reviews, Feedback, Kind Words"
}

export default function Page() {
    return <FeedbacksPage />
}