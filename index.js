const path = require('path');
const fs = require('fs');

function getResult() {
  let arr1;
  let arr2;
  try {
    arr1 = JSON.parse(fs.readFileSync('./data/dataOne.json', 'utf8'));
    arr2 = JSON.parse(fs.readFileSync('./data/dataTwo.json', 'utf8'));
  } catch (err) {
    console.log('Error reading file');
  }

  let operationNumber = 0;
  let operationSuccess = 0;
  let output = [];

  // Получаем длину самого короткого массива
  // let dataLength = [arr1.length, arr2.length].sort()[0];

  for (let i = 0; i < 50000; i++) {
    operationNumber++;
    let operator1 = arr1[i][Object.keys(arr1[i])[1]];
    let operator2 = arr2[i][Object.keys(arr2[i])[1]];

    if (operator1 === operator2) {
      operationSuccess++;
      let value1 = arr1[i][Object.keys(arr1[i])[0]];
      let value2 = arr2[i][Object.keys(arr2[i])[0]];
      let result = eval(value1 + operator1 + value2);
      output.push({ operation: operationNumber, value1: value1, value2: value2, operator: operator1, result: result });
    }
  }

  output.unshift({ totalOperations: operationNumber, sucessOperations: operationSuccess });

  const filePath = path.join(__dirname, 'data', 'output.json');

  fs.writeFile(filePath, JSON.stringify(output), function (err) {
    if (err) throw err;
  });

  return;
}

getResult();
