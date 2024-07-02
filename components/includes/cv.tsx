"use client"
import { Button } from "../ui/button";

export default function CV() {

    const openCV = () => {
        window.open("/Resume.pdf", "_blank");
    };

    return (
        <Button variant="primary" onClick={openCV}>
            Download CV
        </Button>
    )
}