import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import './pushi.css';
import SerifFon from './font/SourceSerif.ttf';

const Pushi = () => {
  const xRef = useRef(0);
  const yRef = useRef(0);
  const aRef = useRef(0);
  const bRef = useRef(0);

  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = new p5(p => {
      let miFuente; // Variable para almacenar la fuente cargada

      p.preload = () => {
        // Carga la fuente
        miFuente = p.loadFont(SerifFon);
      };
      p.setup = () => {
        p.createCanvas(480, 160);
        p.textSize(40);
        p.textFont(miFuente);
        p.textStyle(p.BOLD);
      };

      p.draw = () => {
        p.background(0);

        p.push();
        p.translate(120, 0);
        movVerticalCambio(p, 1, 4, 80, p.height / 4);
        if (bRef.current < p.height / 6) {
          p.text(")", p.width / 2, p.height / 2);
        } else {
          p.fill(255);
          p.text("9", p.width / 2, p.height / 2);
        }
        p.pop();

        p.push();
        p.translate(80, 0);
        movVerticalCambio(p, 1, 4.05, 80, p.height / 4);
        if (bRef.current < p.height / 6) {
          p.text("(", p.width / 2, p.height / 2);
        } else {
          p.fill(255);
          p.text("8", p.width / 2, p.height / 2);
        }
        p.pop();

        p.push();
        p.translate(40, 0);
        movVerticalCambio(p, 1, 4.1, 80, p.height / 4);
        p.text("h", p.width / 2, p.height / 2);
        p.pop();

        p.push();
        p.translate(0, 0);
        movVerticalCambio(p, 1, 4.15, 80, p.height / 4);
        p.text("s", p.width / 2, p.height / 2);
        p.pop();

        p.push();
        p.translate(-40, 0);
        movVerticalCambio(p, 1, 4.2, 80, p.height / 4);
        p.text("u", p.width / 2, p.height / 2);
        p.pop();

        p.push();
        p.translate(-80, 0);
        movVerticalCambio(p, 1, 4.25, 80, p.height / 4);
        p.text("p", p.width / 2, p.height / 2);
        p.pop();

        p.push();
        p.translate(-120, 0);
        movVerticalCambio(p, 1, 4.3, 80, p.height / 4);
        p.text("_", p.width / 2, p.height / 2);
        p.pop();
      };

      function movVerticalCambio(p, velX, velY, ancho, alto) {
        yRef.current += 0.00052;
        xRef.current += 0.00052;
        bRef.current = alto * p.cos(velY * yRef.current) + p.sin(xRef.current);
        aRef.current = ancho * p.sin(velX * xRef.current);
        p.translate(aRef.current, bRef.current);
        p.fill(0, 255 - bRef.current, 255 - aRef.current);
      }
    }, sketchRef.current);

    return () => {
      sketch.remove();
    };
  }, []);

  return <div className= 'pushi-container' ref={ sketchRef }></div>;
};
export default Pushi;
