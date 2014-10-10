
var DIET_TIME_ZERO = 5 * 60;
var DIET_ALLOWANCE_00_05 = 0.00; // 00 – 05 hours: 0.00 €

var DIET_TIME_SMALL = 12 * 60;
var DIET_ALLOWANCE_05_12 = 4.00; // 05 – 12 hours: 4.00 €

var DIET_TIME_MEDIUM = 18 * 60;
var DIET_ALLOWANCE_12_18 = 6.00; // 12 – 18 hours: 6.00 €

var DIET_TIME_LARGE = Infinity;
var DIET_ALLOWANCE_18_24 = 9.30; // 18 and more hours: 9.30 €


var getDietAllowance = function(time) {
  if (time < DIET_TIME_ZERO) {
    return DIET_ALLOWANCE_00_05;
  }
  else if (time < DIET_TIME_SMALL) {
    return DIET_ALLOWANCE_05_12;
  }
  else if (time < DIET_TIME_MEDIUM) {
    return DIET_ALLOWANCE_12_18;
  }
  else {
    return DIET_ALLOWANCE_18_24;
  }
};

module.exports = {
  getDietAllowance: getDietAllowance
};
