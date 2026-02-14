'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Veuillez entrer une adresse email');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer-newsletter' }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'inscription');
      
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'inscription');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Trust Badges Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* RGPD Compliant */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="text-3xl">✅</div>
              <div>
                <p className="font-semibold text-white text-sm">RGPD Compliant</p>
                <p className="text-xs text-gray-500">Conforme aux normes UE</p>
              </div>
            </div>

            {/* Sécurisé */}
            <div className="flex items-center justify-center gap-3">
              <div className="text-3xl">🔒</div>
              <div>
                <p className="font-semibold text-white text-sm">Sécurisé</p>
                <p className="text-xs text-gray-500">Chiffrement SSL · Données UE</p>
              </div>
            </div>

            {/* Support 24h */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <div className="text-3xl">📞</div>
              <div>
                <p className="font-semibold text-white text-sm">Support 24h Français</p>
                <p className="text-xs text-gray-500">Réponse en moins de 24h</p>
              </div>
            </div>
          </div>

          {/* Additional Trust Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-800">
            <div className="text-center">
              <p className="text-green-400 font-bold text-lg">99.9%</p>
              <p className="text-xs text-gray-500">Uptime garantie</p>
            </div>
            <div className="text-center">
              <p className="text-green-400 font-bold text-lg">0</p>
              <p className="text-xs text-gray-500">Data breaches</p>
            </div>
            <div className="text-center">
              <p className="text-green-400 font-bold text-lg">EU</p>
              <p className="text-xs text-gray-500">Data storage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Formation
            </div>
            <p className="text-gray-400 text-sm">
              Automatisez vos processus métier avec l'IA. Récupérez 8+ heures par semaine.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@pillow.ai"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produit</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://www.g2.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  G2 Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/cgv" className="text-gray-400 hover:text-white transition-colors text-sm">
                  CGV
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/trust" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold text-green-400 hover:text-green-300">
                  🔒 Security & Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8">
          <div className="max-w-md mx-auto mb-8">
            <h4 className="text-white font-semibold mb-3 text-center">
              Restez informé
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow text-sm"
              >
                S'abonner
              </button>
              {subscribed && (
                <p className="text-green-400 text-sm text-center">
                  ✓ Inscription confirmée!
                </p>
              )}
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Formation AI. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-xs">
              Créé avec ❤️ pour les fondateurs français
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
