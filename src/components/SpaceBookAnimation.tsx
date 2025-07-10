import React, { useEffect, useState } from 'react';
import { Sparkles, Star } from 'lucide-react';

interface SpaceBookAnimationProps {
  onAnimationComplete?: () => void;
  autoPlay?: boolean;
}

const SpaceBookAnimation: React.FC<SpaceBookAnimationProps> = ({ 
  onAnimationComplete, 
  autoPlay = true 
}) => {
  const [isAnimating, setIsAnimating] = useState(autoPlay);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setShowContent(true);
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isAnimating, onAnimationComplete]);

  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2
  }));

  const planets = [
    { x: 15, y: 20, size: 60, color: 'from-blue-400 to-blue-600' },
    { x: 80, y: 70, size: 40, color: 'from-purple-400 to-purple-600' },
    { x: 70, y: 15, size: 25, color: 'from-pink-400 to-pink-600' },
    { x: 10, y: 80, size: 35, color: 'from-indigo-400 to-indigo-600' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`
          }}
        >
          <Star 
            className="text-white opacity-70" 
            size={star.size}
            fill="currentColor"
          />
        </div>
      ))}

      {/* Floating Planets */}
      {planets.map((planet, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${planet.color} opacity-30 animate-float`}
          style={{
            left: `${planet.x}%`,
            top: `${planet.y}%`,
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${4 + index}s`
          }}
        />
      ))}

      {/* Nebula Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main 3D Book Container */}
      <div className="absolute inset-0 flex items-center justify-center perspective-1000">
        <div className={`relative transform-gpu transition-all duration-4000 ${isAnimating ? 'animate-book-open' : ''}`}>
          {/* Book Base */}
          <div className="relative w-80 h-96 mx-auto">
            {/* Book Spine */}
            <div className="absolute left-0 top-0 w-6 h-96 bg-gradient-to-b from-blue-800 to-blue-900 transform-gpu origin-left skew-y-0 shadow-2xl rounded-l-lg" />
            
            {/* Left Page */}
            <div className={`absolute left-6 top-0 w-36 h-96 bg-gradient-to-br from-slate-100 to-slate-200 transform-gpu origin-left transition-all duration-3000 shadow-2xl ${
              isAnimating ? 'rotate-y-180' : 'rotate-y-0'
            }`}>
              <div className="p-6 h-full flex flex-col justify-center items-center text-slate-700">
                <div className="text-center space-y-4">
                  <Sparkles className="h-12 w-12 mx-auto text-blue-600 animate-spin-slow" />
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-300 rounded animate-pulse" />
                    <div className="h-2 bg-slate-300 rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="h-2 bg-slate-300 rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Page */}
            <div className={`absolute right-0 top-0 w-36 h-96 bg-gradient-to-bl from-slate-100 to-slate-200 transform-gpu origin-right transition-all duration-3000 shadow-2xl ${
              isAnimating ? 'rotate-y-180' : 'rotate-y-0'
            }`}>
              <div className="p-6 h-full flex flex-col justify-center items-center text-slate-700">
                <div className="text-center space-y-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Bookly
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-300 rounded animate-pulse" style={{ animationDelay: '0.1s' }} />
                    <div className="h-2 bg-slate-300 rounded animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <div className="h-2 bg-slate-300 rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Book Cover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-lg shadow-2xl transform-gpu transition-all duration-2000 ${
              isAnimating ? 'rotate-y-180 opacity-0' : 'rotate-y-0 opacity-100'
            }`}>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                {/* Cover Design */}
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="h-10 w-10 text-white animate-pulse" />
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Bookly
                  </h1>
                  <p className="text-blue-200 text-sm">Digital Space Library</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4">
                  <Star className="h-6 w-6 text-yellow-300 animate-pulse" fill="currentColor" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Star className="h-4 w-4 text-blue-300 animate-pulse" fill="currentColor" style={{ animationDelay: '0.5s' }} />
                </div>
                <div className="absolute top-1/2 left-4">
                  <Star className="h-3 w-3 text-purple-300 animate-pulse" fill="currentColor" style={{ animationDelay: '1s' }} />
                </div>

                <div className="text-center">
                  <p className="text-xs text-blue-200 opacity-75">
                    Explore the Universe of Knowledge
                  </p>
                </div>
              </div>
            </div>

            {/* Magical Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-float opacity-70"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white text-xl font-semibold mb-4 animate-pulse">
          Opening the Universe of Books...
        </div>
        <div className="flex space-x-2 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={() => {
          setIsAnimating(false);
          setShowContent(true);
          if (onAnimationComplete) onAnimationComplete();
        }}
        className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors text-sm font-medium"
      >
        Skip Animation
      </button>
    </div>
  );
};

export default SpaceBookAnimation;