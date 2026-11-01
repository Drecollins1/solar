"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { gallery, galleryCategories } from "@/lib/data";

type Filter = (typeof galleryCategories)[number];

export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const items = filter === "All" ? gallery : gallery.filter((item) => item.category === filter);
  const current = active === null ? null : items[active];

  const step = (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  return (
    <>
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
              filter === category ? "bg-brand text-white" : "bg-surface text-ink hover:bg-line"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.title}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden rounded-2xl bg-surface text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[0.7rem] font-medium text-ink">
                  {item.category}
                </span>
              </div>
              <div className="flex items-end justify-between gap-3 p-4">
                <div>
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                    <MapPin className="size-3" /> {item.location}
                  </p>
                </div>
                <p className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[0.7rem] text-brand">{item.system}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && setActive(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto w-[min(64rem,calc(100vw-2rem))] overflow-visible bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        {current && (
          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black sm:aspect-[16/10]">
              <Image src={current.image} alt={current.title} fill sizes="1024px" className="object-cover" />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-white">
              <div>
                <p className="font-semibold">{current.title}</p>
                <p className="text-sm text-white/70">
                  {current.location} · {current.system}
                </p>
              </div>
              <p className="text-sm text-white/60">
                {(active ?? 0) + 1} / {items.length}
              </p>
            </figcaption>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-3 right-3 rounded-full bg-white/90 p-2 text-ink hover:bg-white"
            >
              <X className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/90 p-2 text-ink hover:bg-white sm:-left-14 sm:-translate-y-[calc(50%+1.5rem)]"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/90 p-2 text-ink hover:bg-white sm:-right-14 sm:-translate-y-[calc(50%+1.5rem)]"
            >
              <ChevronRight className="size-5" />
            </button>
          </figure>
        )}
      </dialog>
    </>
  );
}
