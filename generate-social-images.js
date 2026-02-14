const sharp = require('sharp');

// Create contact page OG image
const contactSvg = `
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
  </defs>
  
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  <circle cx="1100" cy="100" r="300" fill="url(#circle1)"/>
  
  <text x="600" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="900" fill="#ffffff">
    Parlons de ton
  </text>
  <text x="600" y="370" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="900" fill="#ffffff">
    automatisation
  </text>
  
  <text x="600" y="480" text-anchor="middle" font-family="Arial, sans-serif" font-size="44" font-weight="500" fill="#f97316">
    Formation AI
  </text>
</svg>
`;

// Create blog OG template
const blogSvg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="circle2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:rgba(249, 115, 22, 0.15);stop-opacity:1" />
      <stop offset="70%" style="stop-color:rgba(249, 115, 22, 0);stop-opacity:0" />
    </radialGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#bgGradient2)"/>
  <circle cx="100" cy="530" r="200" fill="url(#circle2)"/>
  
  <rect x="50" y="40" width="1100" height="80" fill="rgba(249, 115, 22, 0.1)" rx="8"/>
  <text x="100" y="90" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="#f97316">ARTICLE</text>
  
  <text x="100" y="200" font-family="Arial, sans-serif" font-size="64" font-weight="900" fill="#ffffff">
    Article Title Goes Here
  </text>
  <text x="100" y="260" font-family="Arial, sans-serif" font-size="28" font-weight="400" fill="#d1d5db">
    Learn best practices for AI automation
  </text>
  
  <line x1="100" y1="310" x2="1100" y2="310" stroke="rgba(249, 115, 22, 0.2)" stroke-width="1"/>
  
  <text x="100" y="380" font-family="Arial, sans-serif" font-size="18" font-weight="500" fill="#f97316">Formation AI Orchestrator</text>
  <text x="100" y="420" font-family="Arial, sans-serif" font-size="18" font-weight="400" fill="#9ca3af">Guides, tips and strategies for AI automation</text>
</svg>
`;

// Create resources page OG image
const resourcesSvg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="circle3" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:rgba(249, 115, 22, 0.15);stop-opacity:1" />
      <stop offset="70%" style="stop-color:rgba(249, 115, 22, 0);stop-opacity:0" />
    </radialGradient>
    <radialGradient id="circle4" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:rgba(249, 115, 22, 0.15);stop-opacity:1" />
      <stop offset="70%" style="stop-color:rgba(249, 115, 22, 0);stop-opacity:0" />
    </radialGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#bgGradient3)"/>
  <circle cx="1100" cy="100" r="300" fill="url(#circle3)"/>
  <circle cx="100" cy="530" r="200" fill="url(#circle4)"/>
  
  <text x="600" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="76" font-weight="900" fill="#f97316">
    Ressources
  </text>
  <text x="600" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="76" font-weight="900" fill="#ffffff">
    Gratuites
  </text>
  
  <text x="600" y="440" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="400" fill="#d1d5db">
    Templates - Guides - Best Practices
  </text>
  
  <text x="600" y="530" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="500" fill="#f97316">
    Formation AI Orchestrator
  </text>
</svg>
`;

Promise.all([
  sharp(Buffer.from(contactSvg))
    .resize(1200, 630)
    .png()
    .toFile('/data/.openclaw/workspace/projects/ai-orchestrator-landing/public/og-contact.png'),
  
  sharp(Buffer.from(blogSvg))
    .resize(1200, 630)
    .png()
    .toFile('/data/.openclaw/workspace/projects/ai-orchestrator-landing/public/og-blog.png'),
  
  sharp(Buffer.from(resourcesSvg))
    .resize(1200, 630)
    .png()
    .toFile('/data/.openclaw/workspace/projects/ai-orchestrator-landing/public/og-resources.png')
])
.then(() => {
  console.log('✅ All social preview images created:');
  console.log('  - /public/og-contact.png');
  console.log('  - /public/og-blog.png');
  console.log('  - /public/og-resources.png');
})
.catch(err => {
  console.error('❌ Error creating social images:', err);
  process.exit(1);
});
