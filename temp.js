let temperature = function (temp, unit='F') {
  if (unit == 'F') {
    let celcius;
    celcius = (temp - 32) * 5 / 9;
    return ` Temperature : ${celcius}\u{00B0}C`;
  } else if (unit == 'C') {
      let fahrenheit;
      fahrenheit = (temp * 9 / 5) + 32;
      return ` Temperature : ${fahrenheit}\u{00B0}F`;
  } else {
      return `Invalid unit ${unit}`;
  }
}

console.log(temperature(15, 'C'));