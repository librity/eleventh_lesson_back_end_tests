const sum = (a, b) => {
  return a + b;
};

test('calling sum with arguments 4 & 5 should return 9', () => {
  const result = sum(4, 5);

  expect(result).toBe(9);
});
