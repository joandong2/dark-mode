import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("dark-mode");

    const toggleMode = () => {
        setValue(!value);
    };

    useEffect(() => {
        if (value) {
            window.document.body.classList.add("dark-mode");
        } else {
            window.document.body.classList.remove("dark-mode");
        }
    }, [value]);

    return [value, toggleMode];
};

export default useDarkMode;
