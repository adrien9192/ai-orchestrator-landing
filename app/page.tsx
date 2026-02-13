"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full space-y-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-primary">
            Gap Validé • Google Cloud Report 2026
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Le Skill le Plus Demandé de 2026{" "}
            <span className="text-primary">N'Existe Pas Encore</span> en France
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Google Cloud Report : "AI Orchestrator est THE bottleneck de 2026. Ces compétences n'existent pas dans la workforce actuelle."
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">$50</div>
            <div className="text-sm text-gray-400">Bestseller US</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">0</div>
            <div className="text-sm text-gray-400">Équivalent Français</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">3</div>
            <div className="text-sm text-gray-400">Agents en Production</div>
          </div>
        </div>

        {/* Problem */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-left max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Le Problème</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>Les entreprises françaises adoptent les agents IA massivement en 2026</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>Mais personne ne sait comment orchestrer, gérer le contexte, contrôler les coûts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">→</span>
              <span>Ce nouveau rôle "AI Orchestrator" est critique. Et la formation n'existe pas en français</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            Rejoins la Liste d'Attente
          </h2>
          <p className="text-gray-400">
            Formation complète lancée mars 2026 • Accès prioritaire • Templates inclus
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
                required
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? "..." : "Je Rejoins"}
              </button>
            </div>
          </form>

          {status === "success" && (
            <div className="text-green-500 font-medium">
              ✓ Merci ! Tu es sur la liste prioritaire.
            </div>
          )}
          {status === "error" && (
            <div className="text-red-500 font-medium">
              Une erreur est survenue. Réessaye dans un instant.
            </div>
          )}
        </div>

        {/* Social Proof */}
        <div className="pt-12 border-t border-gray-800">
          <p className="text-sm text-gray-500 mb-4">Basé sur</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <span>✓ Theo (Research Agent)</span>
            <span>✓ Kelly (Content Agent)</span>
            <span>✓ Xavier (X Content Specialist)</span>
          </div>
        </div>
      </div>
    </main>
  );
}
