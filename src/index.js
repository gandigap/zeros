module.exports = function getZerosCount(number) {
  // your implementation
  let zeros = 0;
  for(let i = 5; number / i > 1; i = i * 5) {
    zeros += Math.floor(number / i);
  }
  return zeros;
}
