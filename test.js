// Test Case 1
const input1 = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2
};

console.assert(
  JSON.stringify(solution(input1)) ===
  JSON.stringify({ Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }),
  "Test Case 1 Failed"
);

// Test Case 2 (Missing Thu & Fri)
const input2 = {
  "2020-01-01": 6,
  "2020-01-04": 12,
  "2020-01-05": 14,
  "2020-01-06": 2,
  "2020-01-07": 4
};

console.assert(
  JSON.stringify(solution(input2)) ===
  JSON.stringify({ Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }),
  "Test Case 2 Failed"
);

console.log("All tests passed ✅");
