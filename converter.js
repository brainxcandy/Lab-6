function convertTemperature(obj) {
  if (obj.tempUnits == 'f') {
    return {temp: (obj.temp - 32) * 5 / 9, tempUnits: 'c'};
  }
  return {temp: obj.temp * 9 / 5 + 32, tempUnits: 'f'};
}

alert(convertTemperature({temp:212,tempUnits:'f'}).temp); // 30
