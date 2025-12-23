function solution(D) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const result = {};

  // Initialize all days with null
  days.forEach(day => result[day] = null);

  // Step 1: Sum values by weekday
  for (const dateStr in D) {
    const date = new Date(dateStr);
    const day = days[date.getDay()];
    result[day] = (result[day] ?? 0) + D[dateStr];
  }

  // Step 2: Fill missing days using mean of prev & next
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    if (result[day] === null) {
      let prev = i - 1;
      let next = i + 1;

      while (result[days[prev]] === null) prev--;
      while (result[days[next]] === null) next++;

      result[day] = (result[days[prev]] + result[days[next]]) / 2;
    }
  }

  return result;
}
