import React, { useState, useEffect, useRef } from "react";
import "../styles/before&after.css"; 
import before1 from "../assets/BeforAfter.jpeg";
import before2 from "../assets/BeforeAfter2.jpeg";

const data = [
  { title: "Hydration Boost", before: before1, after: before2, note: "Deep hydration & glow" },
  { title: "Radiance Therapy", before: before2, after: before1, note: "Tone & brightness" },
  { title: "Texture Repair", before: before1, after: before2, note: "Smoother surface" },
  { title: "Acne Renewal", before: before2, after: before1, note: "Reduced blemishes" },
  { title: "Algae Recovery", before: before1, after: before2, note: "Detox & calm" },
];

export default function SkincareBook() {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const touchStartY = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobileView(window.innerWidth <= 820);
    onResize();
    window.addEventListener("resize", onResize);

    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const maxIndex = data.length - 1;

  function next() {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setSpreadIndex((s) => (s >= maxIndex ? 0 : s + 1));
      setIsFlipping(false);
    }, 560); 
  }

  function prev() {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setSpreadIndex((s) => (s <= 0 ? maxIndex : s - 1));
      setIsFlipping(false);
    }, 560);
  }

  function handleTouchStart(e) {
    if (!e.touches || e.touches.length === 0) return;
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const endY = e.changedTouches[0].clientY;
    const endX = e.changedTouches[0].clientX;
    const dy = endY - (touchStartY.current ?? endY);
    const dx = endX - (touchStartX.current ?? endX);

    const absDy = Math.abs(dy);
    const absDx = Math.abs(dx);

    if (isMobileView && absDy > 40 && absDy > absDx) {
      if (dy < 0) next(); 
      else prev(); 
    } else if (!isMobileView && absDx > 40 && absDx > absDy) {
      
      if (dx < 0) next(); 
      else prev(); 
    }
    touchStartY.current = null;
    touchStartX.current = null;
  }

  const spread = data[spreadIndex];

  return (
    <section
      className={`skincare-book ${isMobileView ? "mobile-mode" : "book-mode"} ${isFlipping ? "flipping" : ""}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Skincare transformations book"
      id="book"
    >
      <div className="book-header">
        <h2>Real Transformations, Real Confidence</h2>
        <p>Visible results from personalized skincare treatments</p>
      </div>

      <div className="book-wrap">
                <div className="book-cover-left" />

                {!isMobileView && (
          <div className="book-spread">
            <div className="page left-page">
              <div className="page-inner">
                <div className="image-wrap">
                  <img src={spread.before} alt={`${spread.title} before`} />
                  <div className="mini-badge before-mini">Before</div>
                </div>
                <div className="caption">
                  <h4>{spread.title}</h4>
                  <p className="note">{spread.note} — Before</p>
                </div>
              </div>
            </div>

            <div className="gutter" />

            <div className="page right-page">
              <div className="page-inner">
                <div className="image-wrap">
                  <img src={spread.after} alt={`${spread.title} after`} />
                  <div className="mini-badge after-mini">After</div>
                </div>
                <div className="caption">
                  <h4>{spread.title}</h4>
                  <p className="note">{spread.note} — After</p>
                </div>
              </div>
            </div>
          </div>
        )}

                {isMobileView && (
          <div className="mobile-card" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="mobile-split">
              <div className="mobile-half">
                <div className="image-wrap">
                  <img src={spread.before} alt={`${spread.title} before`} />
                  <div className="mini-badge before-mini">Before</div>
                </div>
                <div className="caption mobile-cap">
                  <h4>{spread.title}</h4>
                  <p className="note">{spread.note} — Before</p>
                </div>
              </div>

              <div className="mobile-half after">
                <div className="image-wrap">
                  <img src={spread.after} alt={`${spread.title} after`} />
                  <div className="mini-badge after-mini">After</div>
                </div>
                <div className="caption mobile-cap">
                  <h4>{spread.title}</h4>
                  <p className="note">{spread.note} — After</p>
                </div>
              </div>
            </div>
          </div>
        )}

                <div className="book-cover-right" />
      </div>

            <div className="book-controls">
        <button className="btn prev" onClick={prev} aria-label="Previous spread">← Prev</button>

        <div className="progress">
          <span className="current">{String(spreadIndex + 1).padStart(2, "0")}</span>
          <span className="slash">/</span>
          <span className="total">{String(data.length).padStart(2, "0")}</span>
        </div>

        <button className="btn next" onClick={next} aria-label="Next spread">Next →</button>
      </div>

      <div className="book-hint">Swipe {isMobileView ? "up/down" : "left/right"}, or use ← → keys</div>
    </section>
  );
}
