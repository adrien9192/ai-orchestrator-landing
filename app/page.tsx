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
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">
                Google Cloud : "Le skill de 2026 n'existe pas encore"
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-center mb-8">
            Le Métier le Plus Demandé de 2026 ?
            <br />
            <span className="text-primary">Personne Le Forme en France.</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            <p className="mb-4">
              Pendant que les entreprises US payent leurs « AI Orchestrators » $150k/an pour automatiser ce que tes équipes font manuellement...
            </p>
            <p className="text-primary font-semibold">
              Les PME françaises cherchent désespérément cette compétence.
            </p>
            <p className="mt-4 text-gray-400">
              Et personne ne la forme.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center mb-12">
            <a href="#waitlist" className="group px-8 py-4 bg-primary hover:bg-primary/90 text-white text-lg font-semibold rounded-lg transition-all inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40">
              Les 100 Premières Places
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">20-40%</div>
              <div className="text-gray-400">Prime salariale AI Engineers (2026)</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">0</div>
              <div className="text-gray-400">Formation équivalente en France</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">€6k/an</div>
              <div className="text-gray-400">Perdu en API calls évitables</div>
            </div>
          </div>
        </div>
      </section>

      {/* RESONATE */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center leading-tight">
            Tu N'es Pas Seul Face à Ce Problème
          </h2>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-xl text-gray-300">
              <strong className="text-white">Google Cloud Report, Janvier 2026 :</strong>
            </p>
            
            <blockquote className="text-2xl italic text-gray-200 border-l-4 border-primary pl-6 my-8">
              "The biggest bottleneck isn't tech — it's skills. The most critical role of 2026 might be 'AI orchestrator'. These skills barely exist today."
            </blockquote>

            <p className="text-xl text-gray-300">
              Traduction ?
            </p>

            <p className="text-gray-300">
              Tout le monde utilise Claude et ChatGPT en mode chat.
            </p>

            <p className="text-gray-300">
              Personne ne sait passer de « ça marche en démo » à « ça tourne en prod sans péter ».
            </p>

            <p className="text-xl text-primary font-semibold mt-8">
              Le gap est énorme.
            </p>

            <div className="bg-dark border-l-4 border-red-500 p-6 rounded-r-lg my-8">
              <p className="text-xl mb-4 text-gray-200">
                <strong>Reddit r/AI_Agents, 500+ upvotes (Janvier 2026) :</strong>
              </p>
              <p className="text-lg italic text-gray-300">
                "Context management is THE problem. Agents lose context on long tasks. Multi-agent orchestration = chaos."
              </p>
              <p className="text-sm text-gray-500 mt-4">
                100+ commentaires confirmant. Zero solution proposée.
              </p>
            </div>

            <p className="text-xl text-gray-300">
              Pendant que tu lis ceci ?
            </p>

            <p className="text-gray-300">
              Tes concurrents US investissent des dizaines de milliers pour former leurs équipes à orchestrer des agents IA.
            </p>

            <p className="text-gray-300">
              Ils automatisent la veille. La génération de contenu. L'analyse de données.
            </p>

            <p className="text-primary font-semibold text-xl">
              Ils déploient des agents qui tournent 24/7, optimisent, itèrent, scalent.
            </p>

            <div className="my-12 p-8 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
              <p className="text-2xl font-bold text-red-400 mb-6">
                Le Coût de l'Inaction (6 Prochains Mois)
              </p>
              <div className="space-y-4 text-gray-300">
                <p>
                  Tes concurrents maîtriseront l'orchestration multi-agents pendant que tu testeras encore Claude en mode chat.
                </p>
                <p>
                  Le skill gap va se creuser. Passer de « early adopter » à « trop tard pour rattraper ».
                </p>
                <p>
                  Les postes « AI Orchestrator » vont se multiplier en France avec zéro candidats formés.
                </p>
                <p>
                  Les freelances qui proposent ce service factureront 3 à 5× ton tarif actuel.
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-300">
              Et toi ?
            </p>

            <p className="text-gray-300">
              Tu testes Claude. Tu copies-colles des prompts trouvés sur X.
            </p>

            <p className="text-gray-300">
              Tu es bloqué au moment crucial.
            </p>

            <p className="text-2xl text-white font-semibold mt-8">
              Comment passer de « ça marche en démo » à « ça tourne en prod sans péter » ?
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-dark/50 p-8 rounded-lg border border-red-500/30">
                <div className="text-4xl mb-4">❌</div>
                <p className="text-xl font-bold mb-4">Sans Cette Compétence</p>
                <div className="space-y-3 text-gray-400">
                  <p>
                    <strong className="text-gray-200">Agents amnésiques.</strong> Perdent le fil après 5 messages, recommencent à zéro.
                  </p>
                  <p>
                    <strong className="text-gray-200">Factures surprise.</strong> $2k en API calls ce mois sans tracking.
                  </p>
                  <p>
                    <strong className="text-gray-200">Chaos multi-agents.</strong> Taux d'échec exponentiel si tu chaînes 3+ agents.
                  </p>
                  <p>
                    <strong className="text-gray-200">Mode cowboy.</strong> Zero monitoring, zero metrics, impossible de prouver le ROI.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg border border-primary/30">
                <div className="text-4xl mb-4">✓</div>
                <p className="text-xl font-bold mb-4">Ceux Qui Maîtrisent</p>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <strong className="text-white">Automatisation réelle.</strong> 60 à 80% des tâches répétitives (veille, content, analyse).
                  </p>
                  <p>
                    <strong className="text-white">Coûts prévisibles.</strong> Au centime près, calculés AVANT de lancer.
                  </p>
                  <p>
                    <strong className="text-white">Agents fiables.</strong> Tournent des mois sans intervention humaine.
                  </p>
                  <p>
                    <strong className="text-white">Prime salariale.</strong> 20 à 40% au-dessus du marché (data Glassdoor 2026).
                  </p>
                </div>
              </div>
            </div>

            <p className="text-3xl font-bold text-center text-primary my-12 leading-tight">
              La question n'est pas <span className="italic">« si »</span> tu vas devoir apprendre.
              <br />
              C'est <span className="italic">« quand »</span> — et si tu seras en avance ou en retard.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              La Première Formation<br />AI Orchestrator en Français
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Pas de théorie. Pas de vaporware.
            </p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed">
              Juste le système exact qui fait tourner <strong className="text-white">Theo, Kelly, et Xavier</strong> — 3 agents en production depuis des mois.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-12 mb-16">
            <div className="flex gap-6 items-start">
              <div className="text-5xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Context Management Maîtrisé</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Fini les agents qui perdent le fil.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mt-2">
                  Techniques exactes pour gérer state, memory, et context windows sur des tâches de plusieurs heures.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mt-2">
                  Le système MEMORY.md utilisé en production. Code inclus.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="text-5xl flex-shrink-0">💰</div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Coûts Prévisibles & Contrôlés</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Calculateurs Excel. Cost strategies. Monitoring real-time.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mt-2">
                  Plus jamais de surprise à $2k.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mt-2">
                  Savoir <strong className="text-white">exactement</strong> combien coûte chaque agent <strong className="text-white">avant</strong> de le lancer en prod.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="text-5xl flex-shrink-0">🔧</div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Production-Ready dès J+1</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Templates complets de Theo (research), Kelly (content), Xavier (social media).
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mt-2">
                  Code + SOUL.md + cron config + monitoring.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mt-2">
                  Copie, adapte à ton use case, lance.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="text-5xl flex-shrink-0">📊</div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Metrics & ROI Prouvés</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Quoi mesurer (latency, success rate, cost per task).
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mt-2">
                  Comment tracker. Comment prouver la valeur à ton boss ou tes clients.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mt-2">
                  Data supérieur aux opinions.
                </p>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Ce Que Vous Recevez (Concrètement)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-bold mb-4 text-primary text-lg">📹 5 Modules Vidéo (3h)</p>
                <div className="space-y-2 text-gray-300">
                  <p>Module 1 : Foundations (preview gratuit)</p>
                  <p>Module 2 : Context Management</p>
                  <p>Module 3 : Multi-Agent Architecture</p>
                  <p>Module 4 : Cost Control & ROI</p>
                  <p>Module 5 : Production Deployment</p>
                </div>
              </div>
              <div>
                <p className="font-bold mb-4 text-primary text-lg">📦 Templates Production-Ready</p>
                <div className="space-y-2 text-gray-300">
                  <p>Theo (Research Agent) — code complet</p>
                  <p>Kelly (Content Agent) — code complet</p>
                  <p>Xavier (Social Agent) — code complet</p>
                  <p>SOUL.md, AGENTS.md, MEMORY.md templates</p>
                  <p>Cron configs, monitoring, error handling</p>
                </div>
              </div>
              <div>
                <p className="font-bold mb-4 text-primary text-lg">📄 Playbooks PDF</p>
                <div className="space-y-2 text-gray-300">
                  <p>Context Management Cheat Sheet</p>
                  <p>Cost Calculator (Excel)</p>
                  <p>Deployment Checklist</p>
                  <p>Troubleshooting Guide</p>
                </div>
              </div>
              <div>
                <p className="font-bold mb-4 text-primary text-lg">💬 Communauté & Support</p>
                <div className="space-y-2 text-gray-300">
                  <p>Discord privé à vie</p>
                  <p>Mises à jour gratuites</p>
                  <p>Library templates community</p>
                  <p>Early access aux nouveaux modules</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLIFY */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center leading-tight">
            Plus Simple Que Tu Penses
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Tu n'as pas besoin d'être ML engineer. Si tu sais lire du JSON et modifier des fichiers texte, tu peux suivre.
          </p>

          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-2xl shadow-lg shadow-primary/30">1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  Rejoins la Waitlist <span className="text-primary">(2 min)</span>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-lg">
                  Formation launch <strong className="text-white">15 mars</strong>. Les 100 premiers reçoivent accès early bird à <strong className="text-primary">€299</strong> (vs €499 normal) + bonus templates.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-2xl shadow-lg shadow-primary/30">2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  Suis les 5 Modules <span className="text-primary">(3h total, à ton rythme)</span>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-lg">
                  Vidéos courtes + templates + playbooks. Pas de prérequis dev avancé (mais si tu codes Python/JS, tu iras plus vite).
                </p>
                <div className="bg-dark/50 p-6 rounded-lg border border-gray-800 text-sm">
                  <p className="text-gray-500 mb-3">Progression typique :</p>
                  <div className="space-y-2 text-gray-400">
                    <p><strong className="text-gray-300">Jour 1 :</strong> Module 1+2 → Comprends context management</p>
                    <p><strong className="text-gray-300">Jour 2-3 :</strong> Module 3+4 → Multi-agents + cost control</p>
                    <p><strong className="text-gray-300">Jour 4-5 :</strong> Module 5 → Deploy ton premier agent</p>
                    <p><strong className="text-gray-300">Jour 6-7 :</strong> Itère, scale, rejoins la communauté</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-2xl shadow-lg shadow-primary/30">3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  Deploy & Scale <span className="text-primary">(dès la semaine 1)</span>
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Copie les templates Theo/Kelly/Xavier. Adapte à ton use case (veille, content, customer support, data analysis...). Lance en prod. Itère avec la communauté. Scale quand ready.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-green-500/10 to-green-500/5 border-2 border-green-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✓</div>
              <div>
                <h4 className="text-2xl font-bold mb-3 text-green-400">Garantie Satisfaction 14 Jours</h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Si après Module 2 (Context Management) tu penses que c'est trop technique pour toi, un simple email suffit pour un remboursement intégral sous 14 jours.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-2">
                  Zéro questions, zéro bullshit. <strong className="text-white">Tu prends ZÉRO risque.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center leading-tight">
            Validé Par Les Data,<br />Pas Par Le Hype
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-primary/30 transition-colors">
              <div className="text-primary font-bold text-lg mb-3">📊 Google Cloud Report</div>
              <p className="text-gray-400 leading-relaxed">
                "AI Orchestrator = THE skill bottleneck 2026. These skills barely exist today."
              </p>
              <p className="text-xs text-gray-600 mt-3">Source : Cloud Report Jan 2026</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-primary/30 transition-colors">
              <div className="text-primary font-bold text-lg mb-3">💬 Reddit r/AI_Agents</div>
              <p className="text-gray-400 leading-relaxed">
                "Context management is THE main problem" — 500+ upvotes, 100+ commentaires confirmant
              </p>
              <p className="text-xs text-gray-600 mt-3">Thread Jan 2026, 5000+ members</p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-primary/30 transition-colors">
              <div className="text-primary font-bold text-lg mb-3">🔍 Market Research FR</div>
              <p className="text-gray-400 leading-relaxed">
                Zéro formation pratique trouvée en français (vérifié : YouTube, LinkedIn, Udemy, Coursera)
              </p>
              <p className="text-xs text-gray-600 mt-3">Research exhaustive Jan-Feb 2026</p>
            </div>
          </div>

          {/* Live Proof */}
          <div className="bg-gradient-to-br from-dark to-gray-900 border-2 border-primary/30 rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4 text-center">Proof Vivant : 3 Agents en Production</h3>
            <p className="text-center text-gray-400 mb-10 text-lg">Les systèmes exacts que tu vas apprendre tournent 24/7 depuis des mois</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <div className="text-5xl mb-4 text-center">🔍</div>
                <div className="font-bold text-xl mb-2 text-center">Theo</div>
                <div className="text-sm text-gray-400 mb-4 text-center">Research Agent</div>
                <div className="space-y-2 text-xs text-gray-500">
                  <p>3 sweeps automatiques/jour</p>
                  <p>Sources : X, Reddit, HN, GitHub</p>
                  <p>Output : JSON structuré + markdown</p>
                  <p>Coût : environ €20-30/mois</p>
                  <p>Uptime : 99.2% (3 mois)</p>
                </div>
              </div>

              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <div className="text-5xl mb-4 text-center">✍️</div>
                <div className="font-bold text-xl mb-2 text-center">Kelly</div>
                <div className="text-sm text-gray-400 mb-4 text-center">Content Agent</div>
                <div className="space-y-2 text-xs text-gray-500">
                  <p>5 TikTok ideas/jour</p>
                  <p>Input : trends from Theo</p>
                  <p>Output : hooks + scripts</p>
                  <p>Coût : environ €15-25/mois</p>
                  <p>Taux de qualité : 80%+ (utilisables directement)</p>
                </div>
              </div>

              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <div className="text-5xl mb-4 text-center">🐦</div>
                <div className="font-bold text-xl mb-2 text-center">Xavier</div>
                <div className="text-sm text-gray-400 mb-4 text-center">Social Media Agent</div>
                <div className="space-y-2 text-xs text-gray-500">
                  <p>2-3 posts X/jour générés</p>
                  <p>Strategy : Opérateur Disruptif</p>
                  <p>Input : intel from Theo</p>
                  <p>Coût : environ €10-20/mois</p>
                  <p>Monitoring : engagement metrics</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-4 text-lg">
                <strong className="text-white">Ces 3 templates complets</strong> (code + SOUL.md + config + monitoring + playbooks) sont inclus dans la formation.
              </p>
              <p className="text-gray-400 mb-4">
                Tu les copies, tu les adaptes, tu les lances.
              </p>
              <p className="text-sm text-gray-500">
                Total cost : environ €50-75/mois pour automatiser ce qui prendrait 15-20h/semaine manuellement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center leading-tight">
            Investissement
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Combien vaut la compétence qui va définir les 5 prochaines années ?
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* Early Bird */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary rounded-xl p-8 relative transform hover:scale-105 transition-transform">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                ⚡ 100 PREMIÈRES PLACES
              </div>
              <div className="text-center mb-8 mt-4">
                <div className="text-6xl font-bold text-primary mb-3">€299</div>
                <div className="text-gray-400 line-through text-2xl">€499</div>
                <div className="text-sm text-gray-500 mt-2 font-medium">Early Bird • 40% de réduction</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>5 modules vidéo</strong> (3h) + playbooks PDF</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Templates Theo/Kelly/Xavier</strong> complets (code + config)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Discord communauté privée</strong> à vie</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Accès early</strong> (7-10 jours avant launch public)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Mises à jour gratuites</strong> à vie</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Bonus :</strong> Monitoring dashboards templates</span>
                </div>
              </div>
              <div className="text-center">
                <a href="#waitlist" className="block w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors">
                  Rejoindre Early Bird →
                </a>
              </div>
            </div>

            {/* Normal */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 px-6 py-2 rounded-full text-sm font-medium text-gray-400">
                Après 100 Places
              </div>
              <div className="text-center mb-8 mt-4">
                <div className="text-6xl font-bold mb-3">€499</div>
                <div className="text-sm text-gray-500 mt-2 font-medium">Prix Normal (après launch)</div>
              </div>
              <div className="space-y-4 mb-8 text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>5 modules vidéo (3h) + playbooks PDF</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>Templates Theo/Kelly/Xavier complets</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>Discord communauté privée à vie</span>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <span className="text-gray-600">✗</span>
                  <span>Accès early <span className="text-xs">(réservé early birds)</span></span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>Mises à jour gratuites à vie</span>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <span className="text-gray-600">✗</span>
                  <span>Bonus dashboards <span className="text-xs">(réservé early birds)</span></span>
                </div>
              </div>
              <div className="text-center">
                <div className="block w-full px-6 py-4 bg-gray-800 text-gray-500 font-bold rounded-lg cursor-not-allowed">
                  Disponible 15 Mars
                </div>
              </div>
            </div>
          </div>

          {/* Value Comparison */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-dark border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Compare Les Alternatives</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded">
                  <span className="text-gray-400">Bestseller US (théorie, anglais)</span>
                  <span className="font-bold">$50</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded">
                  <span className="text-gray-400">Learn by trial-and-error (6 mois)</span>
                  <span className="font-bold text-red-400">Gratuit (+ $500-2k mistakes)</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded">
                  <span className="text-gray-400">Hire AI Engineer ($150k/an)</span>
                  <span className="font-bold text-red-400">$12,500/mois</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary/10 border border-primary/30 rounded">
                  <span className="text-white font-medium">Formation AI Orchestrator FR (pratique, templates prod)</span>
                  <span className="font-bold text-primary text-xl">€299</span>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-6 text-xs">
                ROI estimé : si tu automatises 10h/semaine à €50/h = €2000/mois gagné • Payback en 5 jours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Questions Fréquentes
          </h2>

          <div className="space-y-4">
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                C'est pour qui exactement ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 space-y-3 leading-relaxed">
                <p><strong className="text-white">Si tu te reconnais dans l'un de ces profils :</strong></p>
                <p>
                  PME (5-50 employés) qui veulent automatiser sans embaucher une équipe data.
                </p>
                <p>
                  Freelances tech/ops qui upskillent pour proposer orchestration agents (facturer 3-5×).
                </p>
                <p>
                  CTOs/Tech Leads qui forment leurs équipes sur AI agents.
                </p>
                <p>
                  Builders solo qui adoptent AI agents mais galèrent sur context/cost/prod.
                </p>
                <p className="mt-4">
                  <strong className="text-primary">Si tu veux passer de</strong> « je teste Claude en chat » <strong className="text-primary">à</strong> « j'ai des agents en prod qui tournent 24/7 », c'est pour toi.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Je dois savoir coder ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Non obligatoire, mais ça aide.</strong></p>
                <p className="mt-3">
                  Si tu sais lire du JSON et modifier des fichiers texte (type .md, .yaml), tu peux suivre. Les templates sont prêts à copier-coller avec instructions pas-à-pas.
                </p>
                <p className="mt-3">
                  Si tu codes (Python/JS), tu iras juste plus vite pour customiser les agents à ton use case exact.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Combien ça coûte de faire tourner des agents après ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Dépend de ton usage.</strong> Exemples réels :</p>
                <div className="mt-3 space-y-2">
                  <p><strong>Theo</strong> (research 3×/jour) = environ €15-30/mois en API calls Claude</p>
                  <p><strong>Kelly</strong> (content daily) = environ €10-20/mois</p>
                  <p><strong>Xavier</strong> (social media 2-3 posts/jour) = environ €10-20/mois</p>
                </div>
                <p className="mt-4">
                  <strong className="text-primary">Module 4</strong> te donne des calculateurs Excel exacts pour estimer <strong className="text-white">TON use case</strong> avant de lancer (tokens, fréquence, context size → coût mensuel).
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  Compare : €50-75/mois d'API vs embaucher un VA à €1500/mois ou un AI engineer à €5000/mois.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Garantie si ça marche pas pour moi ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Garantie Satisfaction 14 Jours.</strong></p>
                <p className="mt-3">
                  Si après <strong className="text-primary">Module 2 (Context Management)</strong> tu penses que c'est trop technique ou pas adapté à ton niveau, un simple email suffit pour un remboursement intégral sous 14 jours.
                </p>
                <p className="mt-3 text-primary font-medium">
                  Zéro questions. Zéro bullshit. Tu prends ZÉRO risque.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                C'est quand le launch ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Launch public : 15 mars 2026</strong></p>
                <p className="mt-3">
                  Mais si tu rejoins la <strong className="text-primary">waitlist (100 premières places)</strong> :
                </p>
                <div className="mt-3 space-y-2">
                  <p>Accès early : <strong>7-10 jours avant</strong> le launch public</p>
                  <p>Prix early bird : <strong className="text-primary">€299</strong> (vs €499 normal)</p>
                  <p>Bonus templates : monitoring dashboards</p>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  Une fois les 100 places remplies, passage automatique au tarif normal €499.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Pourquoi pas juste apprendre gratuitement sur YouTube ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Tu peux. Voilà ce qui va se passer :</strong></p>
                <div className="mt-3 space-y-3">
                  <p>
                    <strong>6 mois minimum</strong> à patcher des tutos incomplets en anglais.
                  </p>
                  <p>
                    Tu vas faire <strong className="text-red-400">toutes les erreurs coûteuses</strong> : context loss ($200 en API calls perdus), agents qui fail silencieusement, cost explosions ($2k surprise ce mois).
                  </p>
                  <p>
                    Tu finiras par <strong>rebuild from scratch</strong> ce qu'on te donne déjà tout fait et testé en prod.
                  </p>
                </div>
                <p className="mt-4">
                  <strong className="text-primary">Ou :</strong> Tu investis €299, tu as le système exact qui marche en production (Theo/Kelly/Xavier), et tu ship ton premier agent en <strong className="text-white">1 semaine</strong>.
                </p>
                <p className="mt-3 text-gray-500">
                  <em>Ton call. Mais calcule : 6 mois à €50/h (learning time) = €12k. Vs €299.</em>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="waitlist" className="px-4 py-24 bg-gradient-to-b from-gray-900/50 via-primary/5 to-dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Rejoins Les 100<br />Premières Places
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            <strong className="text-primary">Launch 15 mars</strong> • Early bird <strong className="text-white">€299</strong> (vs €499) • Accès prioritaire
          </p>
          <p className="text-gray-500 mb-12">
            Une fois les 100 places remplies, passage au tarif normal €499
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
                className="px-10 py-5 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-lg transition-all disabled:opacity-50 whitespace-nowrap shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:scale-105"
              >
                {loading ? "..." : "Je Rejoins →"}
              </button>
            </div>
          </form>

          {status === "success" && (
            <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg text-green-400 mb-10 animate-fade-in">
              <div className="text-3xl mb-2">✓</div>
              <p className="font-bold text-lg">Bienvenue dans les 100 premiers !</p>
              <p className="text-sm mt-2 text-green-300">Email de confirmation envoyé. Check tes spams si rien dans 5 min.</p>
            </div>
          )}
          {status === "error" && (
            <div className="p-6 bg-red-500/10 border-2 border-red-500/30 rounded-lg text-red-400 mb-10">
              <div className="text-3xl mb-2">✗</div>
              <p className="font-bold">Erreur. Réessaye ou contact adrienlaine91@gmail.com</p>
            </div>
          )}

          <div className="space-y-3 text-sm text-gray-500 max-w-xl mx-auto">
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">✓</span>
              <span>Zéro spam. Email uniquement pour launch + early bird access</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">✓</span>
              <span>Basé sur Theo, Kelly, Xavier — agents en production depuis des mois</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-primary">✓</span>
              <span>Première formation AI Orchestrator en français (gap validé data)</span>
            </p>
          </div>

          <div className="mt-16 p-6 bg-dark/80 border border-primary/30 rounded-lg max-w-lg mx-auto">
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-white">Reminder :</strong> Ce skill va devenir mainstream d'ici 12-18 mois. Les early movers (toi, maintenant) bénéficient de la prime « je maîtrise ce que personne comprend encore ». <span className="text-primary font-medium">Les latecomers paieront 2-3× plus cher pour rattraper.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm space-y-3">
          <p className="font-medium">Formation créée par des builders pour des builders.</p>
          <p>Pas de théorie. Pas de hype. Juste des systèmes qui tournent en prod.</p>
          <p className="mt-4">Contact : <a href="mailto:adrienlaine91@gmail.com" className="text-primary hover:underline">adrienlaine91@gmail.com</a></p>
        </div>
      </footer>
    </main>
  );
}
