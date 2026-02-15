'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Remotion Player (only client-side)
const RemotionPlayer = dynamic(
  () => import('@remotion/player').then(mod => mod.Player),
  { ssr: false, loading: () => <VideoLoading /> }
);

// Dynamion import TestimonialVideo component
const TestimonialVideo = dynamic(
  () => import('./RemotionTestimonial').then(mod => mod.TestimonialVideo),
  { ssr: false }
);

function VideoLoading() {
  return (
    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center border-2 border-gray-700 shadow-2xl">
      <div className="text-center text-white">
        <div className="text-6xl mb-4 animate-pulse">▶️</div>
        <p className="text-gray-300 text-sm">Chargement vidéo...</p>
      </div>
    </div>
  );
}

export default function VideoTestimonial() {
  return (
    <Suspense fallback={<VideoLoading />}>
      <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg overflow-hidden shadow-2xl border-2 border-gray-700">
        <RemotionPlayer
          component={TestimonialVideo}
          durationInFrames={2250}
          fps={30}
          compositionWidth={1920}
          compositionHeight={1080}
          style={{
            width: '100%',
            height: '100%',
          }}
          controls
          loop
          autoPlay
        />
      </div>
    </Suspense>
  );
}
