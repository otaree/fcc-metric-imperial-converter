const ConvertHandler = require('../controllers/convertHandler');

const convertor = new ConvertHandler();

const input = "MI";

console.log(convertor.getNum(input));
console.log(convertor.getUnit(input));
// console.log(convertor.getReturnUnit("kg"));
// console.log(convertor.spellOutUnit("mi"));
// console.log(convertor.convert(1.60934, "km"));
// console.log(convertor.getString(1, "mi", 1.60934, "km"));