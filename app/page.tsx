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
    <main className="min-h-screen bg-dark">
      {/* PAIN - Hero Section */}
      <section className="relative px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">
                Skill #1 de 2026 • Demande 20-40% Supérieure au Marché
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Le Métier le Plus Demandé de 2026{" "}
              <span className="text-primary">N'Existe Pas Encore</span> en France
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-medium">
              Pendant que les entreprises US forment leurs "AI Orchestrators" à $150k/an,
              <span className="text-primary"> les PME françaises cherchent désespérément cette compétence</span> qui n'existe nulle part.
            </p>
          </div>

          {/* CTA Primary */}
          <div className="flex justify-center mb-12">
            <a href="#waitlist" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white text-lg font-semibold rounded-lg transition-colors inline-flex items-center gap-2">
              Rejoindre les 100 Premières Places
              <span>→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">20-40%</div>
              <div className="text-gray-400">Prime salariale AI Engineers (2026)</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-5xl font-bold text-primary">0</div>
              <div className="text-gray-400">Formation équivalente en France</div>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-5xl font-bold text-primary">4%</div>
              <div className="text-gray-400">Croissance recrutement tech FR 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* RESONATE - Problem Deep Dive */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Vous N'Êtes Pas Seul Face à Ce Problème
          </h2>
          
          <div className="space-y-8 text-lg text-gray-300">
            <p className="leading-relaxed">
              <strong className="text-white">Google Cloud Report (Jan 2026):</strong> "The biggest bottleneck isn't tech — it's skills. 
              The most critical role of 2026 might be 'AI orchestrator'. <span className="text-primary font-semibold">These skills barely exist today.</span>"
            </p>

            <div className="bg-dark border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-xl italic mb-4">"Context management is THE problem. Agents lose context on long tasks. Multi-agent orchestration = chaos."</p>
              <p className="text-sm text-gray-500">— Reddit r/AI_Agents, 500+ upvotes</p>
            </div>

            <p className="leading-relaxed">
              Pendant que vous lisez ceci, <span className="text-primary font-semibold">vos concurrents US payent $150k/an</span> pour des "AI Orchestrators" 
              qui automatisent ce que votre équipe fait manuellement. Ils déploient des agents qui tournent 24/7. Ils optimisent, itèrent, scalent.
            </p>

            <p className="leading-relaxed">
              <strong className="text-white">Et vous?</strong> Vous testez Claude en mode chat. Vous copiez-collez des prompts trouvés sur X. 
              Vous ne savez pas comment passer de "ça marche en démo" à "ça tourne en prod sans péter."
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-dark/50 p-6 rounded-lg border border-gray-800">
                <div className="text-red-400 text-2xl mb-3">❌</div>
                <h3 className="font-bold mb-2">Le Coût de l'Inaction</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Agents qui perdent le fil après 5 messages</li>
                  <li>• Factures API imprévisibles (surprise: $2k ce mois)</li>
                  <li>• Taux d'échec exponentiel si vous chaînez 3+ agents</li>
                  <li>• Zéro monitoring, zéro metrics, zéro ROI prouvé</li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/30">
                <div className="text-primary text-2xl mb-3">✓</div>
                <h3 className="font-bold mb-2">Ceux Qui Maîtrisent Ça</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Automatisent 60-80% des tâches répétitives</li>
                  <li>• Coûts prévisibles au centime près</li>
                  <li>• Agents fiables qui tournent des mois sans intervention</li>
                  <li>• Prime salariale 20-40% au-dessus du marché</li>
                </ul>
              </div>
            </div>

            <p className="text-2xl font-bold text-center text-primary my-12">
              La question n'est pas "si" vous allez devoir apprendre. C'est "quand" — et si vous serez en avance ou en retard.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATE - Solution */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              La Première Formation AI Orchestrator en Français
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pas de théorie. Pas de vaporware. Juste le système exact qui fait tourner Theo, Kelly, et Xavier — 
              3 agents en production depuis des mois.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Context Management Maîtrisé</h3>
                  <p className="text-gray-400">Fini les agents qui perdent le fil. Techniques exactes pour gérer state, memory, et context windows sur des tâches de plusieurs heures.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Coûts Prévisibles & Contrôlés</h3>
                  <p className="text-gray-400">Calculateurs, strategies, monitoring. Plus jamais de surprise à $2k. Savoir exactement combien coûte chaque agent avant de le lancer.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🔧</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Production-Ready dès J+1</h3>
                  <p className="text-gray-400">Templates complets de Theo/Kelly/Xavier. Code, SOUL.md, cron config, monitoring. Copie, adapte, lance.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-Agent Architecture</h3>
                  <p className="text-gray-400">Comment faire collaborer 3, 5, 10 agents sans que tout explose. Orchestration, task delegation, error handling.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Metrics & ROI Prouvés</h3>
                  <p className="text-gray-400">Quoi mesurer, comment tracker, comment prouver la valeur à ton boss/clients. Data {'>'}opinions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🇫🇷</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Communauté Builders FR</h3>
                  <p className="text-gray-400">Discord privé. Fini l'isolation. Partage learnings, templates, fails. Tout le monde ship plus vite ensemble.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLIFY - How It Works */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Plus Simple Que Tu Penses
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-xl">1</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Rejoins la Waitlist (2 min)</h3>
                <p className="text-gray-400">Formation launch 15 mars. Les 100 premiers reçoivent accès early bird à €299 (vs €499 normal) + bonus templates.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-xl">2</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">5 Modules Pratiques (3h total)</h3>
                <p className="text-gray-400 mb-4">Vidéos + templates + playbooks. Suit à ton rythme. Pas de prérequis dev (mais si tu codes, tu iras plus vite).</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>→ Module 1: Foundations (gratuit preview)</li>
                  <li>→ Module 2: Context Management</li>
                  <li>→ Module 3: Multi-Agent Architecture</li>
                  <li>→ Module 4: Cost & ROI</li>
                  <li>→ Module 5: Production Deployment</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-xl">3</div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Deploy Ton Premier Agent</h3>
                <p className="text-gray-400">Utilise les templates Theo/Kelly/Xavier. Adapte à ton use case. Lance en prod. Itère. Scale.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary/5 border border-primary/30 rounded-lg">
            <p className="text-center text-lg">
              <strong className="text-primary">Garantie:</strong> Si après Module 2 tu penses que c'est trop technique pour toi, 
              email simple et remboursement intégral. Zéro risque.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIFY - Social Proof */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Validé Par Les Data, Pas Par Le Hype
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="text-primary font-bold mb-2">Google Cloud Report</div>
              <p className="text-sm text-gray-400">"AI Orchestrator = THE bottleneck 2026. Skills barely exist."</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="text-primary font-bold mb-2">Reddit r/AI_Agents</div>
              <p className="text-sm text-gray-400">500+ upvotes: "Context management is THE main problem" (100+ comments confirmant)</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="text-primary font-bold mb-2">Market Research</div>
              <p className="text-sm text-gray-400">Bestseller US $50 (théorie). Zéro formation pratique FR trouvée (vérifié: YouTube, LinkedIn, Udemy)</p>
            </div>
          </div>

          <div className="bg-dark border border-primary/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Proof Vivant: 3 Agents en Production</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🔍</div>
                <div className="font-bold mb-1">Theo</div>
                <div className="text-sm text-gray-400">Research agent. 3 sweeps/jour. Scan X/Reddit/HN. Output structured JSON.</div>
              </div>
              <div>
                <div className="text-3xl mb-2">✍️</div>
                <div className="font-bold mb-1">Kelly</div>
                <div className="text-sm text-gray-400">Content agent. 5 TikTok ideas/jour. Input: trends. Output: hooks + scripts.</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🐦</div>
                <div className="font-bold mb-1">Xavier</div>
                <div className="text-sm text-gray-400">X specialist. Génère 2-3 posts/jour from intel. Opérateur Disruptif strategy.</div>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6 text-sm">
              Ces templates exacts (code + config + docs) inclus dans la formation.
            </p>
          </div>
        </div>
      </section>

      {/* OFFER - Pricing */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Investissement
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Early Bird */}
            <div className="bg-primary/10 border-2 border-primary rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-bold">
                100 PREMIÈRES PLACES
              </div>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary mb-2">€299</div>
                <div className="text-gray-400 line-through">€499</div>
                <div className="text-sm text-gray-500 mt-2">Early Bird (40% off)</div>
              </div>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>5 modules vidéo (3h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Templates Theo/Kelly/Xavier complets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Playbooks PDF (Context, Cost, Deploy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Discord communauté privée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Accès early (avant launch public)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Mises à jour gratuites à vie</span>
                </li>
              </ul>
            </div>

            {/* Normal */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">€499</div>
                <div className="text-sm text-gray-500 mt-2">Prix Normal (après launch)</div>
              </div>
              <ul className="space-y-3 text-sm mb-8 text-gray-400">
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>5 modules vidéo (3h)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Templates Theo/Kelly/Xavier complets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Playbooks PDF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Discord communauté privée</span>
                </li>
                <li className="flex items-start gap-2 opacity-50">
                  <span>✗</span>
                  <span>Accès early (réservé early birds)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Mises à jour gratuites à vie</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-8">
              <strong className="text-white">Compare:</strong> Bestseller US $50 (théorie, anglais) vs notre formation (pratique, français, templates prod-ready).
              <br />
              <span className="text-sm">Ou hire un AI Engineer à $150k/an. Ou spend 6 mois à learn by trial-and-error.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Questions Fréquentes
          </h2>

          <div className="space-y-6">
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer">C'est pour qui exactement?</summary>
              <p className="mt-4 text-gray-400">
                PME (5-50 employés) qui veulent automatiser, freelances tech/ops qui upskillent, 
                CTOs qui forment leurs équipes, builders solo qui adoptent AI agents. 
                Si tu veux passer de "je teste Claude en chat" à "j'ai des agents en prod qui tournent 24/7", c'est pour toi.
              </p>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <summary className="font-bold cursor-pointer">Je dois savoir coder?</summary>
              <p className="mt-4 text-gray-400">
                Pas obligatoire mais ça aide. Si tu sais lire du JSON et modifier des fichiers texte, tu peux suivre. 
                Les templates sont prêts à copier-coller. Si tu codes (Python/JS), tu iras juste plus vite pour customiser.
              </p>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <summary className="font-bold cursor-pointer">Ça marche avec quels outils?</summary>
              <p className="mt-4 text-gray-400">
                Formation agnostique mais exemples basés sur OpenClaw + Claude. Si tu utilises Langchain, CrewAI, Autogen, 
                les concepts (context management, orchestration, cost control) s'appliquent pareil.
              </p>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <summary className="font-bold cursor-pointer">Combien ça coûte de faire tourner des agents après?</summary>
              <p className="mt-4 text-gray-400">
                Dépend de ton usage. Theo (research 3x/jour) = ~€15-30/mois en API calls. Kelly (content daily) = ~€10-20/mois. 
                Module 4 te donne calculateurs exacts pour estimer TON use case avant de lancer.
              </p>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <summary className="font-bold cursor-pointer">Garantie si ça marche pas pour moi?</summary>
              <p className="mt-4 text-gray-400">
                Si après Module 2 (Context Management) tu penses que c'est trop technique, email simple et remboursement intégral sous 14 jours. 
                Zéro questions, zéro bullshit.
              </p>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <summary className="font-bold cursor-pointer">C'est quand le launch?</summary>
              <p className="mt-4 text-gray-400">
                15 mars 2026. Waitlist donne accès early (7-10 jours avant) + prix early bird €299 (vs €499 public). 
                100 premières places only.
              </p>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <summary className="font-bold cursor-pointer">Pourquoi pas juste apprendre gratuitement sur YouTube?</summary>
              <p className="mt-4 text-gray-400">
                Tu peux. Ça te prendra 6 mois, tu vas faire toutes les erreurs coûteuses (context loss, cost explosions, agents qui fail silencieusement), 
                et tu finiras par rebuild ce qu'on te donne déjà tout fait. Ou tu investis €299, tu as le système exact qui marche en prod, 
                et tu ship en 1 semaine. Ton call.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Waitlist Form */}
      <section id="waitlist" className="px-4 py-20 bg-gradient-to-b from-gray-900/30 to-dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rejoins Les 100 Premières Places
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Launch 15 mars • Early bird €299 (vs €499) • Accès prioritaire
          </p>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.com"
                required
                className="flex-1 max-w-md px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {loading ? "..." : "Je Rejoins →"}
              </button>
            </div>
          </form>

          {status === "success" && (
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 mb-8">
              ✓ Bienvenue dans les 100 premiers! Email de confirmation envoyé.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 mb-8">
              Erreur. Réessaye ou contact adrienlaine91@gmail.com
            </div>
          )}

          <div className="space-y-4 text-sm text-gray-500">
            <p>✓ Zéro spam. Email uniquement pour launch + early bird access.</p>
            <p>✓ Basé sur Theo, Kelly, Xavier — agents en production depuis des mois</p>
            <p>✓ Première formation AI Orchestrator en français (gap validé par Google Cloud + Reddit + market research)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>Formation créée par des builders pour des builders.</p>
          <p className="mt-2">Contact: adrienlaine91@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}
