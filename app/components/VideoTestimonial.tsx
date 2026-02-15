import { useEffect, useState } from 'react';

export default function VideoTestimonial() {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Check if video file exists
    fetch('/videos/sophie-testimonial.mp4', { method: 'HEAD' })
      .then(() => setVideoReady(true))
      .catch(() => setVideoReady(false));
  }, []);

  return (
    <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl border-2 border-gray-700">
      {videoReady ? (
        <video
          controls
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/videos/sophie-testimonial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="text-center text-white">
            <div className="text-6xl mb-4 animate-pulse">▶️</div>
            <p className="text-gray-300 text-sm">
              Vidéo en cours de préparation...
              <br />
              <span className="text-xs text-gray-500">Rechargez la page dans quelques secondes</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
