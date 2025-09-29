"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

export default function Starfield() {
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState([]);
  const [pluses, setPluses] = useState([]);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    setMounted(true);

    setStars(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${2 + Math.random() * 2}s`,
      }))
    );

    setPluses(
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );

    setTrails(
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 360}deg`,
      }))
    );
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 rounded-full animate-pulse transition-colors"
          style={{
            backgroundColor: "var(--star-color)", 
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      {/* Plus signs */}
      {pluses.map((plus) => (
        <Plus
          key={plus.id}
          className="absolute w-3 h-3 opacity-60 transition-colors"
          style={{
            color: "var(--plus-color)", // ✅ custom var
            left: plus.left,
            top: plus.top,
          }}
        />
      ))}

      {/* Pixel trails */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="absolute flex gap-1"
          style={{
            left: trail.left,
            top: trail.top,
            transform: `rotate(${trail.rotate})`,
          }}
        >
          {Array.from({ length: 5 }).map((_, j) => (
            <div
              key={j}
              className="w-1 h-1 rounded-full opacity-70 transition-colors"
              style={{
                backgroundColor: "var(--trail-color)", // ✅ custom var
                animationDelay: `${j * 0.1}s`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
