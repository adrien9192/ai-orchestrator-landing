"use client";

import { useState, useEffect } from "react";
import LeadMagnetModal from "./components/LeadMagnetModal";

export default function LayoutClient() {
  const [showModal, setShowModal] = useState(false);
  const [modalShownOnce, setModalShownOnce] = useState(false);

  useEffect(() => {
    // Check if modal was already shown in this session
    const hasShownModal = sessionStorage.getItem("leadMagnetShown");
    if (hasShownModal) {
      setModalShownOnce(true);
    }

    // Exit-intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if:
      // 1. Mouse is leaving from the top of the page
      // 2. Modal hasn't been shown yet in this session
      // 3. User has been on page for at least 10 seconds
      if (
        e.clientY <= 0 &&
        !modalShownOnce &&
        typeof window !== "undefined" &&
        (window as any).pageLoadTime &&
        Date.now() - (window as any).pageLoadTime > 10000
      ) {
        setShowModal(true);
        setModalShownOnce(true);
        sessionStorage.setItem("leadMagnetShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    // Also trigger modal after 60 seconds on page (timeout trigger as fallback)
    const timeoutId = setTimeout(() => {
      if (!modalShownOnce) {
        setShowModal(true);
        setModalShownOnce(true);
        sessionStorage.setItem("leadMagnetShown", "true");
      }
    }, 60000); // 60 seconds

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, [modalShownOnce]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <LeadMagnetModal isOpen={showModal} onClose={handleCloseModal} />
  );
}
