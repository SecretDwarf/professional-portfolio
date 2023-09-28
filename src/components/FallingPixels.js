import React, { useRef, useEffect } from 'react';

const FallingPixels = () => {
  const canvasRef = useRef(null);
  const pixels = [];
  let gX, gY;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      setInterval(() => {
        gX = Math.floor(Math.random() * window.innerWidth);
        gY = Math.floor(Math.random() * window.innerHeight);
      }, 1000);
    };

    const rng = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const draw = () => {
      for (let i = pixels.length - 1; i >= 0; i--) {
        const y = (pixels[i].y += pixels[i].speed);
        const x = pixels[i].x;

        pixels[i].speed *= pixels[i].accel % 8;

        if (y > canvas.height || x > canvas.width) pixels.splice(i, 1);
        else {
          const size = pixels[i].size;

          context.fillStyle = pixels[i].fillStyle;
          context.fillRect(x, y, size, size);
        }
      }

      context.font = '14px sans-serif';
      context.fillStyle = 'grey';
      context.fillText(`Pixels: ${pixels.length}`, 0, 14);
    };

    const loop = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    const push = (x, y) => {
      pixels.push({
        x,
        y,
        fillStyle: `rgb(${rng(1, 255)},${rng(1, 255)},${rng(1, 255)})`,
        size: rng(1, 10),
        accel: rng(2, 6) / 100 + 1,
        speed: rng(1, 3),
      });
    };

    const pusher = () => {
      push(gX, gY);
      setTimeout(pusher, 5);
    };

    const rain = () => {
      push(rng(1, canvas.width), rng(1, canvas.height));
      setTimeout(rain, 20);
    };

    const handleMouseMove = (event) => {
      gX = event.clientX;
      gY = event.clientY;
    };

    const handleMouseOut = () => {
      setInterval(() => {
        gX = Math.floor(Math.random() * window.innerWidth);
        gY = Math.floor(Math.random() * window.innerHeight);
      }, 1000);
    };

    const handleResize = () => {
      resize();
    };

    resize();
    loop();
    pusher();
    rain();

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default FallingPixels;
