const getOrElse = require('./index');

test('no arguments (no default and 0 args) should return undefined', () => {
  expect(getOrElse()).toBe(undefined);
});

test('default argument "STRING" and 0 args should return "STRING"', () => {
  expect(getOrElse("STRING")).toBe("STRING");
});

test('default argument "STRING" and 1st arg undefined and 2nd arg "2ndString" should return "2ndString"', () => {
  expect(getOrElse("STRING", undefined, "2ndString")).toBe("2ndString");
});

function getLower2(array) {
  return array.filter(e => e < 2).length > 0 ? array[0] : undefined
}

test('no default argument and 5 function results where 4 and 5 resolve should return the 4th result"', () => {
  expect(
    getOrElse(
      undefined,
      getLower2([10, 15]),
      getLower2([1000, 8]),
      getLower2([89, 999]),
      getLower2([0.5, 0.7]),
      getLower2([0.1, 0.3])
    )
  ).toBe(0.5);
});
