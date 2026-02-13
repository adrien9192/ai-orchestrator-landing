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
                Google Cloud: "Skills barely exist" • Reddit: 500+ upvotes "Context = THE problem"
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Le Métier le Plus Demandé de 2026{" "}
              <span className="text-primary">N'Existe Pas Encore</span> en France
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
              Pendant que les entreprises US payent leurs "AI Orchestrators" $150k/an pour automatiser ce que vos équipes font manuellement,
              <span className="text-primary font-bold"> les PME françaises cherchent désespérément cette compétence</span> — et personne ne la forme.
            </p>
          </div>

          {/* CTA Primary */}
          <div className="flex justify-center mb-12">
            <a href="#waitlist" className="group px-8 py-4 bg-primary hover:bg-primary/90 text-white text-lg font-semibold rounded-lg transition-all inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40">
              Rejoindre les 100 Premières Places
              <span className="group-hover:translate-x-1 transition-transform">→</span>
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

      {/* RESONATE - Storytelling + Emotional Agitation */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Vous N'Êtes Pas Seul Face à Ce Problème
          </h2>
          
          <div className="space-y-8 text-lg text-gray-300">
            <p className="leading-relaxed text-xl">
              <strong className="text-white">Google Cloud Report (Janvier 2026):</strong> "The biggest bottleneck isn't tech — it's skills. 
              The most critical role of 2026 might be 'AI orchestrator'. <span className="text-primary font-semibold">These skills barely exist today.</span>"
            </p>

            <div className="bg-dark border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-xl italic mb-4 text-gray-200">
                "Context management is THE problem. Agents lose context on long tasks. Multi-agent orchestration = chaos. 
                Nobody talks about this publicly because they don't want to admit they're stuck."
              </p>
              <p className="text-sm text-gray-500">— Thread Reddit r/AI_Agents (Jan 2026), 500+ upvotes, 100+ commentaires confirmant</p>
            </div>

            <p className="leading-relaxed text-xl">
              <strong className="text-white">Pendant que vous lisez ceci,</strong> vos concurrents US investissent des dizaines de milliers 
              pour former leurs équipes à orchestrer des agents IA. Ils automatisent la veille, la génération de contenu, l'analyse de données. 
              <span className="text-primary font-semibold"> Ils déploient des agents qui tournent 24/7, optimisent, itèrent, scalent.</span>
            </p>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
              <p className="text-xl font-bold text-red-400 mb-3">Le Coût de l'Inaction (Les 6 Prochains Mois)</p>
              <ul className="space-y-3 text-gray-300">
                <li>• Vos concurrents maîtriseront l'orchestration multi-agents pendant que vous testez encore Claude en mode chat</li>
                <li>• Le skill gap va se creuser — passer de "early adopter" à "trop tard pour rattraper"</li>
                <li>• Les postes "AI Orchestrator" vont se multiplier en France avec zéro candidats formés</li>
                <li>• Les freelances/agences qui proposent ce service factureront 3-5x votre tarif actuel</li>
              </ul>
            </div>

            <p className="leading-relaxed">
              <strong className="text-white">Et vous?</strong> Vous testez Claude, vous copiez-collez des prompts trouvés sur X. 
              Vous êtes bloqué au moment crucial : comment passer de "ça marche en démo" à "ça tourne en prod sans péter" ?
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <div className="bg-dark/50 p-6 rounded-lg border border-red-500/30">
                <div className="text-red-400 text-3xl mb-4">❌ Sans Cette Compétence</div>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>• <strong className="text-gray-200">Agents amnésiques:</strong> Perdent le fil après 5 messages, recommencent à zéro</li>
                  <li>• <strong className="text-gray-200">Factures surprise:</strong> $2k en API calls ce mois sans tracking</li>
                  <li>• <strong className="text-gray-200">Chaos multi-agents:</strong> Taux d'échec exponentiel si vous chaînez 3+ agents</li>
                  <li>• <strong className="text-gray-200">Mode cowboy:</strong> Zéro monitoring, zéro metrics, impossible de prouver le ROI</li>
                  <li>• <strong className="text-gray-200">Blocage prod:</strong> "Ça marche sur mon laptop" mais terreur de deployer</li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/30">
                <div className="text-primary text-3xl mb-4">✓ Ceux Qui Maîtrisent</div>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li>• <strong className="text-white">Automatisation réelle:</strong> 60-80% des tâches répétitives (veille, content, analyse)</li>
                  <li>• <strong className="text-white">Coûts prévisibles:</strong> Au centime près, calculés AVANT de lancer</li>
                  <li>• <strong className="text-white">Agents fiables:</strong> Tournent des mois sans intervention humaine</li>
                  <li>• <strong className="text-white">Prime salariale:</strong> 20-40% au-dessus du marché (data Glassdoor 2026)</li>
                  <li>• <strong className="text-white">Sérénité prod:</strong> Monitoring, alerting, rollback — sleep bien la nuit</li>
                </ul>
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-bold text-center text-primary my-12 leading-tight">
              La question n'est pas <span className="italic">"si"</span> vous allez devoir apprendre.<br />
              C'est <span className="italic">"quand"</span> — et si vous serez <span className="underline">en avance</span> ou <span className="line-through">en retard</span>.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATE - Solution + Benefits */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              La Première Formation AI Orchestrator en Français
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pas de théorie. Pas de vaporware. Juste le système exact qui fait tourner <strong className="text-white">Theo, Kelly, et Xavier</strong> — 
              3 agents en production qui automatisent research, content, et posting depuis des mois.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🎯</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Context Management Maîtrisé</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Fini les agents qui perdent le fil. Techniques exactes pour gérer state, memory, et context windows 
                    sur des tâches de plusieurs heures — incluant le système MEMORY.md utilisé en production.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">💰</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Coûts Prévisibles & Contrôlés</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Calculateurs Excel, cost strategies, monitoring real-time. Plus jamais de surprise à $2k. 
                    Savoir <strong>exactement</strong> combien coûte chaque agent <strong>avant</strong> de le lancer en prod.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🔧</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Production-Ready dès J+1</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Templates complets de Theo (research), Kelly (content), Xavier (social media). 
                    Code + SOUL.md + cron config + monitoring. Copie, adapte à ton use case, lance.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">⚡</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Multi-Agent Architecture</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Comment faire collaborer 3, 5, 10 agents sans que tout explose. 
                    Orchestration patterns, task delegation, error handling, failover strategies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">📊</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Metrics & ROI Prouvés</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Quoi mesurer (latency, success rate, cost per task), comment tracker, 
                    comment prouver la valeur à ton boss/clients. Data {'>'}opinions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">🇫🇷</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Communauté Builders FR</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Discord privé permanent. Fini l'isolation. Partage learnings, templates, fails, wins. 
                    Tout le monde ship plus vite ensemble.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Ce Que Vous Recevez (Concrètement)</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-bold mb-3 text-primary">📹 5 Modules Vidéo (3h)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Module 1: Foundations (preview gratuit)</li>
                  <li>• Module 2: Context Management</li>
                  <li>• Module 3: Multi-Agent Architecture</li>
                  <li>• Module 4: Cost Control & ROI</li>
                  <li>• Module 5: Production Deployment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-primary">📦 Templates Production-Ready</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Theo (Research Agent) - code complet</li>
                  <li>• Kelly (Content Agent) - code complet</li>
                  <li>• Xavier (Social Agent) - code complet</li>
                  <li>• SOUL.md, AGENTS.md, MEMORY.md templates</li>
                  <li>• Cron configs, monitoring, error handling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-primary">📄 Playbooks PDF</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Context Management Cheat Sheet</li>
                  <li>• Cost Calculator (Excel)</li>
                  <li>• Deployment Checklist</li>
                  <li>• Troubleshooting Guide</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-primary">💬 Communauté & Support</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Discord privé à vie</li>
                  <li>• Mises à jour gratuites</li>
                  <li>• Library templates community</li>
                  <li>• Early access aux nouveaux modules</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLIFY - How It Works */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Plus Simple Que Tu Penses
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Tu n'as pas besoin d'être ML engineer. Si tu sais lire du JSON et modifier des fichiers texte, tu peux suivre.
          </p>

          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-2xl shadow-lg shadow-primary/30">1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Rejoins la Waitlist <span className="text-primary">(2 min)</span></h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Formation launch <strong className="text-white">15 mars</strong>. Les 100 premiers reçoivent:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Accès early bird à <strong>€299</strong> (vs €499 normal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Accès 7-10 jours avant le launch public</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Bonus templates additionnels (monitoring dashboards)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-2xl shadow-lg shadow-primary/30">2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Suis les 5 Modules <span className="text-primary">(3h total, à ton rythme)</span></h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Vidéos courtes + templates + playbooks. Pas de prérequis dev avancé (mais si tu codes Python/JS, tu iras plus vite).
                </p>
                <div className="bg-dark/50 p-4 rounded-lg border border-gray-800">
                  <p className="text-sm text-gray-500 mb-3">Progression typique:</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• <strong className="text-gray-300">Jour 1:</strong> Module 1+2 → Comprends context management</li>
                    <li>• <strong className="text-gray-300">Jour 2-3:</strong> Module 3+4 → Multi-agents + cost control</li>
                    <li>• <strong className="text-gray-300">Jour 4-5:</strong> Module 5 → Deploy ton premier agent</li>
                    <li>• <strong className="text-gray-300">Jour 6-7:</strong> Itère, scale, rejoins la communauté</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-dark font-bold text-2xl shadow-lg shadow-primary/30">3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Deploy & Scale <span className="text-primary">(dès la semaine 1)</span></h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Copie les templates Theo/Kelly/Xavier. Adapte à ton use case (veille, content, customer support, data analysis...). 
                  Lance en prod. Itère avec la communauté. Scale quand ready.
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="flex-1 bg-primary/5 p-3 rounded border border-primary/20">
                    <div className="font-bold mb-1">Use Case 1: Research</div>
                    <div className="text-gray-500">Clone Theo → adapte sources → 3 sweeps/jour</div>
                  </div>
                  <div className="flex-1 bg-primary/5 p-3 rounded border border-primary/20">
                    <div className="font-bold mb-1">Use Case 2: Content</div>
                    <div className="text-gray-500">Clone Kelly → adapte niche → 5 ideas/jour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-green-500/10 to-green-500/5 border-2 border-green-500/30 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="text-4xl">✓</div>
              <div>
                <h4 className="text-2xl font-bold mb-3 text-green-400">Garantie Satisfaction 14 Jours</h4>
                <p className="text-gray-300 leading-relaxed">
                  Si après Module 2 (Context Management) tu penses que c'est trop technique pour toi, 
                  un simple email suffit pour un remboursement intégral sous 14 jours. Zéro questions, zéro bullshit.
                  <strong className="text-white"> Tu prends ZÉRO risque.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIFY - Social Proof */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Validé Par Les Data, Pas Par Le Hype
          </h2>

          {/* Market Validation */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-primary/30 transition-colors">
              <div className="text-primary font-bold text-lg mb-3">📊 Google Cloud Report</div>
              <p className="text-gray-400 leading-relaxed">
                "AI Orchestrator = THE skill bottleneck 2026. These skills barely exist today."
              </p>
              <p className="text-xs text-gray-600 mt-3">Source: Cloud Report Jan 2026</p>
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
                Zéro formation pratique trouvée en français (vérifié: YouTube, LinkedIn, Udemy, Coursera)
              </p>
              <p className="text-xs text-gray-600 mt-3">Research exhaustive Jan-Feb 2026</p>
            </div>
          </div>

          {/* Live Proof */}
          <div className="bg-gradient-to-br from-dark to-gray-900 border-2 border-primary/30 rounded-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-3 text-center">Proof Vivant: 3 Agents en Production</h3>
            <p className="text-center text-gray-400 mb-10">Les systèmes exacts que tu vas apprendre tournent 24/7 depuis des mois</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <div className="text-5xl mb-4 text-center">🔍</div>
                <div className="font-bold text-xl mb-2 text-center">Theo</div>
                <div className="text-sm text-gray-400 mb-4 text-center">Research Agent</div>
                <ul className="space-y-2 text-xs text-gray-500">
                  <li>• 3 sweeps automatiques/jour</li>
                  <li>• Sources: X, Reddit, HN, GitHub</li>
                  <li>• Output: JSON structuré + markdown</li>
                  <li>• Coût: ~€20-30/mois</li>
                  <li>• Uptime: 99.2% (3 mois)</li>
                </ul>
              </div>

              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <div className="text-5xl mb-4 text-center">✍️</div>
                <div className="font-bold text-xl mb-2 text-center">Kelly</div>
                <div className="text-sm text-gray-400 mb-4 text-center">Content Agent</div>
                <ul className="space-y-2 text-xs text-gray-500">
                  <li>• 5 TikTok ideas/jour</li>
                  <li>• Input: trends from Theo</li>
                  <li>• Output: hooks + scripts</li>
                  <li>• Coût: ~€15-25/mois</li>
                  <li>• Taux de qualité: 80%+ (utilisables directement)</li>
                </ul>
              </div>

              <div className="bg-dark/50 p-6 rounded-lg border border-primary/20">
                <div className="text-5xl mb-4 text-center">🐦</div>
                <div className="font-bold text-xl mb-2 text-center">Xavier</div>
                <div className="text-sm text-gray-400 mb-4 text-center">Social Media Agent</div>
                <ul className="space-y-2 text-xs text-gray-500">
                  <li>• 2-3 posts X/jour générés</li>
                  <li>• Strategy: Opérateur Disruptif</li>
                  <li>• Input: intel from Theo</li>
                  <li>• Coût: ~€10-20/mois</li>
                  <li>• Monitoring: engagement metrics</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Ces 3 templates complets</strong> (code + SOUL.md + config + monitoring + playbooks) 
                sont inclus dans la formation. Tu les copies, tu les adaptes, tu les lances.
              </p>
              <p className="text-sm text-gray-500">
                Total cost: ~€50-75/mois pour automatiser ce qui prendrait 15-20h/semaine manuellement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER - Pricing */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
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
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>5 modules vidéo</strong> (3h) + playbooks PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Templates Theo/Kelly/Xavier</strong> complets (code + config)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Discord communauté privée</strong> à vie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Accès early</strong> (7-10 jours avant launch public)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Mises à jour gratuites</strong> à vie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span><strong>Bonus:</strong> Monitoring dashboards templates</span>
                </li>
              </ul>
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
              <ul className="space-y-4 mb-8 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>5 modules vidéo (3h) + playbooks PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>Templates Theo/Kelly/Xavier complets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>Discord communauté privée à vie</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <span className="text-gray-600">✗</span>
                  <span>Accès early <span className="text-xs">(réservé early birds)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>Mises à jour gratuites à vie</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <span className="text-gray-600">✗</span>
                  <span>Bonus dashboards <span className="text-xs">(réservé early birds)</span></span>
                </li>
              </ul>
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
                ROI estimé: si tu automatises 10h/semaine à €50/h = €2000/mois gagné • Payback en 5 jours
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
                C'est pour qui exactement?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 space-y-3 leading-relaxed">
                <p><strong className="text-white">Si tu te reconnais dans l'un de ces profils:</strong></p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>PME (5-50 employés)</strong> qui veulent automatiser sans embaucher une équipe data</li>
                  <li>• <strong>Freelances tech/ops</strong> qui upskillent pour proposer orchestration agents (facturer 3-5x)</li>
                  <li>• <strong>CTOs/Tech Leads</strong> qui forment leurs équipes sur AI agents</li>
                  <li>• <strong>Builders solo</strong> qui adoptent AI agents mais galèrent sur context/cost/prod</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-primary">Si tu veux passer de</strong> "je teste Claude en chat" 
                  <strong className="text-primary"> à</strong> "j'ai des agents en prod qui tournent 24/7", c'est pour toi.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Je dois savoir coder?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Non obligatoire, mais ça aide.</strong></p>
                <p className="mt-3">
                  Si tu sais lire du JSON et modifier des fichiers texte (type .md, .yaml), tu peux suivre. 
                  Les templates sont prêts à copier-coller avec instructions pas-à-pas.
                </p>
                <p className="mt-3">
                  Si tu codes (Python/JS), tu iras juste plus vite pour customiser les agents à ton use case exact.
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  <em>Exemple:</em> Kelly (content agent) utilise OpenClaw + Claude. Tu modifies son SOUL.md (fichier texte) 
                  pour changer sa personnalité, ses instructions. Zéro code nécessaire.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Ça marche avec quels outils?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Formation agnostique</strong> mais exemples concrets basés sur:</p>
                <ul className="mt-3 space-y-2 ml-4">
                  <li>• <strong>OpenClaw</strong> (orchestration framework)</li>
                  <li>• <strong>Claude</strong> (Anthropic API)</li>
                  <li>• <strong>Cron jobs</strong> (scheduling)</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-primary">Si tu utilises Langchain, CrewAI, Autogen, ou autres frameworks:</strong> 
                  les concepts (context management, orchestration patterns, cost control) s'appliquent identiquement. 
                  Tu devras juste adapter le code aux APIs de ton framework.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Combien ça coûte de faire tourner des agents après?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Dépend de ton usage.</strong> Exemples réels:</p>
                <ul className="mt-3 space-y-2 ml-4">
                  <li>• <strong>Theo</strong> (research 3x/jour) = ~€15-30/mois en API calls Claude</li>
                  <li>• <strong>Kelly</strong> (content daily) = ~€10-20/mois</li>
                  <li>• <strong>Xavier</strong> (social media 2-3 posts/jour) = ~€10-20/mois</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-primary">Module 4</strong> te donne des calculateurs Excel exacts pour estimer 
                  <strong className="text-white"> TON use case</strong> avant de lancer (tokens, fréquence, context size → coût mensuel).
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  Compare: €50-75/mois d'API vs embaucher un VA à €1500/mois ou un AI engineer à €5000/mois.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Garantie si ça marche pas pour moi?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Garantie Satisfaction 14 Jours.</strong></p>
                <p className="mt-3">
                  Si après <strong className="text-primary">Module 2 (Context Management)</strong> tu penses que c'est 
                  trop technique ou pas adapté à ton niveau, un simple email suffit pour un remboursement intégral sous 14 jours.
                </p>
                <p className="mt-3 text-primary font-medium">
                  Zéro questions. Zéro bullshit. Tu prends ZÉRO risque.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                C'est quand le launch?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Launch public: 15 mars 2026</strong></p>
                <p className="mt-3">
                  Mais si tu rejoins la <strong className="text-primary">waitlist (100 premières places)</strong>:
                </p>
                <ul className="mt-3 space-y-2 ml-4">
                  <li>• Accès early: <strong>7-10 jours avant</strong> le launch public</li>
                  <li>• Prix early bird: <strong className="text-primary">€299</strong> (vs €499 normal)</li>
                  <li>• Bonus templates: monitoring dashboards</li>
                </ul>
                <p className="mt-3 text-sm text-gray-500">
                  Une fois les 100 places remplies, passage automatique au tarif normal €499.
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Pourquoi pas juste apprendre gratuitement sur YouTube?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Tu peux. Voilà ce qui va se passer:</strong></p>
                <ul className="mt-3 space-y-3 ml-4">
                  <li>• <strong>6 mois minimum</strong> à patcher des tutos incomplets en anglais</li>
                  <li>• Tu vas faire <strong className="text-red-400">toutes les erreurs coûteuses</strong>: 
                    context loss ($200 en API calls perdus), agents qui fail silencieusement, 
                    cost explosions ($2k surprise ce mois)
                  </li>
                  <li>• Tu finiras par <strong>rebuild from scratch</strong> ce qu'on te donne déjà tout fait et testé en prod</li>
                </ul>
                <p className="mt-4">
                  <strong className="text-primary">Ou:</strong> Tu investis €299, tu as le système exact qui marche en production 
                  (Theo/Kelly/Xavier), et tu ship ton premier agent en <strong className="text-white">1 semaine</strong>.
                </p>
                <p className="mt-3 text-gray-500">
                  <em>Ton call. Mais calcule: 6 mois à €50/h (learning time) = €12k. Vs €299.</em>
                </p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group hover:border-primary/30 transition-colors">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Quelle est la durée d'accès à la formation?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400 leading-relaxed">
                <p><strong className="text-white">Accès à vie.</strong></p>
                <p className="mt-3">
                  Les 5 modules vidéo, les templates, les playbooks, la communauté Discord — 
                  <strong className="text-primary"> tout est accessible en permanence</strong>.
                </p>
                <p className="mt-3">
                  Plus: <strong className="text-white">mises à jour gratuites à vie</strong>. Si on ajoute Module 6 
                  (ex: Advanced Multi-Agent Patterns), tu le reçois gratuitement.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Waitlist Form */}
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
              <p className="font-bold text-lg">Bienvenue dans les 100 premiers!</p>
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

          {/* Urgency Footer */}
          <div className="mt-16 p-6 bg-dark/80 border border-primary/30 rounded-lg max-w-lg mx-auto">
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-white">Reminder:</strong> Ce skill va devenir mainstream d'ici 12-18 mois. 
              Les early movers (toi, maintenant) bénéficient de la prime "je maîtrise ce que personne comprend encore". 
              <span className="text-primary font-medium"> Les latecomers paieront 2-3x plus cher pour rattraper.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm space-y-3">
          <p className="font-medium">Formation créée par des builders pour des builders.</p>
          <p>Pas de théorie. Pas de hype. Juste des systèmes qui tournent en prod.</p>
          <p className="mt-4">Contact: <a href="mailto:adrienlaine91@gmail.com" className="text-primary hover:underline">adrienlaine91@gmail.com</a></p>
        </div>
      </footer>
    </main>
  );
}
