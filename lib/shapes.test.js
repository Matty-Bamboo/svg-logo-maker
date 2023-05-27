const jest = require('jest');

const {circle, square, triangle} = require('../index');

describe('Shape properties', () => {
    it('should return a circle shape', () => {
      const shape = generatelogo({
        text: 'xyz',
        textColor: 'red',
        shape: 'circle',
        shapeColor: 'blue',
      });
  
      expect(shape).toMatchObject({
        type: 'circle',
        cx: 50,
        cy: 50,
        r: 40,
        fill: 'blue',
      });
    });

    it('should return a square shape', () => {
        const shape = generatelogo({
          text: 'xyz',
          textColor: 'red',
          shape: 'square',
          shapeColor: 'blue',
        });
    
        expect(shape).toMatchObject({
          type: 'rect',
          width: 200,
          height: 200,
          fill: 'blue',
        });
      });
    
      it('should return a triangle shape', () => {
        const shape = generatelogo({
          text: 'xyz',
          textColor: 'red',
          shape: 'triangle',
          shapeColor: 'blue',
        });
    
        expect(shape).toMatchObject({
          type: 'polygon',
          points: [150, 18, 244, 182, 56, 182],
          fill: 'blue',
        });
      });
    });


