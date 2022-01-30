const path = require('path');
const fs = require('fs');

function getResult() {
  // синхронно получаем входящие данные из файлов
  let input1;
  let input2;

  try {
    input1 = JSON.parse(fs.readFileSync('./src/data/input1.json', 'utf8'));
    input2 = JSON.parse(fs.readFileSync('./src/data/input2.json', 'utf8'));
  } catch (err) {
    console.log('Error reading file');
  }

  // вычисляем длину самого короткого массива
  const theLength = [input1.length, input2.length];
  theLength.sort(function (a, b) {
    return a - b;
  });

  // обрабатываем полученные данные в цикле
  let operationNumber = 0;
  let operationSuccess = 0;
  let failedInput1 = [];
  let failedInput2 = [];
  let output = [];

  for (let i = 0; i < theLength[0]; i++) {
    operationNumber++;
    if (input1[i] === undefined || input1[i] === null) {
      failedInput1.push(operationNumber);
      output.push({ failed: 'error in data 1' });
    } else if (input2[i] === undefined || input2[i] === null) {
      failedInput2.push(operationNumber);
      output.push({ failed: 'error in data 2' });
    } else {
      let operator1 = input1[i][Object.keys(input1[i])[1]];
      let operator2 = input2[i][Object.keys(input2[i])[1]];
      if (operator1 === operator2) {
        operationSuccess++;
        let value1 = input1[i][Object.keys(input1[i])[0]];
        let value2 = input2[i][Object.keys(input2[i])[0]];
        let result = eval(value1 + operator1 + value2);
        output.push({
          operation: operationNumber,
          value1: value1,
          value2: value2,
          operator: operator1,
          result: result,
        });
      }
    }
  }

  output.unshift({
    total: operationNumber,
    success: operationSuccess,
    failed: failedInput1.length + failedInput2.length,
    failedInput1: failedInput1,
    failedInput2: failedInput2,
  });

  // отображаем данные в ui
  // const dataTotal = document.querySelector('.data-total');
  // const dataSuccess = document.querySelector('.data-success');
  // const dataFailed = document.querySelector('.data-failed');
  // const dataFailedData1 = document.querySelector('.data-failed-data1');
  // const dataFailedData2 = document.querySelector('.data-failed-data2');

  // dataTotal.innerText = operationNumber;
  // dataSuccess.innerText = operationSuccess;
  // dataFailed.innerText = failedInput1.length + failedInput2.length;
  // dataFailedData1 = failedInput1;
  // dataFailedData2 = failedInput2;

  // записываем результат в файл
  const filePath = path.join(__dirname, '../data', 'output.json');
  fs.writeFile(filePath, JSON.stringify(output), function (err) {
    if (err) throw err;
  });

  return;
}

getResult();