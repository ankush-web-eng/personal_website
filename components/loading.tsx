import { useTypewriter,Cursor } from "react-simple-typewriter";

type Props = {
    children: string
}

export default function Loading({children}: Props){
    const [text] = useTypewriter({
        words: ["...", "..." ],
        loop: true,
        typeSpeed:100,
        deleteSpeed: 100,
    })
    return (
        <span className="text-blue-500">{children} <span>{text}</span><span><Cursor /></span></span>
    ) 
}