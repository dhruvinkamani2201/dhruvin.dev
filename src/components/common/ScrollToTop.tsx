import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 500);

    window.addEventListener("scroll", handle);

    return () =>
      window.removeEventListener("scroll", handle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-8 right-8 z-50 rounded-full bg-cyan-500 p-4 text-black shadow-lg transition hover:scale-110"
    >
      <FaArrowUp />
    </button>
  );
}