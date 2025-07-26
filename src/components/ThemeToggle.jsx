import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from '@/lib/utils';


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    useEffect(()=>{
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme == "dark"){
        setIsDarkMode(true)
        document.documentElement.classList.add("dark");

    }else {
        setIsDarkMode(false)
        document.documentElement.classList.remove("dark");
    }
    }, [])
    const toggleTheme = () => {
        if (isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light");
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
    return (
    <button onClick={toggleTheme}  className={cn(
        "fixed max-sm:hidden top-3 right-5 z-50 rounded-full transiton-colors duration-300",
        "fucus-ouline-hidden"
    )}> 
        {isDarkMode ? (<Sun className="h-7 w-7 text-primary" />) : 
        (<Moon className="h-7 w-7 text-primary" />)} 
    </button>
    );
}