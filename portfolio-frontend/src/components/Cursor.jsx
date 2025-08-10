import React, { useEffect, useRef } from "react";

const SNOWFLAKE_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M5 12h14M4.22 4.22l15.56 15.56M19.78 4.22L4.22 19.78"/>
  </svg>
`;

function createSnowflakeImage() {
  const img = new Image();
  const svg = new Blob([SNOWFLAKE_SVG], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svg);
  img.src = url;
  return img;
}

export default function CursorSnowflake() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    lastX: window.innerWidth / 2,
    lastY: window.innerHeight / 2,
    vx: 0,
    vy: 0,
  });
  const snowflakeImg = useRef(null);

  const PARTICLE_COUNT = 50;
  const MAX_DISTANCE = 500; // khoảng cách tối đa bông tuyết rơi quanh chuột

  function createParticle(x, y) {
    return {
      x: x + (Math.random() - 0.5) * 30, // phát tán quanh con trỏ 1 chút
      y: y + (Math.random() - 0.5) * 30,
      size: 10 + Math.random() * 6,
      life: 80 + Math.random() * 40,
      alpha: 1,
      vx: (Math.random() - 0.5) * 0.3, // dịch chuyển ngang nhẹ
      vy: 0.5 + Math.random() * 0.5, // rơi chậm xuống dưới
      directionSet: false,
    };
  }

  useEffect(() => {
    snowflakeImg.current = createSnowflakeImage();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.current.push(createParticle(mouse.current.x, mouse.current.y));
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        p.alpha = Math.max(0, p.life / 120);

        // Nếu bông tuyết đi quá xa con trỏ, reset lại gần con trỏ
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (
          p.life <= 0 ||
          p.y > canvas.height + p.size ||
          dist > MAX_DISTANCE
        ) {
          particles.current[i] = createParticle(mouse.current.x, mouse.current.y);
          return; // skip vẽ hạt đã reset
        }

        // Vẽ bông tuyết
        if (snowflakeImg.current.complete) {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.drawImage(
            snowflakeImg.current,
            p.x - p.size / 2,
            p.y - p.size / 2,
            p.size,
            p.size
          );
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    const mouseMoveHandler = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.vx = e.clientX - mouse.current.lastX;
      mouse.current.vy = e.clientY - mouse.current.lastY;
      mouse.current.lastX = e.clientX;
      mouse.current.lastY = e.clientY;
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      if (snowflakeImg.current) URL.revokeObjectURL(snowflakeImg.current.src);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
