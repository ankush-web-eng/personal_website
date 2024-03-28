
import { Auth } from "./auth"
import { ModeToggle } from "./ui/mode-toggle"

export const Header = () => {
    return(
        <div className="max-sm:w-screen flex justify-between md:mr-6 md:mt-4 space-x-2 md:space-x-4"><ModeToggle /></div>
    )
}