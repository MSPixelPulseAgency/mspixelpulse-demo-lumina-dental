"use client";
import { useRef, useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { gallery } from "@/data/site";
import { Photo } from "./ui";
export function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const items = preview
    ? gallery.slice(0, 3)
    : gallery.filter((g) => filter === "All" || g.type === filter);
  useEffect(() => {
    if (selected !== null) dialog.current?.showModal();
  }, [selected]);
  function close() {
    dialog.current?.close();
    setSelected(null);
    trigger.current?.focus();
  }
  return (
    <>
      {!preview && (
        <div className="filter-tabs" aria-label="Filter gallery">
          {["All", "Studio", "Smiles", "Care"].map((f) => (
            <button
              key={f}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      )}
      <div className={`gallery-grid ${preview ? "gallery-preview" : ""}`}>
        {items.map((g) => (
          <button
            key={g.image}
            className="gallery-tile"
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setSelected(gallery.indexOf(g));
            }}
            aria-label={`View ${g.title}`}
          >
            <Photo
              image={g.image}
              alt={g.alt}
              sizes="(max-width: 767px) 100vw, 33vw"
            />
            <span>
              <span>
                {g.title}
                <small>STOCK PHOTOGRAPHY</small>
              </span>
              <ArrowUpRight size={23} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        aria-label="Gallery photograph"
      >
        {selected !== null && (
          <div className="dialog-content">
            <button
              onClick={close}
              className="dialog-close"
              aria-label="Close gallery photograph"
            >
              <X />
            </button>
            <Photo
              image={gallery[selected].image}
              alt={gallery[selected].alt}
            />
            <h2>{gallery[selected].title}</h2>
            <p>
              Licensed stock photograph. Not a LUMINA patient, location or
              treatment result.
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
