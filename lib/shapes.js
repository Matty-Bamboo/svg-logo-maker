//array with 3 elements
const shapes = [
    'circle',
    'square',
    'triangle',
];

//returns a shape as requested by operator
function getShape(shapes) {
    if (shapes >= 0 && shapes < shapes.length) {
        return shapes[index];
    } else {
        return 'Invalid index';
    }
}

module.exports = { getShape };