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
    <main className="min-h-screen bg-dark text-gray-100">
      {/* Hero */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            J'ai Automatisé 20h/Semaine<br />
            Avec 3 Agents IA.
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            <p className="mb-4">
              €50/mois en API calls. Zero équipe. Zero bullshit.
            </p>
            <p className="text-primary font-semibold">
              Maintenant je te montre comment.
            </p>
          </div>

          {/* Compteur */}
          <div className="mb-4">
            <span className="text-sm text-gray-400">
              <span className="text-primary font-bold">[12/100]</span> places early bird restantes
            </span>
          </div>

          {/* CTA */}
          <div className="flex justify-center mb-16">
            <a href="#waitlist" className="group px-8 py-4 bg-primary hover:bg-primary/90 text-white text-lg font-semibold rounded-lg transition-all inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40">
              Je Veux Les Templates
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center text-sm">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">€50</div>
              <div className="text-gray-500">API/mois</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">20h</div>
              <div className="text-gray-500">gagnées/semaine</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">6 mois</div>
              <div className="text-gray-500">en prod 24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Problème */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Le Problème</h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Tu testes Claude en mode chat. Ça marche en démo. <strong className="text-white">Ça pète en prod.</strong>
            </p>

            <p>
              Context loss. Cost explosions. Agents amnésiques qui oublient tout après 5 messages.
            </p>

            <p className="text-xl text-white font-semibold">
              Pourquoi ?
            </p>

            <p>
              Parce que personne t'a montré comment passer de <em>"prompt copié sur X"</em> à <em>"système qui tourne 6 mois sans fail"</em>.
            </p>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-6 my-8">
              <p className="text-xl mb-4">
                <strong>Moi j'ai fait toutes les erreurs :</strong>
              </p>
              <div className="space-y-2 text-gray-300">
                <p>→ $2k en API calls perdus (context windows mal gérés)</p>
                <p>→ 3 mois trial-and-error à patcher des tutos incomplets</p>
                <p>→ Agents qui fail silencieusement en prod</p>
              </div>
            </div>

            <p className="text-2xl text-primary font-bold">
              Cette formation = tout ce que j'aurais voulu avoir au début.
            </p>
          </div>
        </div>
      </section>

      {/* La Solution */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Voilà Ce Que Tu Reçois
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Pas de théorie. Les systèmes exacts qui font tourner Theo, Kelly, Xavier 24/7.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Modules */}
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-primary">5 Modules Vidéo (3h)</h3>
              <div className="space-y-3 text-gray-300">
                <p>1. Foundations</p>
                <p>2. Context Management (le secret)</p>
                <p>3. Multi-Agent Architecture</p>
                <p>4. Cost Control & ROI</p>
                <div className="ml-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm font-semibold text-primary mb-1">🆕 Mistral M2.5 Self-Hosting</p>
                  <div className="text-xs space-y-1 text-gray-400">
                    <p>→ €0/mois API (vs €500 Claude)</p>
                    <p>→ 16GB RAM laptop suffit</p>
                    <p>→ Deploy 30 min</p>
                  </div>
                </div>
                <p>5. Production Deployment</p>
              </div>
            </div>

            {/* Templates */}
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-primary">3 Agents Production-Ready</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-bold">🔍 Theo (Research)</p>
                  <p className="text-sm text-gray-500">3 sweeps/jour • €20-30/mois • 99% uptime</p>
                </div>
                <div>
                  <p className="font-bold">✍️ Kelly (Content)</p>
                  <p className="text-sm text-gray-500">5 ideas/jour • €15-25/mois • 80% utilisables direct</p>
                </div>
                <div>
                  <p className="font-bold">🐦 Xavier (Social)</p>
                  <p className="text-sm text-gray-500">2-3 posts/jour • €10-20/mois • Auto-posting</p>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Code complet + SOUL.md + cron config + monitoring
                </p>
              </div>
            </div>

            {/* Playbooks */}
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-primary">Playbooks PDF</h3>
              <div className="space-y-2 text-gray-300">
                <p>→ Context Management Cheat Sheet</p>
                <p>→ Cost Calculator Excel</p>
                <p>→ Deployment Checklist</p>
                <p>→ Troubleshooting Guide</p>
              </div>
            </div>

            {/* Support */}
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-primary">Support</h3>
              <div className="space-y-2 text-gray-300">
                <p>→ Discord privé à vie</p>
                <p>→ Mises à jour gratuites</p>
                <p>→ Templates community</p>
                <p>→ Early access nouveaux modules</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Proof : 3 Agents en Prod Depuis 6 Mois
          </h2>

          <div className="bg-dark/80 border border-primary/30 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl mb-3">🔍</div>
                <div className="font-bold text-xl mb-2">Theo</div>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Coût: €25/mois</p>
                  <p>Uptime: 99.2%</p>
                  <p>Runtime: 6 mois</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-3">✍️</div>
                <div className="font-bold text-xl mb-2">Kelly</div>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Coût: €20/mois</p>
                  <p>Quality: 80%+</p>
                  <p>Runtime: 4 mois</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-3">🐦</div>
                <div className="font-bold text-xl mb-2">Xavier</div>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Coût: €15/mois</p>
                  <p>Posts: 2-3/jour</p>
                  <p>Runtime: 3 mois</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 mb-4">
                <strong className="text-white">Ces 3 templates complets</strong> sont inclus dans la formation.
              </p>
              <p className="text-gray-400">
                Tu les copies. Tu adaptes. Tu lances.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Total: €60/mois pour automatiser 20h/semaine
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Basé sur recherche validée:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google Cloud Report 2026
              </a>
              <span className="text-gray-600">•</span>
              <a href="https://www.reddit.com/r/OpenAI/comments/1hu7shl/what_are_the_biggest_challenges_in_building/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Reddit r/AI_Agents (500+ upvotes)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 py-16 bg-dark/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Qui je suis</h2>
          
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              Adrien. Builder indépendant.
            </p>
            <p>
              J'ai fait <strong className="text-red-400">toutes</strong> les erreurs : $2k en API calls perdus, 3 mois à patcher des tutos incomplets, agents qui fail en prod.
            </p>
            <p>
              Maintenant : 3 agents (Theo, Kelly, Xavier) qui tournent 24/7 depuis 6 mois. €60/mois total. 20h/semaine gagnées.
            </p>
            <p className="text-primary font-semibold">
              Cette formation = ce que j'aurais voulu avoir au début.
            </p>
            <p className="text-sm text-gray-500">
              Pas de CV impressionnant. Juste des systèmes qui marchent.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Prix</h2>

          <div className="bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary rounded-xl p-8 max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-primary mb-2">€299</div>
              <div className="text-gray-400 line-through text-xl">€499</div>
              <div className="text-sm text-gray-500 mt-2">Early Bird • 100 premières places</div>
            </div>

            <div className="space-y-3 mb-6 text-gray-300">
              <p>✓ 5 modules vidéo (3h)</p>
              <p>✓ 3 templates agents (code complet)</p>
              <p>✓ Playbooks PDF</p>
              <p>✓ Discord privé à vie</p>
              <p>✓ Mistral M2.5 self-hosting guide</p>
            </div>

            <div className="text-center mb-6">
              <p className="text-sm text-gray-400">
                Garantie 14 jours • Remboursement intégral si pas convaincu après Module 2
              </p>
            </div>

            <a href="#waitlist" className="block w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors text-center">
              Je prends ma place →
            </a>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            <p>Launch: 15 mars 2026</p>
            <p>Early bird: 7-10 jours avant</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Questions</h2>

          <div className="space-y-4">
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Je dois savoir coder ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400">
                <p>Si tu sais modifier du JSON et des fichiers .md, tu peux suivre.</p>
                <p className="mt-2">Si tu codes (Python/JS), tu iras juste plus vite.</p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Ça coûte combien après en API ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400">
                <p>Theo: €20-30/mois • Kelly: €15-25/mois • Xavier: €10-20/mois</p>
                <p className="mt-2">Total: €50-75/mois pour automatiser 20h/semaine.</p>
                <p className="mt-2 text-sm">Module 4 te donne calculateurs Excel pour estimer TON cas exact.</p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Garantie ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400">
                <p>14 jours. Si pas convaincu après Module 2, simple email = remboursement intégral.</p>
                <p className="mt-2 text-primary font-medium">Zero questions. Zero bullshit.</p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Pourquoi pas YouTube gratuit ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400">
                <p>Tu peux. Voilà ce qui va se passer:</p>
                <p className="mt-2">6 mois à patcher des tutos incomplets. $500-2k en erreurs API. Rebuild from scratch.</p>
                <p className="mt-3">Ou: €299 → système qui marche → ship en 1 semaine.</p>
                <p className="mt-3 text-sm text-gray-500">Ton call. Mais 6 mois à €50/h = €12k vs €299.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="px-4 py-24 bg-gradient-to-b from-gray-900/50 via-primary/5 to-dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            12 Places Restantes à €299
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Après, c'est €499.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
            Tu veux les templates qui font tourner Theo/Kelly/Xavier 24/7 depuis 6 mois, ou tu veux continuer à patcher des tutos YouTube incomplets ?
          </p>

          <form onSubmit={handleSubmit} className="mb-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
                required
                className="flex-1 max-w-md px-6 py-5 bg-gray-900 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500 text-lg"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-10 py-5 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-lg transition-all disabled:opacity-50 whitespace-nowrap shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                {loading ? "..." : "Je prends ma place →"}
              </button>
            </div>
          </form>

          {status === "success" && (
            <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg text-green-400 mb-10">
              <div className="text-3xl mb-2">✓</div>
              <p className="font-bold text-lg">Bienvenue dans les 100 premiers.</p>
              <p className="text-sm mt-2 text-green-300">Email envoyé. Check tes spams si rien dans 5 min.</p>
            </div>
          )}
          {status === "error" && (
            <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-lg text-red-400 mb-10">
              <div className="text-3xl mb-2">✗</div>
              <p className="font-bold">Erreur. Réessaye ou contact adrienlaine91@gmail.com</p>
            </div>
          )}

          <p className="text-sm text-gray-500">
            Launch 15 mars • Early bird access 7-10 jours avant • Zéro spam
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>Formation créée par un builder pour des builders.</p>
          <p className="mt-2">Contact : <a href="mailto:adrienlaine91@gmail.com" className="text-primary hover:underline">adrienlaine91@gmail.com</a></p>
        </div>
      </footer>
    </main>
  );
}
