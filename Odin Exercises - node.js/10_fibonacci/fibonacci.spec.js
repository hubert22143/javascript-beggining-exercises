const fibonacci = require('./fibonacci')

describe('fibonacci', () => {
  test('4th fibonacci number is 3', () => {
    expect(fibonacci(4)).toBe(3);
  });
  test('6th fibonacci number is 8', () => {
    expect(fibonacci(6)).toBe(8);
  });
  test('10th fibonacci number is 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
  test('15th fibonacci number is 610', () => {
    expect(fibonacci(15)).toBe(610);
  });
  test('25th fibonacci number is 75025', () => {
    expect(fibonacci(25)).toBe(75025);
  });
  test('doesn\'t accept negatives', () => {
    expect(fibonacci(-25)).toBe("OOPS");
  });
 
test("fibonacci › DOES accept strings", () => {
  const result = fibonacci("5");
  console.log(result); // Check the value returned by the function
  expect(result).toBe(5);
});
  test('DOES accept strings', () => {
    expect(fibonacci("2")).toBe(1);
  });
  test('DOES accept strings', () => {
    expect(fibonacci("8")).toBe(21);
  });
});
