import { useEffect, useRef } from 'react';

export function SilverSparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      fadingIn: boolean;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.5 + 0.1; // Ultra fine
        this.speedX = Math.random() * 0.1 - 0.05; // Almost static
        this.speedY = Math.random() * -0.2 - 0.05; // Slow upward float
        this.opacity = Math.random() * 0.3;
        this.fadeSpeed = Math.random() * 0.002 + 0.001;
        this.fadingIn = Math.random() > 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.y < 0) this.y = canvas!.height;
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;

        // Twinkle effect
        if (this.fadingIn) {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= 0.6) this.fadingIn = false;
        } else {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0.05) this.fadingIn = true;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Metallic Silver
        ctx.fillStyle = `rgba(160, 160, 160, ${this.opacity})`;
        
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      // Lower density for elegance
      const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 40000); 
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
    />
  );
}
