const bars = document.querySelectorAll(".meter-bars i");

function pulseMeters() {
  const t = Date.now() / 650;
  bars.forEach((bar, index) => {
    const lift = Math.sin(t + index * 0.85) * 12 + Math.cos(t * 0.48 + index) * 6;
    const base = [18, 35, 51, 61, 72, 82][index] || 40;
    bar.style.setProperty("--n", Math.max(10, Math.min(92, base + lift)).toFixed(1));
  });
  requestAnimationFrame(pulseMeters);
}

pulseMeters();
