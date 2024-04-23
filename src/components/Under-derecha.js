import React, { useEffect, useRef } from 'react';
import './under.css'
import p5 from 'p5';

const UnderDer = () => {
  const sketchRef = useRef(null);
  const a = useRef(0);
  const b = useRef(400);
  const scrollSpeed = useRef(0);

  useEffect(() => {
    const sketch = new p5(p => {
      p.setup = () => {
        const width = sketchRef.current.offsetWidth; // Obtener el ancho del contenedor del lienzo
        const height = window.innerHeight;
        p.createCanvas(width, height/3).parent(sketchRef.current);
      };

      p.draw = () => {
        p.background(0);
        
        // Barras en movimiento hacia la derecha
        p.push();
        a.current += 0.025 * scrollSpeed.current;
        if (a.current > p.width * 1.5 || a.current < -p.width * 1.5) {
          a.current = 100;
        } else {
          p.translate(a.current, 0);
          for (let x1 = -p.width * 3; x1 < p.width * 3; x1 += 70) {
            p.noStroke();
            p.fill(20);
            p.quad(x1, 0, x1 + 72, p.height, x1 + 106, p.height, x1 + 34, 0);
          }
        }
        p.pop();
        
        // Barras en movimiento hacia la izquierda
        p.push();
        b.current -= 0.025 * scrollSpeed.current;
        if (b.current < -p.width * 1.5 || b.current > p.width * 1.5) {
          b.current = 89;
        } else {
          p.translate(b.current, p.height/3.25);
          p.push();
            for (let x = -p.width * 3; x < p.width * 3; x += 68) {
            p.noStroke();
            p.fill(230, 160, 33);
            p.quad(x, 0, x - 22, p.height / 2.5, x - 56, p.height / 2.5, x - 34, 0);
          }
          p.pop();
        }
      };

      // Función para manejar el desplazamiento del mouse
     p.mouseWheel = event => {
        // Actualizar la velocidad de desplazamiento con el movimiento del scroll del mouse
        scrollSpeed.current += event.delta * 0.0375;
        // Limitar la velocidad máxima y mínima
        scrollSpeed.current = p.constrain(scrollSpeed.current, -100, 100);
        // Deshabilitar desplazamiento predeterminado de la página
        return false;
    };
      let startY = 0;
      p.touchStarted = () => {
        // Verificar si el evento ocurrió dentro del canvas
        if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
          startY = p.mouseY;
          return false; // Evitar el desplazamiento predeterminado de la página solo si ocurrió dentro del canvas
        }
      };
      
      p.touchMoved = () => {
        // Verificar si el evento ocurrió dentro del canvas
        if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
          // Calcular el cambio en la posición y ajustar la velocidad de desplazamiento
          scrollSpeed.current += (p.mouseY - startY) * 0.1;
          startY = p.mouseY;
          // Limitar la velocidad máxima y mínima
          scrollSpeed.current = p.constrain(scrollSpeed.current, -100, 100);
          return false; // Evitar el desplazamiento predeterminado de la página solo si ocurrió dentro del canvas
        }
      };
      
    });

    return () => {
      sketch.remove();
    };
  }, []); // No hay dependencias para que useEffect se ejecute solo una vez

  return (
    <footer className="footer-container">
    <div className= 'under-der' ref={ sketchRef } style={ { width: '100%', height: '100%' } }></div>
    </footer>
  );
};

export default UnderDer;
