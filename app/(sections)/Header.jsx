import ToggleBtn from "../(components)/ToggleBtn"

export default function Header() {
    return (
        <header className="flex justify-between p-4 w-full
                        bg-light-background dark:bg-dark-background 
                        text-light-text dark:text-dark-text
                         border-b absolute top-0 left-0 right-0">
            <a href="#hero">Home</a>
            <div className="flex gap-2">
                <ToggleBtn />
                <a href="#about">about</a>
                <a href="#projects">projects</a>
                <a href="#contact">contact</a>
            </div>
        </header>
    )
}