import React, { useEffect, useRef, useState } from 'react';
import './under.css'
import p5 from 'p5';

const UnderDer = () => {
  const sketchRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true); // Estado para controlar la animación

  useEffect(() => {
    const sketch = new p5(p => {
      let a = 0;
      let b = 400;

      p.setup = () => {
        const width = sketchRef.current.offsetWidth; // Obtener el ancho del contenedor del lienzo
        p.createCanvas(width, 250).parent(sketchRef.current);
      };

      p.draw = () => {
        p.background(0);

        if (isAnimating) {
          // BARRAS DEL FONDO ALTO COMPLETO
          p.push();
          a += 0.25;
          if (a > p.width) {
            a = 100;
          } else {
            p.translate(a, 0);
            for (let x1 = -p.width - 100; x1 < p.width + 100; x1 += 70) {
              p.noStroke();
              p.fill(20);
              p.quad(x1, 0, x1 + 72, p.height, x1 + 106, p.height, x1 + 34, 0);
            }
          }
          p.pop();

          p.push();
          b -= 0.35* (p.pmouseX/140);
          if (b < -p.width || b > p.width ) {
            b = 89;
          } else {
            p.translate(b, p.height / 2 - p.height / 5);
            for (let x = -p.width; x < p.width + 2000; x += 70) {
              p.noStroke();
              p.fill(230, 160, 33);
              p.quad(x, 0, x - 22, p.height / 2.5, x - 56, p.height / 2.5, x - 34, 0);
            }
          }
          p.pop();
        } else {
          // Animación está Desactivada
          p.push();
          a -= 0.25;
          if (a > p.width) {
            a = 100;
          } else {
            p.translate(a, 0);
            for (let x1 = -p.width - 100; x1 < p.width*3; x1 += 70) {
              p.noStroke();
              p.fill(20);
              p.quad(x1, 0, x1 + 72, p.height, x1 + 106, p.height, x1 + 34, 0);
            }
          }
          p.pop();

          p.push();
          b += 0.35* (p.pmouseX/140);
          if (b < -p.width || b > p.width ) {
            b = 89;
          } else {
            p.translate(b, p.height / 2 - p.height / 5);
            for (let x = -p.width; x < p.width + 2000; x += 70) {
              p.noStroke();
              p.fill(230, 160, 33);
              p.quad(x, 0, x - 22, p.height / 2.5, x - 56, p.height / 2.5, x - 34, 0);
            }
          }
          p.pop();
        }
      };

      // Función para cambiar el estado de la animación al hacer clic en el lienzo
      p.mouseClicked = () => {
        setIsAnimating(!isAnimating);
      };
    });

    return () => {
      sketch.remove();
    };
  }, [isAnimating]); // Agregar isAnimating como dependencia para que useEffect se ejecute cada vez que cambie

  return (
    <footer className={isAnimating ? "footer-container animating" : "footer-container"}>
    <div className= 'under-der' ref={ sketchRef } style={ { width: '100%', height: '100%' } }></div>
    </footer>
  );
};

export default UnderDer;
