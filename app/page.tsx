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
            J&apos;ai Automatisé 20h/Semaine<br />
            Avec 5 Agents IA.
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            <p className="mb-4">
              €73/mois en API calls. Zero équipe. Zero bullshit.
            </p>
            <p className="text-primary font-semibold">
              Du chat au système en prod 24/7 : je te montre comment.
            </p>
          </div>

          {/* Compteur */}
          <div className="mb-4">
            <span className="text-sm text-gray-400">
              <span className="text-primary font-bold">[10/10]</span> places Founding Member (€99)
              <br />
              <span className="text-primary font-bold">[78/90]</span> places Early Bird (€299)
            </span>
          </div>

          {/* CTA */}
          <div className="flex justify-center mb-16">
            <a href="#waitlist" className="group px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold shadow-xl transform hover:scale-105 transition-all text-lg rounded-lg inline-flex items-center gap-2">
              Je Veux Les Templates
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center text-sm">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">€73</div>
              <div className="text-gray-500">API/mois réels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">18h</div>
              <div className="text-gray-500">gagnées/semaine</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">99.2%</div>
              <div className="text-gray-500">uptime 6 mois</div>
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
              Parce que personne t&apos;a montré comment passer de <em>&quot;prompt copié sur X&quot;</em> à <em>&quot;système qui tourne 6 mois sans fail&quot;</em>.
            </p>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-6 my-8">
              <p className="text-xl mb-4">
                <strong>Moi j&apos;ai fait toutes les erreurs :</strong>
              </p>
              <div className="space-y-2 text-gray-300">
                <p>→ $2,347 en API calls perdus (factures Anthropic à l&apos;appui)</p>
                <p>→ 3 mois trial-and-error à patcher des tutos incomplets</p>
                <p>→ Agents qui fail silencieusement en prod</p>
              </div>
            </div>

            <p className="text-2xl text-primary font-bold">
              Cette formation = tout ce que j&apos;aurais voulu avoir au début.
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Proof : 5 Agents en Prod Depuis 6 Mois
          </h2>

          <div className="bg-dark/80 border border-primary/30 rounded-xl p-8">
            <div className="grid md:grid-cols-5 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🔍</div>
                <div className="font-bold text-lg mb-2">Theo</div>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>€28/mois</p>
                  <p className="text-green-400 font-semibold">99.2% uptime</p>
                  <p>6 mois runtime</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">✍️</div>
                <div className="font-bold text-lg mb-2">Kelly</div>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>€22/mois</p>
                  <p className="text-green-400 font-semibold">82% quality</p>
                  <p>4 mois runtime</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">📧</div>
                <div className="font-bold text-lg mb-2">Nina</div>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>€8/mois</p>
                  <p className="text-green-400 font-semibold">Template-based</p>
                  <p>3 mois runtime</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <div className="font-bold text-lg mb-2">Marco</div>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>€7/mois</p>
                  <p className="text-green-400 font-semibold">User feedback</p>
                  <p>2 mois runtime</p>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🔄</div>
                <div className="font-bold text-lg mb-2">Rémi</div>
                <div className="text-xs text-gray-400 space-y-1">
                  <p>€8/mois</p>
                  <p className="text-green-400 font-semibold">Repurpose</p>
                  <p>2 mois runtime</p>
                </div>
              </div>
            </div>

            <div className="text-center border-t border-gray-700 pt-6">
              <p className="text-lg text-gray-300 mb-4">
                <strong className="text-white">Total mensuel : €73/mois</strong> pour automatiser 18h/semaine
              </p>
              <p className="text-gray-400 mb-2">
                Ces 5 templates complets sont inclus dans la formation.
              </p>
              <p className="text-gray-400 text-sm">
                Tu les copies. Tu adaptes. Tu lances.
              </p>
              <div className="mt-6 text-xs text-gray-500">
                <p>Metrics vérifiables : dashboards publics + factures Anthropic API</p>
                <p className="text-primary mt-1">Preuve $2,347 perdus = factures novembre-décembre 2025 (erreurs context)</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Basé sur recherche validée :
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

      {/* Tableau Comparatif */}
      <section className="px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            3 Façons d&apos;Apprendre
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Tu peux apprendre gratuitement. Voilà le coût réel.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="p-4 text-left text-gray-500 font-normal"></th>
                  <th className="p-4 text-center">
                    <div className="text-2xl mb-2">📺</div>
                    <div className="font-bold text-lg">YouTube Gratuit</div>
                  </th>
                  <th className="p-4 text-center">
                    <div className="text-2xl mb-2">👨‍💻</div>
                    <div className="font-bold text-lg">Freelance Dev</div>
                  </th>
                  <th className="p-4 text-center bg-primary/10 border-2 border-primary rounded-t-xl">
                    <div className="text-2xl mb-2">🎓</div>
                    <div className="font-bold text-lg text-primary">Cette Formation</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Coût 6 mois</td>
                  <td className="p-4 text-center text-gray-400">€3,600<br /><span className="text-xs">(ton temps à €50/h)</span></td>
                  <td className="p-4 text-center text-gray-400">€4,500<br /><span className="text-xs">(3 agents custom)</span></td>
                  <td className="p-4 text-center bg-primary/5"><span className="text-primary font-bold text-xl">€299</span></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Temps setup</td>
                  <td className="p-4 text-center text-gray-400">3-6 mois<br /><span className="text-xs">(trial & error)</span></td>
                  <td className="p-4 text-center text-gray-400">2-3 mois<br /><span className="text-xs">(specs + dev + debug)</span></td>
                  <td className="p-4 text-center bg-primary/5"><span className="text-primary font-bold">7-10 jours</span></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Code prod-ready</td>
                  <td className="p-4 text-center text-red-400">✗<br /><span className="text-xs text-gray-500">(tutos incomplets)</span></td>
                  <td className="p-4 text-center text-green-400">✓<br /><span className="text-xs text-gray-400">(si bon dev)</span></td>
                  <td className="p-4 text-center bg-primary/5"><span className="text-green-400 text-xl">✓</span><br /><span className="text-xs text-gray-400">(templates testés 6 mois)</span></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-4 font-semibold">Support</td>
                  <td className="p-4 text-center text-gray-400">Reddit luck<br /><span className="text-xs text-gray-500">(réponse jamais garantie)</span></td>
                  <td className="p-4 text-center text-gray-400">30j max<br /><span className="text-xs text-gray-500">(puis tu paies)</span></td>
                  <td className="p-4 text-center bg-primary/5"><span className="text-primary font-bold">Discord à vie</span><br /><span className="text-xs text-gray-400">(&lt;24h response)</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Updates</td>
                  <td className="p-4 text-center text-gray-400">Tu rebuild<br /><span className="text-xs text-gray-500">(nouveaux tutos)</span></td>
                  <td className="p-4 text-center text-red-400">✗<br /><span className="text-xs text-gray-500">(contrat fini)</span></td>
                  <td className="p-4 text-center bg-primary/5 rounded-b-xl"><span className="text-green-400 text-xl">✓</span><br /><span className="text-xs text-gray-400">(gratuit à vie)</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Temps valorisé à €50/h (freelance junior). Si tu es senior → gap encore plus gros.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            3 Profils Qui Utilisent Ces Agents
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Templates adaptables à ton cas exact.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Solopreneur */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4">Solopreneur / Freelance</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm font-semibold text-primary">Agents utilisés :</p>
                <p className="text-sm">→ <strong>Theo</strong> : Prospection auto (recherche clients cibles)</p>
                <p className="text-sm">→ <strong>Kelly</strong> : Content ideas (LinkedIn/blog)</p>
                <p className="text-sm">→ <strong>Nina</strong> : Email outreach (cold/warm)</p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500">Temps gagné : 12h/semaine</p>
                  <p className="text-xs text-gray-500">Coût : €45/mois</p>
                </div>
              </div>
            </div>

            {/* SaaS */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">SaaS / Product Team</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm font-semibold text-primary">Agents utilisés :</p>
                <p className="text-sm">→ <strong>Theo</strong> : Competitive research + trends</p>
                <p className="text-sm">→ <strong>Marco</strong> : Feature ideas (user feedback)</p>
                <p className="text-sm">→ <strong>Rémi</strong> : Repurpose docs → blog/social</p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500">Temps gagné : 15h/semaine</p>
                  <p className="text-xs text-gray-500">Coût : €60/mois</p>
                </div>
              </div>
            </div>

            {/* Creator */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-2xl font-bold mb-4">Content Creator</h3>
              <div className="space-y-3 text-gray-300">
                <p className="text-sm font-semibold text-primary">Agents utilisés :</p>
                <p className="text-sm">→ <strong>Theo</strong> : Trending topics (3x/jour)</p>
                <p className="text-sm">→ <strong>Kelly</strong> : Thread/video ideas</p>
                <p className="text-sm">→ <strong>Rémi</strong> : Repurpose video → thread/carousel</p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500">Temps gagné : 10h/semaine</p>
                  <p className="text-xs text-gray-500">Coût : €50/mois</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-400">
              Templates inclus pour les 5 agents. Tu adaptes à ton use case en 30 min.
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Tu as QUOI Exactement ?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Pas de &quot;formation théorique&quot;. Des fichiers. Du code. Des systèmes.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Fichiers */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-primary">📁 Fichiers</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>→ 6 dossiers agents (Theo/Kelly/Nina/Marco/Rémi/Xavier)</p>
                <p>→ Scripts Docker Compose (deploy 1 commande)</p>
                <p>→ SOUL.md templates (instructions + memory)</p>
                <p>→ Cron configs (scheduling auto)</p>
                <p>→ Monitoring dashboard (logs + metrics)</p>
                <p className="text-xs text-gray-500 pt-2">GitHub repo privé + zip download</p>
              </div>
            </div>

            {/* Compétences */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-primary">🧠 Compétences</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>→ Setup agent en 30 min (Module 1+2)</p>
                <p>→ Debug context loss (Module 2 secret)</p>
                <p>→ Deploy VPS €5/mois (Module 5)</p>
                <p>→ Cost optimization (Module 4 calculateurs)</p>
                <p>→ Multi-agent orchestration (Module 3)</p>
                <p className="text-xs text-gray-500 pt-2">5 modules vidéo (3h total)</p>
              </div>
            </div>

            {/* Systèmes */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-primary">⚙️ Systèmes</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>→ Monitoring dashboard (logs + health checks)</p>
                <p>→ Auto-restart on crash (systemd + Docker)</p>
                <p>→ Cost tracking (API usage daily)</p>
                <p>→ Context rotation (évite token explosion)</p>
                <p>→ Error alerting (Telegram/Discord)</p>
                <p className="text-xs text-gray-500 pt-2">Production-tested 6 mois</p>
              </div>
            </div>

            {/* Accès */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-primary">🔑 Accès</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>→ Discord privé à vie (&lt;24h response)</p>
                <p>→ Updates gratuits (nouveaux modules)</p>
                <p>→ Templates community (use cases partagés)</p>
                <p>→ Early access nouveaux agents</p>
                <p>→ GitHub repo + issues prioritaires</p>
                <p className="text-xs text-gray-500 pt-2">Lifetime access • Zero recurring fees</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-primary/10 border border-primary/30 rounded-xl">
            <p className="text-center text-lg">
              <strong className="text-primary">Résumé :</strong> Tu copies les templates. Tu adaptes en 30 min. Tu ship en prod.
            </p>
            <p className="text-center text-sm text-gray-400 mt-2">
              Pas de &quot;cours théorique 40h&quot;. Du code qui marche.
            </p>
          </div>
        </div>
      </section>

      {/* La Solution */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Ce Que Tu Apprends
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Pas de théorie. Les systèmes exacts qui font tourner 5 agents 24/7.
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
              <h3 className="text-2xl font-bold mb-4 text-primary">5 Agents Production-Ready</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-bold">🔍 Theo (Research)</p>
                  <p className="text-sm text-gray-500">3 sweeps/jour • €28/mois • 99.2% uptime</p>
                </div>
                <div>
                  <p className="font-bold">✍️ Kelly (Content)</p>
                  <p className="text-sm text-gray-500">5 ideas/jour • €22/mois • 82% utilisables direct</p>
                </div>
                <div>
                  <p className="font-bold">📧 Nina (Email)</p>
                  <p className="text-sm text-gray-500">Template-based • €8/mois • Cold outreach</p>
                </div>
                <div>
                  <p className="font-bold">💡 Marco (Features)</p>
                  <p className="text-sm text-gray-500">User feedback → ideas • €7/mois</p>
                </div>
                <div>
                  <p className="font-bold">🔄 Rémi (Repurpose)</p>
                  <p className="text-sm text-gray-500">Video → thread/carousel • €8/mois</p>
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

      {/* About */}
      <section className="px-4 py-16 bg-dark/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Qui je suis</h2>
          
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              Adrien. Builder indépendant.
            </p>
            <p>
              J&apos;ai fait <strong className="text-red-400">toutes</strong> les erreurs : $2,347 en API calls perdus (factures à l&apos;appui), 3 mois à patcher des tutos incomplets, agents qui fail en prod.
            </p>
            <p>
              Maintenant : 5 agents (Theo, Kelly, Nina, Marco, Rémi) qui tournent 24/7 depuis 6 mois. €73/mois total. 18h/semaine gagnées.
            </p>
            <p className="text-primary font-semibold">
              Cette formation = ce que j&apos;aurais voulu avoir au début.
            </p>
            <p className="text-sm text-gray-500">
              Pas de CV impressionnant. Juste des systèmes qui marchent.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-20 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Prix</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Founding Member */}
            <div className="bg-gray-900/50 border-2 border-gray-700 rounded-xl p-6 opacity-50">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 mb-2">FOUNDING MEMBER</div>
                <div className="text-5xl font-bold text-gray-600 mb-2">€99</div>
                <div className="text-sm text-red-400 font-semibold">SOLD OUT (10/10)</div>
              </div>
              <div className="space-y-2 text-sm text-gray-500">
                <p>✓ 5 modules vidéo (3h)</p>
                <p>✓ 5 templates agents</p>
                <p>✓ Playbooks PDF</p>
                <p>✓ Discord à vie</p>
                <p>✓ Badge Founding Member</p>
              </div>
            </div>

            {/* Early Bird */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary rounded-xl p-6 transform scale-105 shadow-xl shadow-primary/20">
              <div className="text-center mb-6">
                <div className="text-sm text-primary mb-2 font-bold">EARLY BIRD</div>
                <div className="text-6xl font-bold text-primary mb-2">€299</div>
                <div className="text-gray-400 line-through text-lg">€999</div>
                <div className="text-sm text-green-400 font-semibold mt-2">12 places restantes (78/90)</div>
              </div>
              <div className="space-y-2 text-sm text-gray-300 mb-6">
                <p>✓ 5 modules vidéo (3h)</p>
                <p>✓ 5 templates agents (code complet)</p>
                <p>✓ Playbooks PDF</p>
                <p>✓ Discord privé à vie</p>
                <p>✓ Mistral M2.5 self-hosting guide</p>
                <p>✓ Mises à jour gratuites</p>
              </div>
              <a href="#waitlist" className="block w-full px-6 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold shadow-xl transform hover:scale-105 transition-all rounded-lg text-center">
                Je prends ma place →
              </a>
            </div>

            {/* Premium */}
            <div className="bg-gray-900/50 border-2 border-gray-700 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 mb-2">PREMIUM</div>
                <div className="text-5xl font-bold text-white mb-2">€999</div>
                <div className="text-sm text-gray-400">Après Early Bird</div>
              </div>
              <div className="space-y-2 text-sm text-gray-300 mb-6">
                <p>✓ Tout Early Bird</p>
                <p>✓ 1h call privé 1-on-1</p>
                <p>✓ Code review ton agent</p>
                <p>✓ Setup assistance (VPS/Docker)</p>
                <p>✓ Priority support (6 mois)</p>
              </div>
              <div className="text-center text-sm text-gray-500 py-3">
                Disponible après launch
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="text-center mb-6 p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-lg font-bold text-green-400 mb-2">Garantie 30 Jours</p>
              <p className="text-sm text-gray-400">
                Tu regardes les 2 premiers modules. Pas convaincu ? Simple email = remboursement intégral.
              </p>
              <p className="text-xs text-green-300 mt-2">
                Même si tu as tout regardé. Zero questions. Zero bullshit.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Launch : 15 mars 2026</p>
            <p>Early bird access : 7-10 jours avant</p>
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
                <p>Mes 5 agents : €73/mois (factures réelles à l&apos;appui)</p>
                <p className="mt-2">Theo €28 + Kelly €22 + Nina €8 + Marco €7 + Rémi €8</p>
                <p className="mt-2 text-sm">Module 4 te donne calculateurs Excel pour estimer TON cas exact.</p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Garantie ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400">
                <p>30 jours. Pas convaincu après Module 2 ? Simple email = remboursement intégral.</p>
                <p className="mt-2 text-primary font-medium">Zero questions. Même si tu as tout regardé. Zero bullshit.</p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Pourquoi pas YouTube gratuit ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400">
                <p>Tu peux. Voilà ce qui va se passer :</p>
                <p className="mt-2">3-6 mois à patcher des tutos incomplets. $500-2k en erreurs API. Rebuild from scratch.</p>
                <p className="mt-3">Ou : €299 → système qui marche → ship en 7-10 jours.</p>
                <p className="mt-3 text-sm text-gray-500">Ton call. Mais 6 mois à €50/h = €12k de temps perdu vs €299.</p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                C&apos;est différent d&apos;un cours Udemy comment ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400">
                <p>Udemy : théorie + exemple toy project qui marche jamais en prod.</p>
                <p className="mt-2">Ici : templates testés 6 mois en prod 24/7. Tu copies → adaptes → ship.</p>
                <p className="mt-3 text-sm text-primary">Code complet + monitoring + deployment + support à vie.</p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                Support Discord : c&apos;est toi seul ou une équipe ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400">
                <p>Honnêteté : c&apos;est moi seul au début.</p>
                <p className="mt-2">Response time : &lt;24h en semaine. Weekend parfois plus long.</p>
                <p className="mt-3 text-sm">Mais : accès à vie + community (early adopters s&apos;entraident).</p>
                <p className="mt-2 text-xs text-gray-500">Si ça scale : j&apos;embauche. Promis pas un chatbot générique.</p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                €999 Premium : c&apos;est pas un peu foutage de gueule ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400">
                <p>Breakdown valeur Premium :</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>→ 1h call privé : €200 (mon taux freelance)</li>
                  <li>→ Code review custom : €300 (2-3h audit)</li>
                  <li>→ Setup assistance : €200 (VPS/Docker/debug)</li>
                  <li>→ Priority support 6 mois : €299 (valeur estimée)</li>
                </ul>
                <p className="mt-3 text-sm text-primary">Total : €999 pour €999 de valeur.</p>
                <p className="mt-2 text-xs text-gray-500">Early Bird €299 = meilleur deal. Premium pour ceux qui veulent assistance hands-on.</p>
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 group">
              <summary className="font-bold cursor-pointer text-lg flex justify-between items-center">
                10 places Founding Member : scarcity fake ?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-400">
                <p>Non. Raison réelle : je veux 10 early testers pour feedback.</p>
                <p className="mt-2">Badge Founding Member = remerciement (visible Discord + mention crédits formation).</p>
                <p className="mt-3 text-sm text-gray-500">90 Early Bird après : scaling progressif pour gérer support quality.</p>
                <p className="mt-2 text-xs text-primary">Sold out en 48h → preuve demand réelle, pas fake urgency.</p>
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
            Après : €999.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
            Tu veux les templates qui font tourner 5 agents 24/7 depuis 6 mois, ou tu veux continuer à patcher des tutos YouTube incomplets ?
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
                className="px-10 py-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 whitespace-nowrap rounded-lg"
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
              <p className="font-bold">Erreur. Réessaye ou contact Discord.</p>
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
          <p className="mt-2">
            <a href="https://github.com/adrienlaine" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
            {" • "}
            <a href="https://discord.gg/pilowai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
