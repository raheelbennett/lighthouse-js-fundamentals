function calculateRectangleArea(length, width) {
  if(length < 0 || width < 0) {
    return undefined
    }  else   return (length*width);
}
console.log(calculateRectangleArea(10, -5));

function calculateTriangleArea(base, height) {
  if(base < 0 || height < 0) {
    return undefined
  }  else return (base * (height / 2));
}
console.log(calculateTriangleArea(10, -5)); // should print undefined

function calculateCircleArea(radius) {
  if(radius < 0) {
    return undefined
  }  else return (Math.PI * (radius * radius));
}
console.log(calculateCircleArea(-1));