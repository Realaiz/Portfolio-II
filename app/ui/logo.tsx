'use client';

import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const LogoAnimation: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let numArcs = 2000;

      const spaceObject = ({ col, hue, len, angle, radius, speed, target, isPlanet = false }: SpaceObject): SpaceObject => ({
        col, hue, len, angle, radius, speed, target, isPlanet
      });

      const rInt = (b: number, a = 0) => Math.floor(p.random(Math.min(a, b), Math.max(a, b)));

      const init = () => {
        window.arcs = [];
        window.planets = [];

        window.numCircles = rInt(70, 120);
        window.radius = Math.min(p.width, p.height) * 0.45;
        window.arcSize = window.radius / window.numCircles;
        window.center = { x: 0, y: 0, radius: window.radius, len: window.radius / 2 } as SpaceObject;

        window.baseHue = p.random();
        window.hueRange = p.random(0.2, 0.7) * (p.random() < 0.5 ? -1 : 1);
        window.colorMap = (amt: number, hueShift = 0) => [(window.baseHue + amt * window.hueRange + hueShift) % 1, amt, 1 - amt];

        let variance = p.random(0.05, 0.4);

        for (let i = 0; i < numArcs; i++) {
          let radius = rInt(window.numCircles);
          let amt = radius / window.numCircles + p.random(-variance, variance);
          amt = p.constrain(amt, 0, 1);

          window.arcs.push(spaceObject({
            col: window.colorMap(amt),
            len: p.random() < 0.2 ? 1 / (p.TAU * radius) : p.random(p.HALF_PI),
            angle: p.random(p.TAU),
            radius: radius * window.arcSize,
            speed: p.random(0, 0.3) * (p.random() < 0.5 ? 1 : -1) * 0.02,
          }));
        }

        window.arcs = window.arcs.sort((a, b) => b.len - a.len);

        let numPlanets = rInt(2, 7);
        for (let i = 0; i < numPlanets; i++) {
          let targetCenter = (window.planets.length > 0) && (p.random() < 0.5);
          let target = targetCenter ? window.planets[rInt(0, window.planets.length)] : window.center;
          let len = p.random(0.5, 0.7) * target.len;

          window.planets.push(spaceObject({
            hue: p.random(-0.15, 0.15), len,
            angle: p.random(p.TAU),
            radius: targetCenter ? p.random(target.len / 4) + (len + target.len) / 2 : p.random(window.radius / numPlanets) + window.radius * ((i / numPlanets) * 0.7 + 0.3),
            speed: p.random(0.2, 0.5) * 0.005,
            target, isPlanet: true,
          }));
        }
      };

      p.setup = () => {
        p.createCanvas(140, 140);
        p.colorMode(p.HSB, 1, 1, 1);
        init();
      };

      p.draw = () => {
        p.clear();

        p.push();
        p.translate(p.width / 2, p.height / 2);

        p.noStroke();
        for (let i = window.numCircles; i >= 0; i--) {
          p.fill(window.colorMap((i / window.numCircles) * 0.9));
          p.ellipse(0, 0, i * window.arcSize * 2);
        }

        p.noFill();
        p.strokeWeight(window.arcSize);

        for (let o of window.arcs) {
          o.angle += o.speed;
          p.stroke(...o.col, 0.5);
          p.arc(0, 0, o.radius * 2, o.radius * 2, o.angle, o.angle + o.len);
        }

        for (let o of window.planets) {
          o.angle += o.speed;
          o.x = Math.cos(o.angle) * o.radius + o.target.x;
          o.y = Math.sin(o.angle) * o.radius + o.target.y;

          p.push();
          p.translate(o.x, o.y);
          let a = Math.atan2(o.y, o.x);
          p.rotate(a);
          p.noStroke();
          let percent = (1 - (Math.hypot(o.x, o.y) / window.radius) * 0.4);

          for (let i = o.len; i >= 0; i -= 2) {
            let amt = i / o.len;
            let amt2 = (1 - amt ** 5) * (percent) + (1 - percent);
            p.fill(window.colorMap(amt2, o.hue));
            p.ellipse(-o.len * amt / 2 + o.len / 2 - 1, 0, o.len * amt, Math.sin(amt * p.HALF_PI) * o.len);
          }
          p.pop();
        }
        p.pop();
      };


      p.windowResized = () => {
        p.resizeCanvas(140, 140);
        init();
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current!);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default LogoAnimation;
