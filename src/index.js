/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;

  for (var i = 0; i < preferences.length; i++) {
    var first = preferences[i];
    var second = preferences[first - 1];
    if (second == first) continue;
    var third = preferences[second - 1];
    if (second == third) continue;
    if ((i + 1) == third) {
      count++;
      preferences[i] = 0;
    }
  }

  return count;
};

//alert(getLoveTrianglesCount([23, 15, 37, 5, 20, 20, 25, 34, 10, 15, 6, 31, 14, 16, 9, 13, 12, 23, 24, 4, 28, 1, 38, 41, 29, 27, 34, 21, 7, 23, 17, 30, 7, 26, 33, 14, 40, 1, 39, 18, 19]));