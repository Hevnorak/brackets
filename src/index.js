module.exports = function check(str, bracketsConfig) {
  // your solution
  return JSON.stringify(str) == JSON.stringify(bracketsConfig);
}
