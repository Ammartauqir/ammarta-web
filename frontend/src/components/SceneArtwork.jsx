import React, { memo, useId } from "react";

// Procedural illustrations, deliberately distinct from captures or research results.
const SceneArtwork = memo(function SceneArtwork({
  kind = "lidar",
  className = "",
}) {
  const id = useId().replace(/:/g, "");
  const project = (x, y, z) => [300 + (x - y) * 1.15, 205 + (x + y) * 0.37 - z];
  const points = [];
  for (let i = 0; kind === "lidar" && i < 480; i += 1) {
    const a = i * 2.399963,
      r = Math.sqrt(i / 480) * 190;
    const x = Math.cos(a) * r,
      y = Math.sin(a) * r;
    const z = 7 + Math.sin(x / 45) * 5 + Math.cos(y / 55) * 5;
    const [cx, cy] = project(x, y, z);
    points.push(
      <circle
        key={`ground-${i}`}
        cx={cx}
        cy={cy}
        r={i % 5 ? 1 : 1.8}
        opacity={0.18 + (i % 7) * 0.065}
      />,
    );
  }
  for (let i = 0; kind === "lidar" && i < 340; i += 1) {
    const a = i * 2.399963,
      h = (i % 31) / 31;
    const x = Math.cos(a) * 65,
      y = Math.sin(a) * 35;
    const [cx, cy] = project(x, y, 25 + h * 80);
    points.push(
      <circle
        key={`object-${i}`}
        cx={cx}
        cy={cy}
        r={i % 4 ? 1.5 : 2.2}
        opacity={0.4 + (i % 5) * 0.12}
      />,
    );
  }
  return (
    <svg
      className={`scene-art scene-${kind} ${className}`}
      viewBox="0 0 600 370"
      fill="none"
      role="img"
      aria-label={
        kind === "thermal"
          ? "Illustration of complementary visible and thermal sensing"
          : kind === "lidar"
            ? "Illustrative point-cloud scene, not experimental data"
            : `Conceptual ${kind} illustration, not experimental data`
      }
    >
      <defs>
        <radialGradient id={`${id}-glow`}>
          <stop stopColor="currentColor" stopOpacity=".16" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-thermal`} x2="1" y2="1">
          <stop stopColor="#754db7" />
          <stop offset=".45" stopColor="#f27f74" />
          <stop offset=".8" stopColor="#ffd69c" />
        </linearGradient>
      </defs>
      <ellipse cx="310" cy="200" rx="250" ry="165" fill={`url(#${id}-glow)`} />
      {kind === "thermal" ? (
        <g>
          <path
            d="M110 270 300 340 490 265 300 200Z"
            stroke="currentColor"
            opacity=".2"
          />
          <path
            d="M230 245v-95l60-35 65 27v100l-65 40Z"
            fill={`url(#${id}-thermal)`}
            opacity=".85"
          />
          <path
            d="m230 150 60 27 65-35m-65 35v105"
            stroke="#fff4d8"
            opacity=".6"
          />
          <circle cx="420" cy="125" r="38" stroke="currentColor" opacity=".5" />
          <circle cx="420" cy="125" r="17" stroke="currentColor" />
          <path
            d="m390 155-55 55M175 190l55 7"
            stroke="currentColor"
            strokeDasharray="3 6"
          />
        </g>
      ) : kind === "localization" ? (
        <g stroke="currentColor">
          <path d="m90 260 210 80 210-80-210-80Z" opacity=".4" />
          <path
            d="M130 90 300 270 470 90M130 90l340 0"
            strokeDasharray="3 7"
            opacity=".5"
          />
          <circle cx="130" cy="90" r="12" />
          <circle cx="470" cy="90" r="12" />
          <circle
            cx="300"
            cy="270"
            r="15"
            fill="currentColor"
            fillOpacity=".2"
          />
          <ellipse cx="300" cy="270" rx="70" ry="26" opacity=".4" />
          <path d="M300 225v90m-45-45h90" opacity=".6" />
        </g>
      ) : kind === "flight" ? (
        <g stroke="currentColor">
          <path
            d="m115 280 100-70 60-40 95-65 110-10"
            strokeDasharray="4 8"
            opacity=".5"
          />
          <path
            d="m300 90 18 83 100 63-5 15-98-25-8 51 30 24-3 11-36-14-35 14-3-11 29-24-9-51-98 25-5-15 100-63 17-83Z"
            fill="currentColor"
            fillOpacity=".12"
          />
          <circle cx="300" cy="200" r="135" opacity=".15" />
        </g>
      ) : kind === "ai" ? (
        <g stroke="currentColor">
          <rect x="175" y="65" width="250" height="245" rx="10" opacity=".5" />
          <path d="M210 110h140m-140 22h180m-180 22h110" opacity=".35" />
          <rect
            x="210"
            y="185"
            width="180"
            height="82"
            rx="8"
            fill="currentColor"
            fillOpacity=".08"
          />
          <path d="m235 225 12 12 22-25m20 5h72m-72 20h48" />
          <circle cx="425" cy="115" r="30" fill="var(--site-bg)" />
          <path d="m425 96 5 14 14 5-14 5-5 14-5-14-14-5 14-5Z" />
        </g>
      ) : (
        <g fill="currentColor">{points}</g>
      )}
      <path
        d="M70 45h24M70 45v24M530 45h-24M530 45v24M70 325h24M70 325v-24M530 325h-24M530 325v-24"
        stroke="currentColor"
        opacity=".35"
      />
    </svg>
  );
});

export default SceneArtwork;
