"use client";
import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 bg-primary-blue opacity-75 text-white p-3 rounded-full shadow-xl transition-opacity duration-300 hover:bg-primary-blue-dark hover:opacity-100 hover:cursor-pointer ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            <FaAngleUp
                size={24}
            />
        </button>
    );
} 