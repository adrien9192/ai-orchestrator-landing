"use client";

import { useState, useEffect } from "react";
import { trackEmailSignup } from "@/lib/analytics";

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let exitIntentTriggered = false;
    const TRIGGER_DELAY = 2000; // 2s delay to avoid accidental trigger
    let mouseLeaveTimer: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of viewport (exit intent)
      if (e.clientY <= 0 && !exitIntentTriggered) {
        mouseLeaveTimer = setTimeout(() => {
          setShowPopup(true);
          exitIntentTriggered = true;
          
          // Track exit-intent trigger
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'exit_intent_triggered');
          }
        }, TRIGGER_DELAY);
      }
    };

    const handleMouseEnter = () => {
      // Cancel timer if mouse re-enters before delay
      if (mouseLeaveTimer) {
        clearTimeout(mouseLeaveTimer);
      }
    };

    // Only add listener on desktop (mobile doesn't have mouse leave)
    if (window.innerWidth >= 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (mouseLeaveTimer) clearTimeout(mouseLeaveTimer);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, tier: 'exit-intent' }),
      });

      if (res.ok) {
        trackEmailSignup('final', email);
        setStatus("success");
        
        // Track exit-intent conversion
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'exit_intent_converted');
        }
        
        // Close popup after 3s
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    
    // Track exit-intent dismiss
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'exit_intent_dismissed');
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gray-900 border-2 border-yellow-400 rounded-xl max-w-md w-full p-8 relative shadow-2xl shadow-yellow-400/20 animate-slide-up">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl leading-none"
          aria-label="Fermer"
        >
          ×
        </button>

        {status === "success" ? (
          <div className="text-center">
            <div className="text-5xl mb-4" aria-hidden="true">✓</div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Check ton email !</h3>
            <p className="text-gray-400">Tu vas recevoir l&apos;accès Early Bird dans 2 min.</p>
          </div>
        ) : (
          <>
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">Attends. Un Dernier Truc.</h3>
            
            <p className="text-xl text-white mb-4">
              Je sais. €299 c&apos;est un risk.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Regarde juste <strong className="text-yellow-400">Module 1 gratuit</strong> (15 min) avant de partir.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? "..." : "Voir Module 1 Gratuit →"}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400 text-center mb-2">
                Ou simplement reçois le PDF :
              </p>
              <button
                onClick={handleSubmit}
                className="w-full text-yellow-400 hover:underline text-sm font-medium"
              >
                Context Management Cheat Sheet (gratuit)
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Zéro spam. Tu peux unsubscribe en 1 clic.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
