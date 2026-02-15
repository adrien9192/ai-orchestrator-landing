'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * VideoTestimonial - Sophie's Case Study Video (Canvas Animation)
 * 75 seconds of animated storytelling + metrics
 * No Remotion dependency — pure Framer Motion
 */

export default function VideoTestimonial() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-play animation progression (75 seconds = 75000ms)
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return prev + (1000 / 75000) * 100; // 75 second total duration
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Scene progression (0-100%)
  const getScene = (start: number, end: number) => {
    if (progress < start) return 0;
    if (progress > end) return 1;
    return (progress - start) / (end - start);
  };

  // Scene timings (75 seconds = 8 scenes)
  const scene1 = getScene(0, 10);      // Intro: Sophie's problem (0-7.5s)
  const scene2 = getScene(10, 20);    // Setup: Copy-paste 7h/week (7.5-15s)
  const scene3 = getScene(20, 30);    // Discovery: Formation (15-22.5s)
  const scene4 = getScene(30, 42);    // Implementation: "15 min setup" (22.5-31.5s)
  const scene5 = getScene(42, 54);    // Results: Metrics animation (31.5-40.5s)
  const scene6 = getScene(54, 64);    // Growth: Revenue impact (40.5-48s)
  const scene7 = getScene(64, 72);    // Testimonial quote (48-54s)
  const scene8 = getScene(72, 100);   // CTA & closing (54-75s)

  const togglePlay = () => {
    if (progress >= 100) setProgress(0);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 rounded-lg overflow-hidden shadow-2xl border-2 border-gray-700 relative group">
      
      {/* SCENE 1: INTRO + PROBLEM STATEMENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scene1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center text-white px-8">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ 
              y: scene1 > 0 ? 0 : 30, 
              opacity: scene1 > 0.2 ? 1 : 0 
            }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Sophie L.
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ 
              y: scene1 > 0.4 ? 0 : 30, 
              opacity: scene1 > 0.4 ? 1 : 0 
            }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-gray-300"
          >
            📦 E-commerce multi-canal · Paris
          </motion.p>
        </div>
      </motion.div>

      {/* SCENE 2: THE PROBLEM */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scene2 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white px-8"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: scene2 > 0.3 ? 1 : 0.8, 
            opacity: scene2 > 0.3 ? 1 : 0 
          }}
          className="text-center max-w-2xl"
        >
          <p className="text-3xl font-bold mb-6 text-orange-400">
            "Je passais 7 heures par semaine à synchroniser les stocks"
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4">
              <p className="text-gray-300 text-sm">Shopify → WooCommerce</p>
              <p className="text-2xl font-bold mt-2">Manuellement</p>
            </div>
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4">
              <p className="text-gray-300 text-sm">Temps perdu/semaine</p>
              <p className="text-2xl font-bold mt-2">~7 heures</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* SCENE 3: DISCOVERY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scene3 }}
        className="absolute inset-0 flex items-center justify-center text-white px-8"
      >
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ 
            y: scene3 > 0.3 ? 0 : 60, 
            opacity: scene3 > 0.3 ? 1 : 0 
          }}
          className="text-center"
        >
          <div className="text-6xl mb-4">⚡</div>
          <h3 className="text-4xl font-bold mb-4">Découverte: Formation</h3>
          <p className="text-xl text-gray-300">
            Un outil pour automatiser les synchronisations.
          </p>
        </motion.div>
      </motion.div>

      {/* SCENE 4: SETUP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scene4 }}
        className="absolute inset-0 flex items-center justify-center text-white px-8"
      >
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: scene4 > 0.2 ? 1 : 0 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold text-center mb-8">
              ✓ Setup en 15 minutes
            </h3>
            <div className="space-y-4">
              {['Connecter Shopify', 'Connecter WooCommerce', 'Activer sync', 'Vérifier les données'].map(
                (step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{
                      x: scene4 > 0.2 + idx * 0.15 ? 0 : -50,
                      opacity: scene4 > 0.2 + idx * 0.15 ? 1 : 0,
                    }}
                    className="flex items-center gap-3 bg-green-500/20 border border-green-500 rounded-lg p-4"
                  >
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">{step}</span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SCENE 5: RESULTS - METRICS ANIMATION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scene5 }}
        className="absolute inset-0 flex items-center justify-center text-white px-8"
      >
        <div className="max-w-3xl w-full">
          <h3 className="text-4xl font-bold text-center mb-12">Les résultats</h3>
          <div className="grid grid-cols-3 gap-6">
            {/* Metric 1: Hours saved */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: scene5 > 0.2 ? 1 : 0 }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-center"
            >
              <p className="text-gray-100 text-sm mb-2">Heures économisées/semaine</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: scene5 > 0.4 ? 1 : 0.3 }}
                className="text-5xl font-bold"
              >
                8h
              </motion.p>
            </motion.div>

            {/* Metric 2: Revenue increase */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: scene5 > 0.4 ? 1 : 0 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-center"
            >
              <p className="text-gray-100 text-sm mb-2">Augmentation chiffre d'affaires</p>
              <p className="text-5xl font-bold">+30%</p>
            </motion.div>

            {/* Metric 3: Errors */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: scene5 > 0.6 ? 1 : 0 }}
              className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-6 text-center"
            >
              <p className="text-gray-100 text-sm mb-2">Erreurs manuelles</p>
              <p className="text-5xl font-bold">0%</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* SCENE 6: GROWTH & IMPACT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scene6 }}
        className="absolute inset-0 flex items-center justify-center text-white px-8"
      >
        <div className="text-center max-w-2xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ 
              y: scene6 > 0.3 ? 0 : 30, 
              opacity: scene6 > 0.3 ? 1 : 0 
            }}
          >
            <h3 className="text-4xl font-bold mb-6">
              "Maintenant, je me concentre sur ma croissance"
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Sans Formation, je perdrais 30+ heures par mois en tâches manuelles.
            </p>
            <div className="text-5xl">📈 +€8,400 de CA supplémentaire en 3 mois</div>
          </motion.div>
        </div>
      </motion.div>

      {/* SCENE 7: TESTIMONIAL QUOTE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scene7 }}
        className="absolute inset-0 flex items-center justify-center text-white px-8"
      >
        <motion.blockquote
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: scene7 > 0.3 ? 1 : 0.9, 
            opacity: scene7 > 0.3 ? 1 : 0 
          }}
          className="text-center max-w-2xl border-l-4 border-orange-500 pl-6"
        >
          <p className="text-3xl font-bold mb-6 italic">
            "C'est pas compliqué, ça marche tout de suite. Et j'ai récupéré 8 heures par semaine que je peux utiliser pour vraiment développer mon business."
          </p>
          <p className="text-xl text-gray-300">— Sophie L., E-commerce · Paris</p>
          <p className="text-sm text-gray-400 mt-2">4.9/5 ⭐ · Utilisatrice depuis 6 mois</p>
        </motion.blockquote>
      </motion.div>

      {/* SCENE 8: CALL-TO-ACTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scene8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white px-8"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ 
            y: scene8 > 0.2 ? 0 : 30, 
            opacity: scene8 > 0.2 ? 1 : 0 
          }}
          className="text-center max-w-2xl"
        >
          <h3 className="text-4xl font-bold mb-4">Prêt à récupérer votre temps ?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Rejoin les 1,247 fondateurs qui utilisent Formation
          </p>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: scene8 > 0.5 ? 1 : 0.9 }}
            className="inline-block bg-orange-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition cursor-pointer shadow-lg"
          >
            Essai gratuit 48h
          </motion.div>
          <p className="text-sm text-gray-400 mt-6">
            ✓ Aucune carte bancaire · ✓ 15 min setup · ✓ Support 24h en français
          </p>
        </motion.div>
      </motion.div>

      {/* PLAYBACK CONTROLS */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={togglePlay}
          className="text-white text-2xl hover:text-orange-400 transition"
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        
        {/* Progress bar */}
        <div className="flex-1 mx-4 bg-gray-700 rounded-full h-1 cursor-pointer" onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const newProgress = ((e.clientX - rect.left) / rect.width) * 100;
          setProgress(newProgress);
        }}>
          <div 
            className="bg-orange-500 h-full rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Duration */}
        <span className="text-white text-sm ml-2 whitespace-nowrap">
          {Math.floor(progress / 100 * 75)}s / 75s
        </span>
      </div>

      {/* Volume/Mute toggle (optional) */}
      <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition">
        <span className="text-xs bg-black/50 px-2 py-1 rounded">
          Testimonial animée
        </span>
      </div>
    </div>
  );
}
