"use client";
import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ visibleCount = 3 }) {
  // placeholder items for now
  const items = useMemo(() => Array.from({ length: 10 }), []);

  const maxStart = Math.max(0, items.length - visibleCount);
  const [start, setStart] = useState(0);

  const goPrev = () => setStart((s) => Math.max(0, s - visibleCount));
  const goNext = () => setStart((s) => Math.min(maxStart, s + visibleCount));

  const visible = items.slice(start, start + visibleCount);

  return (
    <div className="w-full">
      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
      >
        {visible.map((_, idx) => (
          <div key={start + idx} className="px-0">
            <ProductCard />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          disabled={start === 0}
          className="px-3 py-2 rounded-md border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-medium"
        >
          ← Prev
        </button>

        <div className="text-sm text-gray-600">
          {items.length === 0
            ? "0 items"
            : `${Math.min(start + 1, items.length)} - ${Math.min(
                start + visibleCount,
                items.length
              )} of ${items.length}`}
        </div>

        <button
          onClick={goNext}
          disabled={start >= maxStart}
          className="px-3 py-2 rounded-md border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-medium"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
