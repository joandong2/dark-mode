import React from "react";
import useDarkMode from "../hooks/useDarkMode.js";

const Navbar = () => {
    // useDarkMode is false on first mount
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <nav className="navbar">
            <h1>Crypto Tracker</h1>
            <div className="dark-mode__toggle">
                <div
                    onClick={setDarkMode}
                    className={darkMode ? "toggle toggled" : "toggle"}
                />
            </div>
        </nav>
    );
};

export default Navbar;
