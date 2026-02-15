/**
 * Formation AI Case Study Video — Sophie L.
 * Production-ready Remotion component
 * 
 * Duration: 75s (2250 frames @ 30fps)
 * Resolution: 1920x1080 (16:9)
 * 
 * Usage:
 * 1. Install dependencies: npm install remotion @remotion/google-fonts
 * 2. Add to src/Root.tsx composition list
 * 3. Preview: npm run dev
 * 4. Render: npx remotion render TestimonialVideo public/output.mp4
 */

import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

// ============================================================================
// TYPES
// ============================================================================

interface MetricCardProps {
  icon: string;
  value: string;
  label: string;
  delay: number;
}

interface PlatformIconProps {
  name: string;
  delay: number;
}

// ============================================================================
// CONSTANTS
// ============================================================================

const COLORS = {
  primary: '#6366F1',
  secondary: '#8B5CF6',
  accent: '#EC4899',
  success: '#10B981',
  error: '#EF4444',
  background: '#0F172A',
  text: '#F1F5F9',
  highlight: '#FCD34D',
};

const FONTS = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
  mono: '"JetBrains Mono", monospace',
};

// ============================================================================
// SCENE 1: HOOK
// ============================================================================

const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title spring animation (0-30 frames)
  const titleScale = spring({
    frame,
    fps,
    config: { stiffness: 120, damping: 15 },
    durationInFrames: 30,
  });

  // Subtitle fade + slide (20-50 frames)
  const subtitleOpacity = interpolate(frame, [20, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const subtitleY = interpolate(frame, [20, 50], [30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Number highlight pulse (40-90 frames)
  const numberGlow = interpolate(
    frame,
    [40, 50, 60, 70, 80, 90],
    [0, 1, 0.5, 1, 0.5, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 100,
      }}
    >
      {/* Main Title */}
      <div
        style={{
          transform: `scale(${titleScale})`,
          textAlign: 'center',
          color: COLORS.text,
        }}
      >
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontSize: 72,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Comment Sophie a économisé
        </h1>
        <h2
          style={{
            fontFamily: FONTS.heading,
            fontSize: 96,
            fontWeight: 800,
            margin: '20px 0',
            color: COLORS.primary,
            textShadow: `0 0 ${40 * numberGlow}px ${COLORS.primary}`,
          }}
        >
          8 heures par semaine
        </h2>
        <h3
          style={{
            fontFamily: FONTS.heading,
            fontSize: 64,
            fontWeight: 600,
            margin: 0,
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          et augmenté son CA de{' '}
          <span
            style={{
              color: COLORS.success,
              textShadow: `0 0 ${30 * numberGlow}px ${COLORS.success}`,
            }}
          >
            +30%
          </span>
        </h3>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 2: PROBLEM SETUP
// ============================================================================

const PlatformIcon: React.FC<PlatformIconProps> = ({ name, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({
    frame: frame - delay,
    fps,
    config: { damping: 20, stiffness: 100 },
    durationInFrames: 30,
  });

  const x = interpolate(slideIn, [0, 1], [name === 'Shopify' ? -200 : name === 'Amazon' ? 0 : 200, 0]);

  return (
    <div
      style={{
        transform: `translateX(${x}px)`,
        backgroundColor: '#1E293B',
        borderRadius: 20,
        padding: 40,
        margin: '0 20px',
        border: `3px solid ${COLORS.primary}`,
        width: 200,
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ fontSize: 48, fontWeight: 700, color: COLORS.text }}>
        {name}
      </span>
    </div>
  );
};

const SceneProblemSetup: React.FC = () => {
  const frame = useCurrentFrame();

  // Error symbols appear 180-220
  const errorOpacity = interpolate(frame - 90, [90, 110], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const errorShake = Math.sin(frame * 0.5) * (frame > 180 && frame < 220 ? 5 : 0);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 80 }}>
        <h2
          style={{
            fontFamily: FONTS.heading,
            fontSize: 56,
            color: COLORS.text,
            marginBottom: 40,
          }}
        >
          Synchronisation manuelle des stocks
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <PlatformIcon name="Shopify" delay={0} />
          <PlatformIcon name="Amazon" delay={10} />
          <PlatformIcon name="Etsy" delay={20} />
        </div>

        {/* Error overlay */}
        <div
          style={{
            opacity: errorOpacity,
            marginTop: 60,
            fontSize: 120,
            transform: `translateX(${errorShake}px)`,
          }}
        >
          ❌
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 3: TIME WASTE
// ============================================================================

const SceneTimeWaste: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Clock rotation
  const rotation = interpolate(frame, [0, 210], [0, 360], {
    extrapolateRight: 'extend',
  });

  // Counter animation (frames 20-100)
  const counterValue = Math.floor(
    interpolate(frame, [20, 100], [0, 8], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  // Counter bounce
  const counterScale = spring({
    frame: Math.max(0, frame - 20 - counterValue * 10),
    fps,
    config: { stiffness: 200, damping: 12 },
    durationInFrames: 10,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Clock Icon */}
      <div
        style={{
          fontSize: 200,
          marginBottom: 40,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        🕐
      </div>

      {/* Counter */}
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 140,
          fontWeight: 800,
          color: COLORS.error,
          transform: `scale(${counterScale})`,
          marginBottom: 20,
        }}
      >
        {counterValue} heures
      </div>

      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 48,
          color: COLORS.text,
          textAlign: 'center',
          maxWidth: 900,
        }}
      >
        Chaque semaine perdue en copier-coller
      </div>

      {/* Blinking cursor simulation */}
      {frame > 100 && (
        <div
          style={{
            marginTop: 60,
            fontSize: 36,
            color: COLORS.text,
            opacity: Math.floor(frame / 15) % 2,
          }}
        >
          Excel → WooCommerce → Shopify → Amazon... ▌
        </div>
      )}
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 4: SOLUTION REVEAL
// ============================================================================

const SceneSolutionReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo scale
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 100 },
    durationInFrames: 30,
  });

  // Icons sequential reveal
  const iconData = [
    { icon: '🔌', label: 'Connectez', delay: 50 },
    { icon: '⚙️', label: 'Configurez', delay: 100 },
    { icon: '🚀', label: 'Automatisez', delay: 150 },
  ];

  // Progress bar
  const progressWidth = interpolate(frame, [100, 200], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Logo */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          marginBottom: 80,
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontSize: 96,
            fontWeight: 800,
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
          }}
        >
          Formation AI
        </h1>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 40,
            color: COLORS.text,
            margin: '20px 0 0 0',
          }}
        >
          L'automatisation sans code
        </p>
      </div>

      {/* Icons */}
      <div style={{ display: 'flex', gap: 80, marginBottom: 60 }}>
        {iconData.map((item) => {
          const iconScale = spring({
            frame: Math.max(0, frame - item.delay),
            fps,
            config: { damping: 15, stiffness: 150 },
            durationInFrames: 20,
          });

          return (
            <div
              key={item.label}
              style={{
                transform: `scale(${iconScale})`,
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 100, marginBottom: 20 }}>{item.icon}</div>
              <div
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 32,
                  color: COLORS.text,
                }}
              >
                {item.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: 600,
          height: 12,
          backgroundColor: '#1E293B',
          borderRadius: 6,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progressWidth}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
            transition: 'width 0.3s ease',
          }}
        />
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 32,
          color: COLORS.text,
          marginTop: 20,
        }}
      >
        15 minutes de setup
      </div>
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 5: RESULTS — METRIC CARDS
// ============================================================================

const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Card slide in
  const slideX = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 20, stiffness: 100 },
    durationInFrames: 30,
  });

  const x = interpolate(slideX, [0, 1], [300, 0]);

  // Number odometer
  const numberReveal = interpolate(frame, [delay + 10, delay + 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Glow pulse
  const glowIntensity = Math.sin(frame * 0.1) * 0.5 + 0.5;

  return (
    <div
      style={{
        transform: `translateX(${x}px)`,
        background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
        borderRadius: 24,
        padding: '60px 80px',
        margin: '20px 0',
        minWidth: 500,
        textAlign: 'center',
        boxShadow: `0 0 ${60 * glowIntensity}px ${COLORS.primary}`,
      }}
    >
      <div style={{ fontSize: 80, marginBottom: 20 }}>{icon}</div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 72,
          fontWeight: 800,
          color: '#fff',
          opacity: numberReveal,
          marginBottom: 10,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 36,
          color: 'rgba(255,255,255,0.9)',
        }}
      >
        {label}
      </div>
    </div>
  );
};

const SceneResults: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MetricCard icon="⏱️" value="8 heures" label="économisées / semaine" delay={0} />
      <MetricCard icon="📈" value="+30% CA" label="de croissance" delay={100} />
      <MetricCard icon="✅" value="0 erreur" label="de synchronisation" delay={200} />
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 6: TESTIMONIAL QUOTE
// ============================================================================

const SceneTestimonial: React.FC = () => {
  const frame = useCurrentFrame();

  // Typewriter effect (0-160 frames for full quote)
  const fullQuote =
    'Je synchronisais mes stocks à la main. 7 heures par semaine perdues. Maintenant c\'est automatique.';
  const charsToShow = Math.floor(
    interpolate(frame, [0, 160], [0, fullQuote.length], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })
  );

  // Stars animation (frames 180-260)
  const stars = [0, 1, 2, 3, 4].map((i) => {
    const starScale = spring({
      frame: Math.max(0, frame - 180 - i * 16),
      fps: 30,
      config: { damping: 12, stiffness: 200 },
      durationInFrames: 15,
    });
    return starScale;
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 120,
      }}
    >
      <div
        style={{
          backgroundColor: '#1E293B',
          borderRadius: 24,
          padding: 80,
          maxWidth: 1200,
          border: `3px solid ${COLORS.primary}`,
        }}
      >
        {/* Quote text */}
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 48,
            color: COLORS.text,
            lineHeight: 1.6,
            fontStyle: 'italic',
            marginBottom: 40,
          }}
        >
          "{fullQuote.substring(0, charsToShow)}
          {charsToShow < fullQuote.length && (
            <span style={{ opacity: Math.floor(frame / 20) % 2 }}>▌</span>
          )}
          "
        </div>

        {/* Attribution */}
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: 36,
            fontWeight: 600,
            color: COLORS.primary,
            marginBottom: 20,
          }}
        >
          — Sophie L.
        </div>
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 28,
            color: 'rgba(241,245,249,0.7)',
            marginBottom: 30,
          }}
        >
          E-commerce · Paris
        </div>

        {/* Stars */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          {stars.map((scale, i) => (
            <span
              key={i}
              style={{
                fontSize: 48,
                transform: `scale(${scale})`,
                display: 'inline-block',
              }}
            >
              ⭐
            </span>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 7: CTA
// ============================================================================

const SceneCTA: React.FC = () => {
  const frame = useCurrentFrame();

  // Button heartbeat pulse (every 60 frames)
  const pulseScale = 1 + Math.sin(frame * 0.1) * 0.05;

  // Checkmarks pop in
  const checkmarks = ['Sans carte bancaire', 'Configuration en 15 min', 'Support inclus'].map(
    (text, i) => {
      const checkScale = spring({
        frame: Math.max(0, frame - 40 - i * 20),
        fps: 30,
        config: { damping: 15, stiffness: 150 },
        durationInFrames: 20,
      });
      return { text, scale: checkScale };
    }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* CTA Button */}
      <div
        style={{
          transform: `scale(${pulseScale})`,
          background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
          borderRadius: 20,
          padding: '40px 100px',
          marginBottom: 60,
          cursor: 'pointer',
          boxShadow: '0 20px 60px rgba(99,102,241,0.4)',
        }}
      >
        <div
          style={{
            fontFamily: FONTS.heading,
            fontSize: 56,
            fontWeight: 700,
            color: '#fff',
            textAlign: 'center',
          }}
        >
          ✅ Essai gratuit 48h
        </div>
      </div>

      {/* Checkmarks */}
      <div style={{ textAlign: 'center' }}>
        {checkmarks.map((item, i) => (
          <div
            key={i}
            style={{
              transform: `scale(${item.scale})`,
              fontFamily: FONTS.body,
              fontSize: 32,
              color: '#334155',
              margin: '16px 0',
            }}
          >
            ✓ {item.text}
          </div>
        ))}
      </div>

      {/* Logo */}
      <div
        style={{
          marginTop: 80,
          fontFamily: FONTS.heading,
          fontSize: 48,
          fontWeight: 800,
          color: COLORS.primary,
        }}
      >
        Formation AI
      </div>
    </AbsoluteFill>
  );
};

// ============================================================================
// SCENE 8: END CARD
// ============================================================================

const SceneEndCard: React.FC = () => {
  const frame = useCurrentFrame();

  // URL glow
  const urlGlow = Math.sin(frame * 0.08) * 0.5 + 0.5;

  // Social proof slide
  const socialY = interpolate(frame, [100, 150], [100, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          fontFamily: FONTS.heading,
          fontSize: 120,
          fontWeight: 800,
          background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 40,
        }}
      >
        Formation AI
      </div>

      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 56,
          color: COLORS.text,
          marginBottom: 60,
          textShadow: `0 0 ${40 * urlGlow}px ${COLORS.primary}`,
        }}
      >
        formation.ai
      </div>

      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 48,
          color: COLORS.text,
          marginBottom: 80,
        }}
      >
        Récupérez votre temps. Automatisez.
      </div>

      {/* Social proof badge */}
      <div
        style={{
          transform: `translateY(${socialY}px)`,
          backgroundColor: '#1E293B',
          borderRadius: 16,
          padding: '24px 48px',
          border: `2px solid ${COLORS.primary}`,
        }}
      >
        <span style={{ fontSize: 40, marginRight: 12 }}>🔥</span>
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: 32,
            color: COLORS.text,
          }}
        >
          1,247 fondateurs utilisent Formation
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ============================================================================
// MAIN COMPOSITION
// ============================================================================

export const TestimonialVideo: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill>
      {/* Background Music (optional - add audio file to public/) */}
      {/* <Audio src="/music/inspire-corporate.mp3" volume={0.2} /> */}

      {/* Scene 1: Hook (0-90 frames, 0-3s) */}
      <Sequence from={0} durationInFrames={90} name="Hook">
        <SceneHook />
      </Sequence>

      {/* Scene 2: Problem Setup (90-240 frames, 3-8s) */}
      <Sequence from={90} durationInFrames={150} name="Problem Setup">
        <SceneProblemSetup />
      </Sequence>

      {/* Scene 3: Time Waste (240-450 frames, 8-15s) */}
      <Sequence from={240} durationInFrames={210} name="Time Waste">
        <SceneTimeWaste />
      </Sequence>

      {/* Scene 4: Solution Reveal (450-720 frames, 15-24s) */}
      <Sequence from={450} durationInFrames={270} name="Solution">
        <SceneSolutionReveal />
      </Sequence>

      {/* Scene 5: Results (720-1080 frames, 24-36s) */}
      <Sequence from={720} durationInFrames={360} name="Results">
        <SceneResults />
      </Sequence>

      {/* Scene 6: Testimonial (1080-1440 frames, 36-48s) */}
      <Sequence from={1080} durationInFrames={360} name="Testimonial">
        <SceneTestimonial />
      </Sequence>

      {/* Scene 7: CTA (1440-1800 frames, 48-60s) */}
      <Sequence from={1440} durationInFrames={360} name="CTA">
        <SceneCTA />
      </Sequence>

      {/* Scene 8: End Card (1800-2250 frames, 60-75s) */}
      <Sequence from={1800} durationInFrames={450} name="End Card">
        <SceneEndCard />
      </Sequence>
    </AbsoluteFill>
  );
};

// ============================================================================
// ROOT COMPOSITION REGISTRATION
// ============================================================================

/**
 * Add this to your src/Root.tsx:
 * 
 * import { TestimonialVideo } from './remotion-testimonial';
 * 
 * export const RemotionRoot: React.FC = () => {
 *   return (
 *     <>
 *       <Composition
 *         id="TestimonialVideo"
 *         component={TestimonialVideo}
 *         durationInFrames={2250}
 *         fps={30}
 *         width={1920}
 *         height={1080}
 *       />
 *     </>
 *   );
 * };
 */
