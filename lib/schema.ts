// Schema.org Structured Data
// Formation AI Orchestrator Landing Page

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Formation AI Orchestrator - Orchestration Multi-LLM De Zéro à Production",
  "description": "Formation pratique FR avec templates production-ready. 5 agents IA testés 6 mois en production (Theo, Kelly, Nina, Marco, Rémi). Du chat au système 24/7. Templates complets + monitoring + deployment + support à vie.",
  "provider": {
    "@type": "Person",
    "name": "Adrien Laine",
    "url": "https://github.com/adrienlaine"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Early Bird",
      "price": "299",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-02-23",
      "validThrough": "2026-03-08",
      "description": "90 places disponibles. Accès 7-10 jours avant launch. Modules 1-9 + 5 templates agents + playbooks PDF + Discord à vie + Mistral M2.5 self-hosting guide."
    },
    {
      "@type": "Offer",
      "name": "Premium",
      "price": "999",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/PreOrder",
      "validFrom": "2026-03-15",
      "description": "Tout Early Bird + 1h call privé + code review + setup assistance + priority support 6 mois."
    }
  ],
  "educationalLevel": "Intermediate",
  "inLanguage": "fr-FR",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Online",
    "courseWorkload": "PT3H", // 3 hours of video content
    "instructor": {
      "@type": "Person",
      "name": "Adrien Laine",
      "description": "Builder indépendant. 5 agents en production 24/7 depuis 6 mois. $2,347 en erreurs API (learned the hard way)."
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "13",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Thomas"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Waiting for Module 2 but already saved €50 on API costs with the context management cheat sheet."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Marie"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Deployed Theo in 2h. First real production agent that doesn't break after 10 messages."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Lucas"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "J'ai fait les mêmes erreurs (€1.2k API perdus). Cette formation m'aurait sauvé 2 mois de debug."
    }
  ],
  "teaches": [
    "Context Management (éviter token explosion)",
    "Multi-Agent Orchestration",
    "Cost Control & ROI",
    "Production Deployment (VPS + Docker)",
    "Monitoring & Error Handling",
    "Mistral M2.5 Self-Hosting"
  ],
  "syllabusSections": [
    {
      "@type": "Syllabus",
      "name": "Module 1: Foundations",
      "description": "Setup agent en 30 min"
    },
    {
      "@type": "Syllabus",
      "name": "Module 2: Context Management",
      "description": "Le secret pour éviter context loss"
    },
    {
      "@type": "Syllabus",
      "name": "Module 3: Multi-Agent Architecture",
      "description": "Orchestration de 5+ agents"
    },
    {
      "@type": "Syllabus",
      "name": "Module 4: Cost Control & ROI",
      "description": "Calculateurs Excel pour ton cas exact"
    },
    {
      "@type": "Syllabus",
      "name": "Module 5: Production Deployment",
      "description": "VPS + Docker + monitoring"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Je dois savoir coder ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si tu sais modifier du JSON et des fichiers .md, tu peux suivre. Si tu codes (Python/JS), tu iras juste plus vite."
      }
    },
    {
      "@type": "Question",
      "name": "Ça coûte combien après en API ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mes 5 agents : €73/mois (factures réelles à l'appui). Theo €28 + Kelly €22 + Nina €8 + Marco €7 + Rémi €8. Module 4 te donne calculateurs Excel pour estimer TON cas exact."
      }
    },
    {
      "@type": "Question",
      "name": "Garantie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "30 jours. Pas convaincu après Module 2 ? Simple email = remboursement intégral. Zero questions. Même si tu as tout regardé. Zero bullshit."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi pas YouTube gratuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tu peux. Voilà ce qui va se passer : 3-6 mois à patcher des tutos incomplets. $500-2k en erreurs API. Rebuild from scratch. Ou : €299 → système qui marche → ship en 7-10 jours. Ton call. Mais 6 mois à €50/h = €12k de temps perdu vs €299."
      }
    },
    {
      "@type": "Question",
      "name": "C'est différent d'un cours Udemy comment ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Udemy : théorie + exemple toy project qui marche jamais en prod. Ici : templates testés 6 mois en prod 24/7. Tu copies → adaptes → ship. Code complet + monitoring + deployment + support à vie."
      }
    },
    {
      "@type": "Question",
      "name": "Support Discord : c'est toi seul ou une équipe ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Honnêteté : c'est moi seul au début. Response time : <24h en semaine. Weekend parfois plus long. Mais : accès à vie + community (early adopters s'entraident). Si ça scale : j'embauche. Promis pas un chatbot générique."
      }
    },
    {
      "@type": "Question",
      "name": "€999 Premium : c'est pas un peu foutage de gueule ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Breakdown valeur Premium : 1h call privé (€200), code review custom (€300), setup assistance (€200), priority support 6 mois (€299). Total : €999 pour €999 de valeur. Early Bird €299 = meilleur deal. Premium pour ceux qui veulent assistance hands-on."
      }
    },
    {
      "@type": "Question",
      "name": "10 places Founding Member : scarcity fake ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Raison réelle : je veux 10 early testers pour feedback. Badge Founding Member = remerciement (visible Discord + mention crédits formation). 90 Early Bird après : scaling progressif pour gérer support quality. Sold out en 48h → preuve demand réelle, pas fake urgency."
      }
    }
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pilow AI",
  "url": "https://ai-orchestrator-landing.vercel.app",
  "logo": "https://ai-orchestrator-landing.vercel.app/logo.png",
  "sameAs": [
    "https://github.com/adrienlaine",
    "https://twitter.com/Pillaw_AI",
    "https://discord.gg/pilowai"
  ],
  "founder": {
    "@type": "Person",
    "name": "Adrien Laine"
  }
};

// Combined schema for injection
export const allSchemas = [courseSchema, faqSchema, organizationSchema];
