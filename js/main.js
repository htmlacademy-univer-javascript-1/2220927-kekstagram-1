// Функция, возвращающая случайное целое число из переданного диапазона включительно.
var randomInteger = function(from, before) {
  var arrayAllNumbers = [];
  var randomNumber = 0;
  if (from >= 0 && before >= 0) {
      if(from > before) {
          var c = from;
          from = before;
          before = c;
      }
      for (var i=0; i < (before - from + 1); i++) {
          arrayAllNumbers[i] = [Math.round(), from + i];
      }
      randomNumber =  arrayAllNumbers.sort()[0][1];
  }
  return randomNumber;
}

// Функция для проверки максимальной длины строки.
var checkingMaxStringLength = function(str, maxLength) {
  var satisfies = false;
  if (str.length <= maxLength) {
    satisfies = true;
  }
  return satisfies;
}
