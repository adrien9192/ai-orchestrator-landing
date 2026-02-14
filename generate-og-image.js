const sharp = require('sharp');
const fs = require('fs');

// Create SVG for the OG image
const ogSvg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="circle1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:rgba(249, 115, 22, 0.15);stop-opacity:1" />
      <stop offset="70%" style="stop-color:rgba(249, 115, 22, 0);stop-opacity:0" />
    </radialGradient>
    <radialGradient id="circle2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:rgba(249, 115, 22, 0.15);stop-opacity:1" />
      <stop offset="70%" style="stop-color:rgba(249, 115, 22, 0);stop-opacity:0" />
    </radialGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  
  <!-- Grid pattern -->
  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(249, 115, 22, 0.03)" stroke-width="1"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#grid)"/>
  
  <!-- Accent circles -->
  <circle cx="1100" cy="100" r="300" fill="url(#circle1)"/>
  <circle cx="100" cy="530" r="200" fill="url(#circle2)"/>
  
  <!-- Logo icon (simplified network) -->
  <g transform="translate(460, 100)">
    <circle cx="20" cy="20" r="5" fill="#f97316"/>
    <circle cx="8" cy="12" r="3" fill="#f97316" opacity="0.7"/>
    <circle cx="8" cy="28" r="3" fill="#f97316" opacity="0.7"/>
    <circle cx="32" cy="12" r="3" fill="#f97316" opacity="0.7"/>
    <circle cx="32" cy="28" r="3" fill="#f97316" opacity="0.7"/>
    <line x1="20" y1="20" x2="8" y2="12" stroke="#f97316" stroke-width="1.5" opacity="0.5"/>
    <line x1="20" y1="20" x2="8" y2="28" stroke="#f97316" stroke-width="1.5" opacity="0.5"/>
    <line x1="20" y1="20" x2="32" y2="12" stroke="#f97316" stroke-width="1.5" opacity="0.5"/>
    <line x1="20" y1="20" x2="32" y2="28" stroke="#f97316" stroke-width="1.5" opacity="0.5"/>
    <text x="50" y="26" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#f97316">Formation AI Orchestrator</text>
  </g>
  
  <!-- Main headline -->
  <text x="600" y="310" text-anchor="middle" font-family="Arial, sans-serif" font-size="84" font-weight="900" fill="#ffffff" letter-spacing="-2">
    Récupérez 8+ heures
  </text>
  <text x="600" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="84" font-weight="900" fill="#ffffff" letter-spacing="-2">
    par semaine
  </text>
  
  <!-- Subtext -->
  <text x="600" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="500" fill="#f97316" letter-spacing="-1">
    sans coder
  </text>
</svg>
`;

// Generate PNG from SVG
sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .png()
  .toFile('/data/.openclaw/workspace/projects/ai-orchestrator-landing/public/og-image.png')
  .then(() => {
    console.log('✅ OG image created: /public/og-image.png');
  })
  .catch(err => {
    console.error('❌ Error creating OG image:', err);
    process.exit(1);
  });
