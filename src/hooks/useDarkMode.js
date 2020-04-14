import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage("dark-mode");

    useEffect(() => {
        if (someValue) {
            window.document.body.classList.add("dark-mode");
        } else {
            window.document.body.classList.remove("dark-mode");
        }
    }, [someValue]);

    return [someValue, setSomeValue];
};

export default useDarkMode;
