"use client";

import { useEffect } from "react";

export default function MapPage() {
  useEffect(() => {
    fetch("/india-map.svg")
      .then((res) => res.text())
      .then((svgText) => {
        const container = document.getElementById("map-container");
        if (container) {
          container.innerHTML = svgText;

          const paths = container.querySelectorAll("path");
          paths.forEach((path) => {
            const stateName = path.id || path.getAttribute("title") || "Unknown";
            path.addEventListener("click", () => {
              alert(`You clicked on ${stateName}`);
            });
            path.style.cursor = "pointer";
            path.style.fill = "#cccccc";

            path.addEventListener("mouseenter", () => (path.style.fill = "#ff9900"));
            path.addEventListener("mouseleave", () => (path.style.fill = "#cccccc"));
          });
        }
      });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-10">
      <h1 className="text-3xl font-bold font-headline mb-6 text-center">Interactive India Map</h1>
      <div id="map-container" className="w-full max-w-2xl mx-auto" />
    </div>
  );
}
