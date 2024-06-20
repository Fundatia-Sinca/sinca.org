"use client";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 z-50 bg-brand-dark text-white p-2 rounded shadow-md hover:bg-brand hover:text-brand-brown transition-colors"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M12 2L3.707 10.293a1 1 0 0 0 1.414 1.414L11 5.414V20a1 1 0 1 0 2 0V5.414l6.879 6.879a1 1 0 1 0 1.414-1.414L12 2z" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
