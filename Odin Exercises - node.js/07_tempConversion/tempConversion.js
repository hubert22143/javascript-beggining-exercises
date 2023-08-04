const convertToCelsius = function(FahrenheitValue) {
FahrenheitFormula = (FahrenheitValue - 32) * 5/9;
const ConvertedCelsiusValue = parseFloat(FahrenheitFormula.toFixed(1));
return ConvertedCelsiusValue;
}

const convertToFahrenheit = function(CelsiusValue) {
  CelsiusFormula = (CelsiusValue * 9/5) + 32;
  const ConvertedToFahrenheitValue = parseFloat(CelsiusFormula.toFixed(1));
  return ConvertedToFahrenheitValue;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
