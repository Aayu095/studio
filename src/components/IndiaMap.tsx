"use client";
import { useEffect, useState } from "react";

console.log("Is sandboxed iframe:", window.top !== window.self);


export default function IndiaMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [cultures, setCultures] = useState<any[]>([]);

  useEffect(() => {
    const loadAndInjectSVG = async () => {
      const res = await fetch("/india-map.svg");
      const svgText = await res.text();

      const container = document.getElementById("svg-container");
      if (container) {
        container.innerHTML = svgText;
      }

      const paths = container?.querySelectorAll("path");

      paths?.forEach((path) => {
        const stateName = path.getAttribute("name") || path.getAttribute("id");
        if (!stateName) return;

        path.style.cursor = "pointer";

        path.addEventListener("mouseenter", () => {
          path.setAttribute("fill", "#FACC15");
        });

        path.addEventListener("mouseleave", () => {
          path.setAttribute("fill", "");
        });

        path.addEventListener("click", async () => {
          setSelectedState(stateName);
          const res = await fetch(`/api/map-cultures?state=${stateName}`);
          const data = await res.json();
          setCultures(data.cultures || []);
        });
      });
    };

    loadAndInjectSVG();
  }, []);

  return (
    <div className="relative">
      {/* ✅ Dynamic SVG goes here */}
      <div id="svg-container" className="w-full max-w-6xl mx-auto" />

      {selectedState && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{selectedState}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {cultures.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-md p-4 border text-left"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="rounded-md mb-2 h-40 w-full object-cover"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
