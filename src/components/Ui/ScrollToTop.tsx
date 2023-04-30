import { useState, useEffect } from "react";
import { Icon } from "../Icons";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botón después de un cierto desplazamiento (por ejemplo, 300px)
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para desplazarse hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-6 right-6 p-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          onClick={scrollToTop}
        >
         <Icon.ArrowUp />
        </button>
      )}
    </>
  );
};
