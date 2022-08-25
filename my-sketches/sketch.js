const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'blue';
    context.fillRect(0, 0, width, height);

      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          let width = 60;
          let height = 60;
          let gap = 20;
          let x = 100 + (width + gap) * i;
          let y = 100 + (width + gap) * j;

          context.beginPath();
          context.rect(x, y, width, height);
          context.stroke();


          if (i > 0 && i < 4) {
            context.beginPath();
          context.rect(x + 8, y +8, width -16, height - 16);
          context.stroke();
          }
        }   
      }
  };
};

canvasSketch(sketch, settings);
